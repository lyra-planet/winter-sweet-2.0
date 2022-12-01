import type { NextApiRequest, NextApiResponse } from 'next'
import { Author } from '../../../../interfaces'
import { getAuthorById } from '../../../../lib/auth/author'
import { createAd, updateAd } from '../../../../lib/other/createOther'
import { getAllAd, getFrontAds } from '../../../../lib/other/getOther'
import { getRefreshTokenByToken } from '../../../../lib/token'
import { paraseCookie } from '../../../../lib/utils/cookie'
import { decodeRefreshToken } from '../../../../lib/utils/jwt'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return await get(req,res)
    default:
      return res.status(400).json({ message: 'Invalid method.' })
  }
}

const get = async(req,res)=>{
  const ads = await getFrontAds()
    return res.status(200).json(ads)
}
