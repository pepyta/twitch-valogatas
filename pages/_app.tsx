import CategoryProvider from "@components/providers/CategoryProvider";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import GatewayProvider from "@components/providers/GatewayProvider";
import { SnackbarProvider } from "notistack";

const theme = createTheme({
    palette: {
        mode: "dark",
    },
    components: {
        MuiTextField: {
            defaultProps: {
                variant: "filled",
            },
        },
    },
});

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>
                    Twitch Válogatás
                </title>
            </Head>
            <CssBaseline />
            <SnackbarProvider>
                <SessionProvider>
                    <GatewayProvider>
                        <CategoryProvider>
                            <Component {...pageProps} />
                        </CategoryProvider>
                    </GatewayProvider>
                </SessionProvider>
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default MyApp
