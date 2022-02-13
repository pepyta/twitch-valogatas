import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";

const getVideos = async (_: NextApiRequest, res: NextApiResponse) => {
    const service = google.youtube("v3");

    const options: any = {
        playlistId: "UUOtZa4kpUo9c1DiTnN6AfJQ",
        auth: process.env.GOOGLE_API_KEY,
        part: "snippet",
        maxResults: 96,
    };

    const { data } = await service.playlistItems.list(options);

    res.json(
        data.items
    );
};

export default getVideos;