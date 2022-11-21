import type { NextApiRequest, NextApiResponse } from "next";
import { type } from "os";
import type { Comment } from "../../interfaces";
import markdownToHtml from "../markdownToHtml";
import prisma from "../prisma";

export default async function fetchComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { postId,linkTo }: { postId?: any,linkTo?:any } = req.query;

  if ((!postId&&!linkTo)||(postId&&linkTo)) {
    return res.status(400).json({ message: "Missing parameter." });
  }

  const result: Comment[] | null = postId.length!==0? (await prisma.comment.findMany({
    where: {
      replyToId: postId,
    },
    orderBy: { createdAt: "desc" },
  })):(await prisma.comment.findMany({
    where: {
      //@ts-ignore
      linkTo: linkTo,
    },
    orderBy: { createdAt: "desc" },
  }))
  const comments = await Promise.all(result.map(async (item) => ({
    ...item,
    text: await markdownToHtml(item.text),
    originText:item.text
  })))
  return res.status(200).json(comments);
}
