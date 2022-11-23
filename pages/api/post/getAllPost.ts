import type { NextApiRequest, NextApiResponse } from "next";
import { getAllPosts } from "../../../lib/post/getPost";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
      const posts = await getAllPosts([
        "slug",
        "title",
        "excerpt",
        "authorId",
        "tags",
        "authorName",
      ]);
      return res.status(200).json(posts)
    } catch (error) {
      return res.status(401).send({ status: "someThing went wrong", data: {} });
    }
  }

