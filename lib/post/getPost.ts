import type { Post } from "../../interfaces";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import prisma from "../prisma";
import markdownToHtml from "../markdownToHtml";
import { getAuthorById } from '../auth/author';

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}



/*=============================================
=            Fs            =
=============================================*/
export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Post = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPost(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
/*=====  End of Fs  ======*/



/*=============================================
=            GetPost            =
=============================================*/
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
        },{
          status:0
        },
        {
          status:-1
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
    where:{NOT:[{
        status:0
      },{
        status:-1
      }]},
    select: {
      id: true,
    },
    take: 5,
    orderBy: { createdAt: "desc" },
  });
};
export const getAllPostId = () => {
  return prisma.post.findMany({
    where:{NOT:[{
      status:0
    },{
      status:-1
    }]},
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
      status:true,
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
export const getAllPosts = async (fields: string[] = []) => {
  const postsId = await getAllPostId();
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
/*=====  End of GetPost  ======*/






