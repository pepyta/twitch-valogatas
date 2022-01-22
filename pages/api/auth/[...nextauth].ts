import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import TwitchProvider from "next-auth/providers/twitch";
import prisma from "@lib/server/prisma";

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        TwitchProvider({
            clientId: process.env.TWITCH_ID,
            clientSecret: process.env.TWITCH_SECRET,
        }),
    ],
});
