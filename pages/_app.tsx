import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";

const theme = createTheme({
    palette: {
        mode: "dark",
    },
});

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp
