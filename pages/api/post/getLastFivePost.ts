import type { NextApiRequest, NextApiResponse } from "next";
import { getAuthorById } from "../../../lib/auth/author";
import { getAllPosts, getLastFivePosts } from "../../../lib/post/getPost";
import { getRefreshTokenByToken } from "../../../lib/token";
import { paraseCookie } from "../../../lib/utils/cookie";
import {createPost} from "../../../lib/post/createPost"
import { decodeRefreshToken, generateTokens } from "../../../lib/utils/jwt";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
      const posts = await getLastFivePosts(['slug', 'title', 'excerpt', 'authorId','tags','comments'])
      return res.status(200).json(posts)
    } catch (error) {
      return res.status(401).send({ status: "someThing went wrong", data: {} });
    }
  }

