import { NextApiRequest, NextApiResponse } from "next";
import { getAuthorById } from "../../../lib/auth/author";
import { getRefreshTokenByToken } from "../../../lib/token";
import { paraseCookie } from "../../../lib/utils/cookie";
import { decodeRefreshToken, generateTokens } from "../../../lib/utils/jwt";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const cookies:any = paraseCookie(req.headers.cookie)
    if('refresh_token' in cookies){
        const refreshToken = cookies.refresh_token
        if (!refreshToken) {
            return res.status(401).send({status: 'Refresh token is invalid',data:{}})
        }
        const rToken = await getRefreshTokenByToken(refreshToken)
        
        if (!rToken) {
            return res.status(401).send({status: 'Refresh token is invalid',data:{}})
        }
        const token:any = decodeRefreshToken(refreshToken)
        
            try {
            const author = await getAuthorById(token.authorId)
           
            const { accessToken } = generateTokens(author)
            
            return res.status(200).send({status: 'succeed',data:{ accessToken: accessToken }})
        } catch (error) {
            return res.status(401).send({status: 'someThing went wrong',data:{}})
        }
    }else{
        return res.status(200).send({status: 'cant found refreshToken',data:{}})
    }
}
  
