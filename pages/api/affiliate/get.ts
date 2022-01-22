import prisma from "@lib/server/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const getAffiliate = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    let affiliate = await prisma.affiliate.findUnique({
        where: {
            username: session.user.name,
        },
    }) || {
        allowTiktok: false,
        allowYoutube: false,
        isPartner: false,
    };

    res.json(affiliate);
};

export default getAffiliate;