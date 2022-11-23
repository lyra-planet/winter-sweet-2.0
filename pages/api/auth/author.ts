
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAuthorById } from '../../../lib/auth/author';
import { decodeAccessToken } from '../../../lib/utils/jwt';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const access_token = JSON.parse(req.body).accessToken
    if(access_token){
      const accessToken:any = decodeAccessToken(access_token)
      const author = await getAuthorById(accessToken.authorId)
      return res.status(200).json({status:"succeed",data:{author:author}})
    }else{
      return res.status(401).json({status:"cant found cookie.beforeDecodedAccessToken"})
    }
}
  