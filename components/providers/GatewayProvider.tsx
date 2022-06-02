import LoadingScreen from "@components/misc/LoadingScreen";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { PropsWithChildren, useEffect } from "react";

export type GatewayProviderProps = PropsWithChildren<{}>;

const whitelist = [
    "/auth/login",
    "/",
];

const GatewayProvider = ({ children }: GatewayProviderProps) => {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        console.log(router.pathname);
        if(status === "unauthenticated" && !whitelist.includes(router.pathname)) {
            router.push("/auth/login");
        }
    }, [status, router]);

    if(status !== "authenticated" && !whitelist.includes(router.pathname)) {
        return <LoadingScreen />
    }

    return (
        <>
            {children}
        </>  
    );
};

export default GatewayProvider;