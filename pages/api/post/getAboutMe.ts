import type { NextApiRequest, NextApiResponse } from "next";
import { getAboutMe } from "../../../lib/about/getAbout";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
      const posts = await getAboutMe()
      return res.status(200).json(posts)
    } catch (error) {
      return res.status(401).send({ status: "someThing went wrong", data: {} });
    }
  }

