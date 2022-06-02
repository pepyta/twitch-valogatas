import Partners from "@components/misc/Partners";
import Team from "@components/misc/Team";
import Timetable from "@components/misc/Timetable";
import Videos from "@components/misc/Videos";
import { AppBar, Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

const HomePage = () => {
    return (
        <Box>
            <Box
                sx={{
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                    background: "url(/bg.png)",
                    backgroundColor: "#121212",
                    backgroundPosition: "center center",
                    backgroundRrepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    zIndex: -1
                }}
            />
            <Box sx={{ flexGrow: 1, mb: 2 }}>
                <AppBar position="static">
                    <Container maxWidth={"md"}>
                        <Toolbar>
                                    <img src={"/img/logo.png"} style={{
                                        width: 42,
                                        height: 42,
                                        marginRight: 16,
                                    }} />
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        Twitch Válogatás
                                    </Typography>
                                    <Button
                                        variant={"contained"}
                                        href={"https://discord.gg/xNNA3EsSFD"}
                                        sx={{
                                            display: {
                                                xs: "none",
                                                md: "block",
                                            },
                                        }}
                                    >
                                        Klip beküldés
                                    </Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
            <Grid container spacing={2}>
                <Timetable />
                <Team />
                <Partners />
                <Videos />
            </Grid>
        </Box>
    );
};

export default HomePage;