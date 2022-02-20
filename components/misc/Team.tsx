import { Avatar, Card, CardContent, Container, Grid, Typography } from "@mui/material";

const Team = () => {
    return (
        <Grid item xs={12}>
            <Container
                maxWidth={"lg"}
            >
                <Card>
                    <CardContent>
                        <Typography variant={"h5"} gutterBottom>
                            Rólunk
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                A Twitch Válogatás Youtube csatorna 2020 nyara óta foglalkozik a magyar Twitch csatornák klipjeivel. Napi szinten látunk el titeket különféle kategóriájú közvetítések legjobb / legviccesebb pillanataival, igényes vágással fűszerezve.
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    {[0, 0, 0, 0, 0, 0].map((el, index) => (
                                        <Grid item xs={2} key={`team-${index}`}>
                                            <Grid container spacing={1}>
                                                <Grid item xs={12}>
                                                    <Avatar sx={{ margin: "auto" }}>H</Avatar>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Typography sx={{ textAlign: "center", margin: "auto", }}>
                                                        Teszt Elek
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </Grid>
    );
};

const data = [

];

export default Team;