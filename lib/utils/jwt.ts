import jwt from "jsonwebtoken"
import { NextApiResponse } from "next"
import { setCookie } from "./cookie"
const generateAccessToken = (author: { id: string }) => { 
  const jwtAccessSecret = process.env.JWT_ACCESS_TOKEN_SECRET
    return jwt.sign({ authorId: author.id },jwtAccessSecret, {
        expiresIn: '10m'
    })
}

const generateRefreshToken = (author: { id: string }) => {
    const jwtRefreshSecret = process.env.JWT_REFRESH_TOKEN_SECRET
    return jwt.sign({ authorId: author.id },jwtRefreshSecret, {
        expiresIn: '24h'
    })
}

export const decodeRefreshToken = (token: string) => {
    const jwtRefreshSecret = process.env.JWT_REFRESH_TOKEN_SECRET
    try {
        return jwt.verify(token,jwtRefreshSecret)
    } catch (error) {
        return null
    }
}

export const decodeAccessToken = (token: string) => {
  const jwtAccessSecret = process.env.JWT_ACCESS_TOKEN_SECRET
    try {
        return jwt.verify(token,jwtAccessSecret)
    } catch (error) {
        return null
    }
}


export const generateTokens = (author: { id: string; email: string; name: string; password: string; profileImage: string; createdAt: Date }) => {
    const accessToken = generateAccessToken(author)
    const refreshToken = generateRefreshToken(author)
    console.log(refreshToken)
    return {
        accessToken: accessToken,
        refreshToken: refreshToken
    }
}

export const sendRefreshToken = (res: NextApiResponse<any>, token: string) => {
    console.log(token)
    if(token!==null){
        setCookie(res, "refresh_token", token, {
            sameSite: true,
            maxAge:3600*24,
            httpOnly: true,
            path: '/',
        })
    }
} 

