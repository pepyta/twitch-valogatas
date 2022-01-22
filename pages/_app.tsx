import { CssBaseline } from "@mui/material";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <CssBaseline />
            <Component {...pageProps} />
        </>
    );
};

export default MyApp
