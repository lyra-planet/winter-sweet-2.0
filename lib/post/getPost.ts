import type { Post } from "../../interfaces";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import prisma from "../prisma";
import async from "../../pages/api/post/getList";
import markdownToHtml from "./markdownToHtml";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  console.log(fileContents);
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

export const getAllPostId = () => {
  return prisma.post.findMany({
    select: {
      id: true,
    },
    take: 5,
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
      createdAt: true,
    },
  });
};

export const getAllPosts = async (fields: string[] = []) => {
  const postsId = await getAllPostId();
  console.log(postsId);
  const posts = await Promise.all(
    postsId.map(async (post) => await getPost(post.id, fields))
  );
  return await Promise.all(posts.map(async (post) => ({
    ...post,
    excerpt: await markdownToHtml(post.excerpt || ""),
  })))
};
