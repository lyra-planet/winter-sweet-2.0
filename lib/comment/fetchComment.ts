import type { NextApiRequest, NextApiResponse } from "next";
import { type } from "os";
import type { Comment } from "../../interfaces";
import markdownToHtml from "../post/markdownToHtml";
import prisma from "../prisma";

export default async function fetchComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { postId }: { postId?: any } = req.query;

  if (!postId) {
    return res.status(400).json({ message: "Missing parameter." });
  }

  // try {

  // } catch (_) {
  //   return res.status(400).json({ message: 'Unexpected error occurred.' })
  // }
  const result: Comment[] | null = await prisma.comment.findMany({
    where: {
      replyToId: postId,
    },
  });
  const comments = await Promise.all(result.map(async (item) => ({
    ...item,
    text: await markdownToHtml(item.text),
  })))
  return res.status(200).json(comments);
}
