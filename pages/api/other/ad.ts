import type { NextApiRequest, NextApiResponse } from 'next'
import { Author } from '../../../interfaces'
import { getAuthorById } from '../../../lib/auth/author'
import { createAd, updateAd } from '../../../lib/other/createOther'
import { getAd } from '../../../lib/other/getOther'
import { getRefreshTokenByToken } from '../../../lib/token'
import { paraseCookie } from '../../../lib/utils/cookie'
import { decodeRefreshToken } from '../../../lib/utils/jwt'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return await get(req,res)
    case 'POST':
      return await create(req,res)
    default:
      return res.status(400).json({ message: 'Invalid method.' })
  }
}

const create = async(req,res)=>{
    const author = await authCheck(req,res) as Author
    const {name,link,description,status,before} = JSON.parse(req.body)
    console.log(name,link,description,status,before)
    if(before.id){
        await updateAd(before,{
            authorId:author.id,name,
            link,description,status
          })
    }else{
        await createAd({
            authorId: author.id,name,
            link,description,status
          })
    }
      return res.status(200).send({ status: "succeed", data: {} });
}
const get = async(req,res)=>{
    const ad = await getAd()
    return res.status(200).json(ad)
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