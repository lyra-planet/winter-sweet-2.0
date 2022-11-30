import prisma from '../prisma';
export const createPost = async(post,status=1,selected=0)=>{
    const count =  await getCount()
    
    const postData = {
        ...post,
        authorId:`${post.authorId}`,
        count:count,
        status:status,
        selected:selected
    }
    console.log(postData)
    const result = await prisma.post.create({
        data:postData
    })
    
    return result
}
export const updatePost = async(before,after,status=1,selected=0)=>{
    console.log(before,after)
    const postData = {
        ...after,
        authorId:before.authorId,
        count:before.count,
        status:status,
        selected:selected
    }
    const result = await prisma.post.update({
        where:{
            id:before.id
        },
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