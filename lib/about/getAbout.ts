import prisma from "../prisma";
import markdownToHtml from "../markdownToHtml";



/*=============================================
=            GetAboutMe           =
=============================================*/
export const getAboutMeId = () => {
  return prisma.post.findMany({
    where:{
      AND:[
       { title:{
          contains:"关于我"
        }}
      ],
      NOT:[{
      status:0
    },{
      status:-1
    }],    

  },
    select: {
      id: true,
    },
    take:1,
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
      authorId: true,
      postData:true,
      title:true,
      count:true,
      createdAt: true,
    },
  });
};
export const getAboutMe = async (fields: string[] = []) => {
    const postsId = await getAboutMeId();
    console.log(postsId)
    const posts = await Promise.all(
      postsId.map(async (post) => await getPost(post.id, fields))
    );
    return await Promise.all(posts.map(async (post) => ({
      ...post,
      createdAt:JSON.stringify(post.createdAt),
      content: await markdownToHtml(post.postData),
    })))
  };
/*=====  End of GetAboutMe  ======*/






