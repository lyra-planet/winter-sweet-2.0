import type { NextApiRequest, NextApiResponse } from "next";
import { getAllFriend} from "../../../lib/other/getOther";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
      const friends = await getAllFriend();
      return res.status(200).json(friends)
    } catch (error) {
      return res.status(401).send({ status: "someThing went wrong", data: {} });
    }
  }

