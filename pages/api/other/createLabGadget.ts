import type { NextApiRequest, NextApiResponse } from "next";
import { getAuthorById } from "../../../lib/auth/author";
import { getAllPost} from "../../../lib/post/getPost";
import { getRefreshTokenByToken } from "../../../lib/token";
import { paraseCookie } from "../../../lib/utils/cookie";
import { decodeRefreshToken} from "../../../lib/utils/jwt";
import { createLabGadget } from "../../../lib/other/createOther";
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
      
      const  {name, picture, description,link} = req.body
      console.log(req.body);
        await createLabGadget({
          authorId: author.id,
          name, picture, description,link
        })
        return res.status(200).send({ status: "succeed", data: {} });
    } catch (error) {
      return res.status(401).send({ status: "someThing went wrong", data: {} });
    }
  }
}
