import type { NextApiRequest, NextApiResponse } from 'next'
import { createAuthor } from '../../../lib/auth/author'
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const {name,email,password,repeatPassword,profileImage} = req.body
    if (!email || !password || !repeatPassword || !name) {
    return res.status(400).json({status:'Invalid params'})
    }

    if (password !== repeatPassword) {
        return res.status(400).json({status: 'Passwords do not match'})
    }
    const authorData = {
        email,
        password,
        name,
        profileImage:profileImage
    }
    const result = await createAuthor(authorData)
    return res.status(200).json({status: 'succeed', data:result })
  }
  