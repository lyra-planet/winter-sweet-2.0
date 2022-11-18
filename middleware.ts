import { NextFetchEvent, NextRequest, NextResponse } from "next/server"
import { getRefreshTokenByToken } from "./lib/token"
import { decodeRefreshToken } from "./lib/utils/jwt"

export const middleware = async(req:NextRequest, event: NextFetchEvent) =>{

    return 
}

export const config = {
    matcher: [
    '/dashboard/:path*'
    ],
}