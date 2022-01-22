import prisma from "@lib/server/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export type UpdateAffiliatePayload = { allowTiktok: boolean, allowYoutube: boolean };

const updateAffiliate = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });
    const { allowTiktok, allowYoutube }: UpdateAffiliatePayload = JSON.parse(req.body);

    const isExisting = !!await prisma.affiliate.findUnique({ where: { username: session?.user?.name } });

    if(!isExisting) {
        await prisma.affiliate.create({
            data: {
                username: session.user.name,
                allowTiktok,
                allowYoutube,
            },
        });
    } else {
        await prisma.affiliate.update({
            where: {
                username: session.user.name,
            },
            data: {
                allowTiktok,
                allowYoutube,
            },
        });
    }

    res.json({
        message: "Beállítások sikeresen frissítve!",
    });
};

export default updateAffiliate;