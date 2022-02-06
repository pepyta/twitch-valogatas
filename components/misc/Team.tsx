import { Avatar, Card, CardContent, Container, Grid, Typography } from "@mui/material";

const Team = () => {
    return (
        <Grid item xs={12} sx={{
            position: "relative",
            minHeight: 600,
        }}>
            <Container
                maxWidth={"md"}
                sx={{

                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Card>
                    <CardContent>
                        <Typography variant={"h5"} gutterBottom>
                            Rólunk
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum cursus est vitae iaculis. Morbi consectetur interdum sollicitudin. Duis sapien magna, posuere at gravida nec, auctor ac ligula. Aenean ultricies, ligula finibus vulputate tincidunt, lorem arcu sollicitudin lacus, sed tincidunt elit mi at enim. Pellentesque posuere commodo eros, vel dictum sem consectetur vel. Aliquam ut dictum diam. Mauris finibus magna nec vulputate molestie. Mauris sagittis ut neque a porta. Sed vitae efficitur sem, ac accumsan mauris. Proin id nibh ut eros ultricies condimentum ac non dolor. Cras scelerisque augue sit amet blandit laoreet. Morbi auctor blandit libero vitae rhoncus. Etiam fringilla sapien vitae lectus gravida tempus.
                            </Grid>
                            <Grid item xs={12}>
                                Proin pretium dui dolor, ut interdum ipsum fringilla nec. Cras elit tellus, porttitor in iaculis sed, dapibus euismod risus. Duis pulvinar sagittis orci, eu sagittis felis sollicitudin ac. Etiam vel mi sit amet velit volutpat tincidunt. Nam vulputate cursus dolor sed suscipit. In sapien lectus, interdum ut lorem ac, elementum aliquam nulla. Donec posuere arcu ut eleifend mollis. Aliquam ullamcorper ornare lorem, ut dapibus velit laoreet nec. Nulla sit amet ultricies sapien. Curabitur at lectus malesuada, maximus enim et, dictum dui.
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

export default Team;