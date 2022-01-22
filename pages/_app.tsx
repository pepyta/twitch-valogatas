import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "@components/providers/AuthProvider";
import Head from "next/head";

const theme = createTheme({
    palette: {
        mode: "dark",
    },
});

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
    return (
        <SessionProvider session={session}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                </Head>
                <AuthProvider>
                    <Component {...pageProps} />
                </AuthProvider>
            </ThemeProvider>
        </SessionProvider>
    );
};

export default MyApp
