import type { NextApiRequest, NextApiResponse } from 'next'
import { getAuthorById } from '../../../lib/auth/author'
import getPosts from '../../../lib/dash/post/get'
import { getRefreshTokenByToken } from '../../../lib/token'
import { paraseCookie } from '../../../lib/utils/cookie'
import { decodeRefreshToken } from '../../../lib/utils/jwt'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const author = await authCheck(req,res)
    console.log(author)
    
    switch (req.method) {
        case 'GET':
          return getPosts(author,req,res)
        case 'POST':
        return res.status(200).json(req.method)
        case 'DELETE':
            return res.status(200).json(req.method)
        default:
            return res.status(400).json({ message: 'Invalid method.' })
  }
}

const authCheck = async(  
    req: NextApiRequest,
    res: NextApiResponse)=>{
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
        return author
    } catch (error) {
        return res.status(401).send({status: 'someThing went wrong',data:{}})
    }
    }else{
        return res.status(200).send({status: 'cant found refreshToken',data:{}})
    }
}