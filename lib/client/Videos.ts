import { youtube_v3 } from "googleapis";

export default class Videos {
    public static async get(): Promise<youtube_v3.Schema$PlaylistItemListResponse[]> {
        const resp = await fetch("/api/videos");
        return resp.json();
    }
}