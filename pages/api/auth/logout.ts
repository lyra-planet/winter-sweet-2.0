import type { NextApiRequest, NextApiResponse } from 'next'
import { NextFetchEvent } from 'next/server';
import { removeRefreshToken } from '../../../lib/token/index';

import { paraseCookie, delCookie } from '../../../lib/utils/cookie';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
    event:NextFetchEvent
  ) {
    const cookies:any = paraseCookie(req.headers.cookie)
    if('refresh_token' in cookies){
        try{
            const refreshToken = cookies.refresh_token
            if (!refreshToken) {
                return res.status(401).send({status: 'Refresh token is invalid',data:{}})
            }
            await removeRefreshToken(refreshToken)
            delCookie(res,'refresh_token')
            return res.status(200).send({status: 'succeed',data:{}})
        } catch (error) {
            return res.status(401).send({status: 'someThing went wrong',data:{}})
        }
    }else{
        return res.status(401).send({status: 'cant found refreshToken',data:{}})
    }
}
  
