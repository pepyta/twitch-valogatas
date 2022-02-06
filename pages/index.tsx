import Contact from "@components/misc/Contact";
import Team from "@components/misc/Team";
import Timetable from "@components/misc/Timetable";
import Youtube from "@components/misc/Youtube";
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
                <Grid item xs={12} md={6}>
                    <Youtube />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Contact />
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomePage;