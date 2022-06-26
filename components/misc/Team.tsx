import { Avatar, Card, CardContent, Container, Grid, Typography } from "@mui/material";

const members = [
    {
        name: "Deniels18",
        image: "deniels18.jpg",
        role: ["Tulajdonos", "Videóvágó"],
    },
    {
        name: "Deka",
        image: "deka.jpg",
        role: ["Tulajdonos", "Videóvágó"],
    },
    {
        name: "Celinay",
        image: "celinay.jpg",
        role: ["Videóvágó"],
    },
    {
        name: "Culogep",
        image: "culogep.jpg",
        role: ["Videóvágó"]
    },
    {
        name: "Pepyta",
        image: "pepyta.webp",
        role: ["Programozó"],
    },
    {
        name: "MrsTwitch",
        image: "mrstwitch.jpg",
        role: ["Moderátor"],
    },
];

const Team = () => {
    return (
        <Grid item xs={12}>
            <Container
                maxWidth={"lg"}
            >
                <Typography variant={"h5"} gutterBottom sx={{ fontWeight: "bold" }}>
                    Rólunk
                </Typography>
                <Card>
                    <CardContent>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                A Twitch Válogatás Youtube csatorna 2020 nyara óta foglalkozik a magyar Twitch csatornák klipjeivel. Napi szinten látunk el titeket különféle kategóriájú közvetítések legjobb / legviccesebb pillanataival, igényes vágással fűszerezve.
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2} columns={members.length}>
                                    {members.map((member, index) => (
                                        <Grid item xs={members.length} md={1} key={`team-${index}`}>
                                            <Grid container spacing={1}>
                                                <Grid item xs={12}>
                                                    <Avatar
                                                        alt={member.name}
                                                        src={`/img/team/${member.image}`}
                                                        sx={{ margin: "auto", width: 64, height: 64 }}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Typography sx={{ textAlign: "center", margin: "auto", }}>
                                                        {member.name}
                                                    </Typography>
                                                    {member.role.map((role, roleIndex) => (
                                                        <Typography variant={"body2"} key={`role-${index}-${roleIndex}`} sx={{ textAlign: "center", margin: "auto", }}>
                                                            {role}
                                                        </Typography>
                                                    ))}
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