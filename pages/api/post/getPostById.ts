import type { NextApiRequest, NextApiResponse } from "next";
import { getAboutMe } from "../../../lib/about/getAbout";
import { getPost } from "../../../lib/post/getPost";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const id = req.body
    try {
      const post = await getPost(id, [
        "title",
        "excerpt",
        "authorId",
        "postData",
        "tags"
      ]);
      return res.status(200).json(post)
    } catch (error) {
      return res.status(401).send({ status: "someThing went wrong", data: {} });
    }
  }

