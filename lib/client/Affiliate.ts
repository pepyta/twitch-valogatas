import { UpdateAffiliatePayload } from "@pages/api/affiliate/update";
import { Affiliate as PrismaAffiliate } from "@prisma/client";

export default class Affiliate {
    public static async get(): Promise<PrismaAffiliate> {
        const resp = await fetch("/api/affiliate/get");
        return resp.json();
    }

    public static async update(data: UpdateAffiliatePayload): Promise<{ message: string }> {
        const resp = await fetch("/api/affiliate/update", {
            body: JSON.stringify(data),
            method: "POST",
        });
        return resp.json();

    }
}