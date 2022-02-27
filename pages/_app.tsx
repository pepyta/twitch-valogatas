import CategoryProvider from "@components/providers/CategoryProvider";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";

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
            <CategoryProvider>
                <Component {...pageProps} />
            </CategoryProvider>
        </ThemeProvider>
    );
};

export default MyApp
