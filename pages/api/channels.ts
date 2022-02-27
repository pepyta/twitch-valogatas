import { responsiveProperty } from "@mui/material/styles/cssUtils";
import { NextApiRequest, NextApiResponse } from "next";

if(!global.twitchCache) {
    global.twitchCache = new Map();
}

const cache: Map<string, string> = global.twitchCache;

export default async function(req: NextApiRequest, res: NextApiResponse) {
    const usernames = JSON.parse(req.body);

    const queries = usernames.filter((el) => !cache.has(el.toLowerCase()));

    if(queries.length > 0) {
        const { access_token } = await (await fetch(`https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_ID}&client_secret=${process.env.TWITCH_SECRET}&grant_type=client_credentials&scope=`, {
            method: "POST"
        })).json();
    
        const resp = await (await fetch(`https://api.twitch.tv/helix/users?${queries.map((el) => `login=${el}`).join("&")}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${access_token}`,
                "Client-Id": process.env.TWITCH_ID
            }
        })).json();

        const { data } = resp;

        data.forEach(({ display_name, profile_image_url }) => {
            cache.set(display_name.toLowerCase(), profile_image_url);
        });
    }

    const tmp = {};
    for(const key of cache.keys()) {
        tmp[key] = cache.get(key);
    }

    res.json(tmp);
};