import CategoryProvider from "@components/providers/CategoryProvider";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import GatewayProvider from "@components/misc/GatewayProvider";

const theme = createTheme({
    palette: {
        mode: "dark",
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
            <SessionProvider>
                <GatewayProvider>
                    <CategoryProvider>
                        <Component {...pageProps} />
                    </CategoryProvider>
                </GatewayProvider>
            </SessionProvider>
        </ThemeProvider>
    );
};

export default MyApp
