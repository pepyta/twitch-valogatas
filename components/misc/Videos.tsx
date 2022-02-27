import { Box, Button, Card, Chip, Container, Grid, Skeleton, Typography, useTheme } from "@mui/material";
import { youtube_v3 } from "googleapis";
import { useEffect, useState } from "react";
import ApiVideos from "@lib/client/Videos";
import { useCategory } from "../providers/CategoryProvider";
import Timetable from "@lib/client/Timetable";
import { DoneRounded } from "@mui/icons-material";

const Videos = () => {
    const [isExpanded, setExpanded] = useState(false);
    const [data, setData] = useState<youtube_v3.Schema$PlaylistItemListResponse[]>();
    const { category, toggle } = useCategory();

    useEffect(() => {
        ApiVideos.get().then(setData);
    }, []);

    return (
        <Grid item xs={12} id={"videos"} sx={{ marginTop: 4 }}>
            <Container maxWidth={"lg"}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant={"h5"} sx={{ fontWeight: "bold" }}>
                            Videók
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            {Timetable.map((el, index) => (
                                <Grid
                                    item
                                    key={`chip-item-${index}`}
                                >
                                    <Chip
                                        label={el.name}
                                        icon={category.includes(index) && <DoneRounded />}
                                        onClick={() => toggle(index)}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    {data ? data.filter((el: any) => category.length === 0 || category.some((cat) => el.snippet.title.includes(Timetable[cat].regex))).slice(0, isExpanded ? undefined : 12).map((row, index) => (
                        <Grid
                            key={`video-item-${index}`}
                            item
                            xs={12}
                            md={6}
                            lg={4}
                            xl={3}
                        >
                            {/* @ts-ignore */}
                            <Item {...row.snippet} />
                        </Grid>
                    )) : Array(24).fill("").map((_, index) => (
                        <Grid
                            key={`video-item-${index}`}
                            item
                            xs={12}
                            md={6}
                            lg={4}
                            xl={3}
                        >
                            <Item />
                        </Grid>
                    ))}
                    <Grid
                        item
                        xs={12}
                        sx={{ textAlign: "center", mb: 2 }}
                    >
                        <Button
                            variant={"contained"}
                            onClick={() => category.length > 0 || isExpanded ?
                                window.open("https://youtube.com/c/TwitchVálogatás", "_blank") : 
                                setExpanded(true)
                            }
                            size={"large"}
                        >
                            { category.length > 0 || isExpanded ? "További videók Youtubeon!" : "További videó betöltése"}
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

const Item = (props) => {
    const theme = useTheme();

    return (
        <a href={`https://www.youtube.com/watch?v=${props.resourceId?.videoId}`} target={"_blank"} rel={"noreferrer"}>
            <Card
                sx={{
                    position: "relative",
                    backgroundPosition: "center",
                    backgroundImage: `url(${props.thumbnails?.high.url})`,
                    backgroundRepeat: "no-repeat",
                    aspectRatio: `${16 / 9} `,
                    backgroundSize: "cover",
                    transition: ".05s all ease-in",
                    filter: `drop-shadow(0 0 5px ${theme.palette.background.paper})`,
                    margin: 0,
                    ":hover": {
                        transform: "scale(1.05)",
                        filter: "drop-shadow(0 0 5px #9146FF)",
                    },
    
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 92,
                        background: "linear-gradient(0, black, transparent)",
                    }}
                />
                <Typography
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: 2,
                        textShadow: "0 0 4px black",
                    }}
                    noWrap
                >
                    {props.title || (
                        <Skeleton />
                    )}
                </Typography>
            </Card>
        </a>
    );
}

export default Videos;