import type { NextApiRequest, NextApiResponse } from 'next'
import { getAuthorByEmailAndPassword } from '../../../lib/auth/author'
import {generateTokens, sendRefreshToken } from '../../../lib/utils/jwt'
import {createRefreshToken} from '../../../lib/token'
import bcrypt from "bcrypt"
import { authorTransformer } from '../../../lib/transformers/author'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    
    const {email,password} =  JSON.parse(req.body)
    console.log(req.body)
    if (!email || !password) {
        return res.status(400).json({status: 'Invalid params'})
    }
    const author = await getAuthorByEmailAndPassword(email)
    if (!author) {
        return res.status(400).json({status: 'authorEmail or password is invalid'})

    }
    
    const doesThePasswordMatch = await bcrypt.compare(password, author.password)

    if (!doesThePasswordMatch) {
        return res.status(400).json({status: 'authorName or password is invalid'})
    }

    const { accessToken, refreshToken } = generateTokens(author)

    await createRefreshToken({
        token: refreshToken,
        authorId: author.id
    })
    sendRefreshToken(res, refreshToken)
    return res.status(200).send({status: 'succeed',data:{
        accessToken: accessToken, author: authorTransformer(author)
    }})
}
  
