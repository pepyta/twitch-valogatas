import { Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { signIn, useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const { status } = useSession();
    const router = useRouter();

    const login = async () => {
        try {
            setLoading(true);

            await signIn("credentials", {
                redirect: false,
                username,
                password,
            });

            enqueueSnackbar("Sikeres bejelentkezés!", {
                variant: "success",
            });

            router.push("/admin/");
        } catch(e) {
            enqueueSnackbar("Hibás felhasználónév vagy jelszó!", {
                variant: "error",
            });

            setLoading(false);
        }
    };

    useEffect(() => {
        if(status === "authenticated") router.push("/admin");
    }, [status]);

    return (
        <Grid container>
            <Grid item md={7} sx={{ display: { xs: "none", md: "block" } }}>

            </Grid>
            <Grid item xs={12} md={5}>
                <Grid container sx={{ height: "100vh", width: "100%" }} alignItems={"center"}>
                    <Grid item xs={12}>
                        <Grid container spacing={2} sx={{ p: 2 }}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    type={"text"}
                                    label={"Felhasználónév"}
                                    disabled={isLoading}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    type={"password"}
                                    label={"Jelszó"}
                                    disabled={isLoading}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <LoadingButton
                                    variant={"contained"}
                                    size={"large"}
                                    loading={isLoading}
                                    disabled={isLoading}
                                    onClick={login}
                                    fullWidth
                                >
                                    Bejelentkezés
                                </LoadingButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default LoginPage;