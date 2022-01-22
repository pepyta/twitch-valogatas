import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "@components/providers/AuthProvider";

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
                <AuthProvider>
                    <Component {...pageProps} />
                </AuthProvider>
            </ThemeProvider>
        </SessionProvider>
    );
};

export default MyApp
