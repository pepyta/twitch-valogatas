import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
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

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider>
                <SessionProvider>
                    <GatewayProvider>
                        <Component {...pageProps} />
                    </GatewayProvider>
                </SessionProvider>
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default MyApp;
