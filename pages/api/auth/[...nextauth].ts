import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@lib/server/prisma";
import bcrypt from "bcryptjs";
import md5 from "md5";

const methods: {
    [key: string]: {
        compare: (input: string, hash: string) => Promise<boolean>;
        hash: (input: string) => Promise<string>;
    }
} = {
    bcrypt: {
        compare: bcrypt.compare,
        hash: async (input: string) => await bcrypt.hash(input, 10),
    },
    // md5 is not safe, but is allowed for a safe transition
    md5: {
        compare: async (input: string, hash: string) => md5(input) == hash,
        hash: async (input: string) => md5(input),
    }
} as const;


const primary: keyof typeof methods = "bcrypt";

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { username, password }: { username: string; password: string } = credentials;
                const user = await prisma.user.findUnique({
                    where: {
                        username,
                    }
                });

                if(!user) return null;
                
                const result = (
                    await Promise.all(
                        Object.keys(methods).map(async (algorithm) => {
                            const { compare } = methods[algorithm];
                            
                            return {
                                algorithm,
                                success: await compare(password, user.password),
                            };
                        })
                    )
                ).find(({ success }) => success);

                if(!result) return null;
                if(result.algorithm !== primary) {
                    await prisma.user.update({
                        where: {
                            id: user.id,
                        },
                        data: {
                            password: await methods[primary].hash(password),
                        }
                    })
                }
                
                return {
                    id: user.id,
                    name: user.name,
                    username: user.username,
                    email: user.email,
                };
            }
        }),
        /*
        TwitchProvider({
            clientId: process.env.TWITCH_CLIENT_ID,
            clientSecret: process.env.TWITCH_CLIENT_SECRET,
        }),
        */
    ],
});
