import { getPost,getPostByTag } from '../../lib/post/getPost';
import markdownToHtml from "../../lib/markdownToHtml";
import dynamic from "next/dynamic";
import Header from "../../components/Mobile/Header";

const Main = dynamic(() => import("../../components/Post/Id/Main"));

export default function PostPage({ post,relativePosts }) {
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <div className="flex h-full">
        <Main post={post} relativePosts={relativePosts} />
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const postId = context.query.postId;
  const post: any = await getPost(postId, [
    "title",
    "excerpt",
    "authorId",
    "postData",
    "tags"
  ]);

  const content = await markdownToHtml(post.postData);
  const excerpt = await Promise.all(post.excerpt.map(item=>markdownToHtml(item || '')))
  const relativePosts = await Promise.all((await getPostByTag(post.tags,post.title,['title', 'excerpt', 'authorId','tags']))
  .map(async ({title,excerpt,createdAt,id,authorId,tags,count})=>(
    {
      title,id,authorId,tags,count,
      excerpt:await Promise.all(post.excerpt.map(item=>markdownToHtml(item || ''))),
      createAt: JSON.stringify(post.createdAt),
    }
  )))
  console.log(relativePosts)
  return {
    props: {
      postId,
      post: {
        title: post.title,
        id: post.id,
        count:post.count,
        excerpt: excerpt,
        content: content,
        createAt: JSON.stringify(post.createdAt),
      },
      relativePosts:relativePosts
    },
  };
}
