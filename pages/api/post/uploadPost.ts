import type { NextApiRequest, NextApiResponse } from "next";
import { getAuthorById } from "../../../lib/auth/author";
import { getAllPost, getAllPosts } from "../../../lib/post/getPost";
import { getRefreshTokenByToken } from "../../../lib/token";
import { paraseCookie } from "../../../lib/utils/cookie";
import { createPost, deletePosts, incCount } from '../../../lib/post/createPost';
import { decodeRefreshToken, generateTokens } from "../../../lib/utils/jwt";
import { matterPost } from "../../../lib/post/matter";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cookies: any = paraseCookie(req.headers.cookie);
  if ("refresh_token" in cookies) {
    const refreshToken = cookies.refresh_token;
    if (!refreshToken) {
      return res
        .status(401)
        .send({ status: "Refresh token is invalid", data: {} });
    }
    const rToken = await getRefreshTokenByToken(refreshToken);

    if (!rToken) {
      return res
        .status(401)
        .send({ status: "Refresh token is invalid", data: {} });
    }
    const token: any = decodeRefreshToken(refreshToken);
    console.log(token);
    try {
      const author = await getAuthorById(token.authorId);
      console.log(author);
      const posts = getAllPost(["tags","title", "excerpt", "content"]);
      const  post = matterPost(req.body)
      if(post){
        await incCount()
        await createPost({
          authorId: author.id,
            postData: post.content,
            title: post.title,
            tags: post.tags,
            excerpt: post.excerpt,
        })
      }
      return res.status(200).send({ status: "succeed", data: {} });
    } catch (error) {
      return res.status(401).send({ status: "someThing went wrong", data: {} });
    }
  }
}
