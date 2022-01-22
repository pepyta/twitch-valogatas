import { Button, Card, CardContent, Container, Typography } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import LoadingPage from "@components/misc/LoadingPage";

const SigninPage = () => {
    const { status } = useSession();
    const router = useRouter();

    if(status === "authenticated") {
        router.push("/");
        return <LoadingPage />;
    }

    return (
        <Container maxWidth={"sm"}>
            <Card>
                <CardContent>
                    <Typography variant={"h5"} gutterBottom>
                        Bejelentkezés
                    </Typography>
                    <Button
                        variant={"contained"}
                        fullWidth
                        onClick={() => signIn("twitch", { redirect: false })}
                    >
                        Bejelentkezés ezzel: Twitch
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default SigninPage;