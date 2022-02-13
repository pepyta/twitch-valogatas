import Team from "@components/misc/Team";
import Timetable from "@components/misc/Timetable";
import Videos from "@components/misc/Videos";
import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

const HomePage = () => {
    return (
        <Box>
            <Box sx={{ flexGrow: 1, mb: 2 }}>
                <AppBar position="static">
                    <Container maxWidth={"md"}>
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Twitch válogatás
                            </Typography>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
            <Grid container spacing={2}>
                <Timetable />
                <Team />
                <Videos />
            </Grid>
        </Box>
    );
};

export default HomePage;