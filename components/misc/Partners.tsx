import { Avatar, Card, CardActionArea, CardContent, Container, Dialog, DialogTitle, Grid, ListItem, ListItemAvatar, ListItemText, Modal, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

const featured = [
	"ikke_val",
	"MOHOSHOW",
	"rongybabaa",
	"apietrak",
	"SZ_RIRI",
	"Suisenn",
	"welfek",
	"nippon_twitch",
	"Caucher",
];

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
	const [open, setOpen] = useState(false);
	const [images, setImages] = useState({});

	useEffect(() => {
		fetch("/api/channels", {
			method: "POST",
			body: JSON.stringify([
				...list,
				...featured,
			])
		}).then((resp) => {
			resp.json().then((data) => {
				console.log(data);
				setImages(data);
			});
		});
	}, []);

	console.log(images);

	return (
		<Grid item xs={12}>
			<Dialog fullWidth maxWidth={"md"} open={open} onClose={() => setOpen(false)}>
				<DialogTitle>
					Partnereink
				</DialogTitle>
				{list.map((member, index) => (
					<ListItem key={`partner-modal-${member}-${index}`} button onClick={() => window.open(`https://twitch.tv/${member}`, "_blank")}>
						<ListItemAvatar>
							<Avatar src={images[member.toLowerCase()]} alt={member} />
						</ListItemAvatar>
						<ListItemText
							primary={member}
						/>
					</ListItem>
				))}
			</Dialog>
			<Container
				maxWidth={"lg"}
				sx={{ marginTop: 4, marginBottom: 4 }}
			>
				<Typography variant={"h5"} gutterBottom sx={{ fontWeight: "bold" }}>
					Partnereink
				</Typography>
				<Grid container spacing={6}>
					<Grid item xs={12}>
						<Grid container spacing={1} columns={featured.length + 1} >
							{featured.map((member, index) => (
								<Grid item md={2} xs={featured.length + 1} key={`partner-${member}-${index}`}>
									<Card>
										<CardActionArea onClick={() => window.open(`https://twitch.tv/${member}`, "_blank")} sx={{ cursor: "pointer" }}>
											<Grid container spacing={1} sx={{ p: 2 }}>
												<Grid item xs={12}>

													<Avatar src={images[member.toLowerCase()]} sx={{ margin: "auto" }} alt={member} />
												</Grid>
												<Grid item xs={12}>
													<Typography sx={{ textAlign: "center", margin: "auto", }}>
														{member}
													</Typography>
												</Grid>
											</Grid>
										</CardActionArea>
									</Card>
								</Grid>
							))}
							<Grid item md={2} xs={featured.length + 1}>
								<Card>
									<CardActionArea onClick={() => setOpen(true)} sx={{ cursor: "pointer" }}>
										<Grid container spacing={1} sx={{ p: 2 }}>
											<Grid item xs={12}>
												<Avatar sx={{ margin: "auto" }} >
													{list.length}
												</Avatar>
											</Grid>
											<Grid item xs={12}>
												<Typography sx={{ textAlign: "center", margin: "auto", }}>
													további streamer
												</Typography>
											</Grid>
										</Grid>
									</CardActionArea>
								</Card>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Grid>
	);
};

const data = [

];

export default Partners;