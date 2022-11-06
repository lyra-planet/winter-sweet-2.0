import { getPost } from "../../lib/post/getPost";
import markdownToHtml from "../../lib/post/markdownToHtml";
import dynamic from "next/dynamic";
import Header from "../../components/Mobile/Header";

const Main = dynamic(() => import("../../components/Post/Main"), {
  ssr: false,
});

export default function PostPage({ post }) {
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <div className="flex h-full">
        <Main post={post} />
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const postId = context.query.postId;
  console.log(postId);
  const post: any = await getPost(postId, [
    "title",
    "excerpt",
    "authorId",
    "postData",
  ]);
  const content = await markdownToHtml(post.postData || "");
  const excerpt = await markdownToHtml(post.excerpt || "");
  return {
    props: {
      postId,
      post: {
        title: post.title,
        id: post.id,
        excerpt: excerpt,
        content: content,
        createAt: JSON.stringify(post.createdAt),
      },
    },
  };
}
