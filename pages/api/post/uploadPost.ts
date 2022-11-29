import type { NextApiRequest, NextApiResponse } from "next";
import { getAuthorById } from "../../../lib/auth/author";
import { getRefreshTokenByToken } from "../../../lib/token";
import { paraseCookie } from "../../../lib/utils/cookie";
import { createPost,incCount, updatePost } from '../../../lib/post/createPost';
import { decodeRefreshToken} from "../../../lib/utils/jwt";
import { matterPost } from "../../../lib/post/matter";
import { Author } from "../../../interfaces";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
      const author = await authCheck(req,res) as Author
      const {before,after,status} = JSON.parse(req.body)
      console.log(after,before)
      const post = matterPost(after)
      
      if(post){
        if(before.title){
          await updatePost(before,{
            authorId: author.id,
              postData: post.content,
              title: post.title,
              tags: post.tags,
              excerpt: post.excerpt,
          },status)
        }else{
          await incCount()
          await createPost({
            authorId: author.id,
              postData: post.content,
              title: post.title,
              tags: post.tags,
              excerpt: post.excerpt,
          },status)
        }
        
      }
    return res.status(200).send({ status: "succeed", data: {} });
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