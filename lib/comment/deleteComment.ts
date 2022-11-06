import type { NextApiRequest, NextApiResponse } from 'next'
import type { User, Comment } from '../../interfaces'
import getUser from './getCommentUser'
import prisma from '../prisma';

export default async function deleteComments(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { comment }: { comment: Comment } = req.body
  const { authorization } = req.headers

  if (!comment || !authorization) {
    return res.status(400).json({ message: 'Missing parameter.' })
  }
  try {
    // verify user token
    const user: User = await getUser(authorization)
    if (!user) return res.status(400).json({ message: 'Invalid token.' })
    comment.userEmail = user.email

    const isAdmin = process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL === user.email
    const isAuthor = user.sub === comment.userSub

    if (!isAdmin && !isAuthor) {
      return res.status(400).json({ message: 'Need authorization.' })
    }
    await prisma.comment.delete({
      where:{
        id:comment.id
      }
    })
    return res.status(200).end()
  } catch (err) {
    return res.status(400)
  }
}
