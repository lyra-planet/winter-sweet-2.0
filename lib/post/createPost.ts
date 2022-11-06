import prisma from '../prisma';
export const createPost = (post)=>{
    const result = prisma.post.create({
        data:post
    })
    return result
}