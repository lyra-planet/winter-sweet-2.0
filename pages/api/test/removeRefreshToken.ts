import { NextApiRequest,NextApiResponse } from "next/types";
import { removeAllRefreshToken } from "../../../lib/token";


export default async function hander(
    req: NextApiRequest,
    res: NextApiResponse
){
    await  removeAllRefreshToken()
    return res.status(200).json({status: 'succeed', data:{message:"最后记得删!"}})
}