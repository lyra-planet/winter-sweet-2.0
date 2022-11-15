import prisma from '../prisma';
export const createPost = async(post)=>{
    const count =  await getCount()
    const postData = {
        ...post,
        authorId:`${post.authorId}`,
        count:count
    }
    const result = await prisma.post.create({
        data:postData
    })
    return result
}
export const deletePosts = ()=>{
    return prisma.post.deleteMany()
}


export const getCount = async ()=>{
    let countDB  = await prisma.postCount.findMany(
        {
            orderBy: { createdAt: 'desc' },
            take:1
        }
    )
    const {id,count} = countDB[0]
    return count
}
export const incCount = async ()=>{
    let countDB = await prisma.postCount.findMany()
    if(countDB.length===0){
      await prisma.postCount.create({
        data:{
          count:0
        }
      })
    }
    countDB  = await prisma.postCount.findMany(
        {
            orderBy: { createdAt: 'desc' },
            take:1
        }
    )
    const {count} = countDB[0]
    await prisma.postCount.create({
        data:{
            count:count+1
        }
    })
}