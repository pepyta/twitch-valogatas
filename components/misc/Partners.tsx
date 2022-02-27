import { Avatar, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { useMemo } from "react";

const list = [
	"AlmasPetii",
	"Betti_Plays",
	"ikke_val",
	"MOHOSHOW",
	"pillecukorwinderson",
	"progsoul",
	"rongybabaa",
	"SparklingAnna",
	"targoncaval",
	"BalintCzibere",
	"BG_Csapat",
	"BiGhead_Hun",
	"Cnotil",
	"fejeslovas",
	"Impernal",
	"kattzen666",
	"KissLapajj",
	"lyourlasthopel",
	"nico__0411",
	"Seduxen_iv",
	"apietrak",
	"f0xgamer6",
	"Zsofeszkaa",
	"SZ_RIRI",
	"Caucher",
	"Pilupapa85",
	"Zemhu",
	"Mr_Lagg3rman",
	"murphyyke",
	"m4rc3ll15",
	"bonienne",
	"dokigk",
	"Suisenn",
	"Kartalib",
	"DrTikitaki",
	"p3eti",
	"Culogep",
	"konimagyar",
	"welfek",
	"PATRIOTdaBEAST",
	"Ri_Csaj",
	"JozsefVeres",
	"mrborci",
	"noeel74",
	"mariomahmoud",
	"koprator",
	"nippon_twitch",
];

const Partners = () => {
	const [partners, plusNumber] = useMemo(
		() => {
			const result: string[] = [];

			const DISPLAY_NUMBER = 5;
			const BATCH_SIZE = list.length / DISPLAY_NUMBER;
			for (let i = 0; i < DISPLAY_NUMBER; i++) {
				const index = Math.floor((Math.random() + i) * BATCH_SIZE);
				result.push(list[index]);
			}

			return [result, list.length - DISPLAY_NUMBER];
		},
		[]
	);

	return (
		<Grid item xs={12}>
			<Container
				maxWidth={"lg"}
			>
				<Card>
					<CardContent>
						<Typography variant={"h5"} gutterBottom>
							Partnereink
						</Typography>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Grid container spacing={1} >
									{partners.map((member, index) => (
										<Grid item xs={2} key={`partner-${index}`}>
											<Grid container spacing={1}>
												<Grid item xs={12}>
													<Avatar alt={member} sx={{ margin: "auto" }} />
												</Grid>
												<Grid item xs={12}>
													<Typography sx={{ textAlign: "center", margin: "auto", }}>
														{member}
													</Typography>
												</Grid>
											</Grid>
										</Grid>
									))}
									<Grid item xs={2}>
										<Grid container spacing={1}>
											<Grid item xs={12}>
												<Avatar sx={{ margin: "auto" }} >
													{plusNumber}
												</Avatar>
											</Grid>
											<Grid item xs={12}>
												<Typography sx={{ textAlign: "center", margin: "auto", }}>
													további streamer
												</Typography>
											</Grid>
										</Grid>
									</Grid>
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

export default Partners;