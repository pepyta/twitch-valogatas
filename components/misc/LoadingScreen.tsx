import { CircularProgress, Grid } from "@mui/material";

const LoadingScreen = () => {
    return (
        <Grid container sx={{ height: "100vh", width: "100vw" }} justifyContent={"center"} alignItems={"center"}>
            <Grid item>
                <CircularProgress size={64} />
            </Grid>
        </Grid>
    );
};

export default LoadingScreen;