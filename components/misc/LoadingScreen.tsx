import { CircularProgress, Grid } from "@mui/material";

const LoadingScreen = () => {
    return (
        <Grid container sx={{ height: "100vh", width: "100vw" }} justifyContent={"center"} alignItems={"center"}>
            <Grid item>
                <CircularProgress size={128} />
            </Grid>
        </Grid>
    );
};

export default LoadingScreen;