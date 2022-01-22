import Wrapper from "@components/misc/Wrapper";
import Affiliate from "@lib/client/Affiliate";
import { Card, CardActions, CardContent, Container, Grid, Switch, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [isLoading, setLoading] = useState(false);
    const [allowYoutube, setYoutube] = useState(false);
    const [allowTiktok, setTiktok] = useState(false);

    useEffect(() => {
        setLoading(true);

        Affiliate.get().then((resp) => {
            setYoutube(resp.allowYoutube);
            setTiktok(resp.allowTiktok);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        setLoading(true);

        Affiliate.update({
            allowTiktok,
            allowYoutube,
        }).then(() => setLoading(false));
    }, [allowYoutube, allowTiktok]);

    return (
        <>
            <Wrapper>
                <Container maxWidth={"sm"}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Card>
                                <CardContent>
                                    <Typography variant={"h5"} component={"h2"}>
                                        Klippek felhasználása Youtube videókban
                                    </Typography>
                                    Ezzel engedélyezed, hogy a klippjeidet felhasználhassuk a Twitch válogatás Youtube oldalán.
                                </CardContent>
                                <CardActions>
                                    <Switch disabled={isLoading} checked={allowYoutube} onChange={(_, val) => setYoutube(val)} />
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card>
                                <CardContent>
                                    <Typography variant={"h5"} component={"h2"}>
                                        Klippek felhasználása TikTok videókban
                                    </Typography>
                                    Ezzel engedélyezed, hogy a klipjeidből rövid TikTok videókat készítsünk a @twitchvalogatas profilon.
                                </CardContent>
                                <CardActions>
                                    <Switch disabled={isLoading} checked={allowTiktok} onChange={(_, val) => setTiktok(val)} />
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Wrapper>
        </>
    );
};

export default HomePage;