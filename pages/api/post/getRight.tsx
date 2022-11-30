import { NextApiRequest, NextApiResponse } from "next";
import { getAd } from "../../../lib/other/getOther";
import { getSelection } from "../../../lib/post/getPost";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
      try {
        const posts = await getSelection([
          "title",
          "excerpt",
          "authorId",
        ]);
        const ad = await getAd()
        return res.status(200).json({posts,ad})
      } catch (error) {
        return res.status(401).send({ status: "someThing went wrong", data: {} });
      }
    }