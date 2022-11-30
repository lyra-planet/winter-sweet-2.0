import type { NextApiRequest, NextApiResponse } from "next";
import { getAllAd, getAllFriend, getAllLabGadget} from "../../../lib/other/getOther";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
      const friends = await getAllFriend();
      console.log(friends)
      const labGadgets = await getAllLabGadget();
      const ads = await getAllAd()
      console.log(friends)
      return res.status(200).json({
        friends,labGadgets,ads
      })
    } catch (error) {
      return res.status(401).send({ status: "someThing went wrong", data: {} });
    }
  }

