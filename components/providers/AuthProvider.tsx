import LoadingPage from "@components/misc/LoadingPage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

export type AuthProviderProps = PropsWithChildren<{}>;

/**
 * Provider to handle unauthenticated and loading states.
 */
const AuthProvider = (props:  AuthProviderProps) => {
    const router = useRouter();
    const session = useSession();

    if(session.status !== "authenticated" && router.route === "/auth/signin") {
        if(session.status === "unauthenticated") router.push("/auth/signin");

        return (
            <LoadingPage />
        );
    }

    return (
        <>
            {props.children}
        </>
    );
};

export default AuthProvider;