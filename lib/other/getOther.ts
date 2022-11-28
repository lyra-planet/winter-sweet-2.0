import prisma from "../prisma";
import markdownToHtml from "../markdownToHtml";
import { getAuthorById } from '../auth/author';


export const getPostByTag = (tags:string[],title:string, fields: string[] = [])=>{
    return prisma.post.findMany({
      where:{
        OR:[
          {
            tags:{
              hasSome:tags
            }
          }
        ],NOT:[
        {
          title:{
            contains:title
          }
        }
        ]
      },
      take: 4,
      select: {
        id: true,
        count:true,
        authorId: fields.indexOf("authorId") !== -1,
        postData: fields.indexOf("postData") !== -1,
        title: fields.indexOf("title") !== -1,
        tags: fields.indexOf("tags") !== -1,
        excerpt: fields.indexOf("excerpt") !== -1,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
    })
}




export const getLastFivePostId = () => {
  return prisma.post.findMany({
    select: {
      id: true,
    },
    take: 5,
    orderBy: { createdAt: "desc" },
  });
};
export const getAllPostId = () => {
  return prisma.post.findMany({
    select: {
      id: true,
    },
    orderBy: { createdAt: "desc" },
  });
};
export const getPost = (id: string, fields: string[] = []) => {
  return prisma.post.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      authorId: fields.indexOf("authorId") !== -1,
      postData: fields.indexOf("postData") !== -1,
      title: fields.indexOf("title") !== -1,
      tags: fields.indexOf("tags") !== -1,
      excerpt: fields.indexOf("excerpt") !== -1,
      comments: fields.indexOf("comments") !== -1,
      count:true,
      createdAt: true,
    },
  });
};
export const getLastFivePosts = async (fields: string[] = []) => {
  const postsId = await getLastFivePostId();
  const posts = await Promise.all(
    postsId.map(async (post) => await getPost(post.id, fields))
  );
  return await Promise.all(posts.map(async (post) => ({
    ...post,
    authorName: await getAuthorById(post.authorId),
    excerpt: await Promise.all(post.excerpt.map(item=>markdownToHtml(item || ''))) ,
  })))
};

export const getAllTags= async () => {
  const postsId = await getAllPostId();
  const posts = await Promise.all(
    postsId.map(async (post) => await getPost(post.id, ["tags","title"]))
  );
  return posts
};






export const getAllLabGadget = async () => {
  return prisma.labGadget.findMany({orderBy: { createdAt: "desc" } });
};
export const getAllFriend = async () => {
  return prisma.friend.findMany({orderBy: { createdAt: "desc" } });
};