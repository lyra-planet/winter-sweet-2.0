import type { NextApiRequest, NextApiResponse } from 'next'
import type { Comment } from '../../interfaces'

import getUser from './getCommentUser'
import prisma from '../prisma'
export default async function createComments(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { replyToId, text,linkTo } = req.body
  const { authorization } = req.headers

  if ((!replyToId&&!linkTo)|| (replyToId&&linkTo) || !text || !authorization) {
    return res.status(400).json({ message: 'Missing parameter.' })
  }
  // try {
    // verify user token
    const user = await getUser(authorization)
    if (!user) return res.status(400).json({ message: 'Need authorization.' })

    const { name, picture, sub, email } = user
    
    const comment: Comment = {
      text,
      userName: name,
      userPicture: picture,
      userSub: sub,
      userEmail: email,
    }
    if(linkTo.length!==0){
      comment.linkTo = linkTo
    }
    if(replyToId.length!==0){
      comment.replyToId = replyToId
    }
    // write data
    await prisma.comment.create({
      //@ts-ignore
      data:comment
    })

    console.log(user)
    return res.status(200).json(comment)
  // } catch (_) {
  //   return res.status(400).json({ message: 'Unexpected error occurred.' })
  // }
}
