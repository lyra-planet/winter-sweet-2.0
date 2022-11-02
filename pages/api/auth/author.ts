
import type { NextApiRequest, NextApiResponse } from 'next'
import { createAuthor, getAuthorById } from '../../../lib/auth/author';
import { authorTransformer } from '../../../lib/transformers/author';
import { decodeAccessToken } from '../../../lib/utils/jwt';
import { paraseCookie } from '../../../lib/utils/cookie';
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
  