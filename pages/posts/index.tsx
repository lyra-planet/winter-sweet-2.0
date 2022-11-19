import type { InferGetStaticPropsType } from "next";
import Footer from "../../components/Footer";
import LeftSideBar from "../../components/LeftSideBar";
import Header from "../../components/Mobile/Header";
import Main from "../../components/Post/Index/Main";
import { getAllPosts } from "../../lib/post/getPost";

export default function NotePage({
  _posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const posts = JSON.parse(_posts);
  return (
    <div className="flex flex-col h-full bg-white">
      <Header />
      <div className="flex h-full">
        <section className="w-1/4 border-r hidden md:block">
          <LeftSideBar />
        </section>
        <section className="w-3/4 flex-grow overflow-auto justify-between items-center scrollbar-none">
          <div className="flex w-full min-h-full flex-row justify-center">
            <Main _posts={posts}/>
          </div>
          <Footer />
        </section>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts([
    "slug",
    "title",
    "excerpt",
    "authorId",
    "tags",
    "authorName",
  ]);
  return {
    props: {
      _posts: JSON.stringify(posts),
    },
  };
}
