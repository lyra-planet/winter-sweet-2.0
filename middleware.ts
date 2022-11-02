import { NextFetchEvent, NextRequest, NextResponse } from "next/server"

export const middleware = async(req:NextRequest, event: NextFetchEvent) =>{
    const response = NextResponse.next()
    const token = req.headers.get('authorization')?.split(' ')[1]
    if (token===undefined) {
        return 
    }
    try {
        return response
    } catch (error) {
        return
    }
}

export const config = {
    matcher: [
    '/api/auth/author',
    '/api/auth/login',
    '/api/auth/refresh'
    ],
}