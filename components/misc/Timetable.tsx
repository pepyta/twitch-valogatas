import { Box, Container, Grid, useTheme } from "@mui/material";
import Data from "@lib/client/Timetable";
import Image from "next/image";
import { useCategory } from "@components/providers/CategoryProvider";

const Timetable = () => {
    const theme = useTheme();
    const { select } = useCategory();

    return (

        <Grid item xs={12} sx={{
            minHeight: 600,
            position: "relative",
        }}>
            <Container maxWidth={"lg"} sx={{
                paddingTop: "100px",
                paddingBottom: "100px",
            }}>
                <Grid container columns={7} justifyContent={"center"}>
                    {Data.map((row, index) => (
                        <Grid
                            xs={2}
                            md={1}
                            item
                            key={`timetable-image-${index}`}
                            sx={{
                                paddingTop: 2,
                                paddingBottom: 2,
                                textAlign: "center",
                                transition: ".05s all ease-in",
                                filter: `drop-shadow(0 0 5px ${theme.palette.background.paper})`,
                                margin: 0,
                                ":hover": {
                                    transform: "scale(1.2)",
                                    filter: "drop-shadow(0 0 5px #9146FF)",
                                },
                            }}
                        >
                            <a href={"#videos"} onClick={() => select(index)}>
                                <Image
                                    src={`/img/${row.image}`}
                                    height={300}
                                    width={200}
                                    alt={row.name}
                                />
                            </a>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {/* 
            <Box
                sx={{
                    bottom: 0,
                    left: 0,
                    right: 0,
                    position: "absolute",
                    background: `linear-gradient(transparent, ${theme.palette.background.default})`,
                    height: 64,
                }}
            />
            */}
        </Grid>
    );
};

export default Timetable;