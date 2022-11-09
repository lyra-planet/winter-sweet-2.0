import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import LeftSideBar from "../../components/LeftSideBar";
import Header from "../../components/Mobile/Header";
import Main from "../../components/Post/Index/Main";
import { distanceToNow } from "../../lib/dateRelative";
import { getAllPosts } from "../../lib/post/getPost";

export default function NotePage({
  _posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const posts = JSON.parse(_posts);
  return (
    <div className="flex flex-col h-full bg-white">
      <Header />
      <div className="flex h-full">
        <section className="w-1/5 border-r hidden md:block">
          <LeftSideBar />
        </section>
        <section className="w-4/5 flex-grow overflow-auto justify-between scrollbar-none">
          <div className="flex w-full min-h-full flex-row">
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
