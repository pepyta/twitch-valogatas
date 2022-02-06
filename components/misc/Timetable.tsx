import { Box, Container, Grid, useTheme } from "@mui/material";
import Data from "@lib/client/Timetable";
import Image from "next/image";

const Timetable = () => {
    const theme = useTheme();

    return (
        <Grid item xs={12} sx={{
            height: 600,
            position: "relative",
            background: "url(./background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
        }}>

            <Container maxWidth={"lg"} sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}>
                <Grid container columns={7}>
                    {Data.map((row, index) => (
                        <Grid
                            xs={1}
                            item
                            key={`timetable-image-${index}`}
                            sx={{
                                textAlign: "center",
                                transition: ".05s all ease-in",
                                filter: "drop-shadow(0 0 5px #000)",
                                margin: 0,
                                ":hover": {
                                    transform: "scale(1.2)",
                                },
                            }}
                        >
                            <Image
                                src={`/img/${row.image}`}
                                height={300}
                                width={200}
                                alt={row.name}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
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
        </Grid>
    );
};

export default Timetable;