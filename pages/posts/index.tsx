import type { GetServerSideProps, InferGetStaticPropsType } from "next";
import Footer from "../../components/Footer";
import Layout from "../../components/layout";
import LeftSideBar from "../../components/LeftSideBar";
import Header from "../../components/Mobile/Header";
import Main from "../../components/Post/Main";
import { getAllPosts } from "../../lib/post/getPost";

export default function index({
  _posts,
}) {
  const posts = JSON.parse(_posts);
  return (
   <Main _posts={posts}/>
  );
}
index.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
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
