import type { GetServerSideProps, InferGetStaticPropsType } from "next";
import Footer from "../../components/Footer";
import Layout from "../../components/layout";
import LeftSideBar from "../../components/LeftSideBar";
import Header from "../../components/Mobile/Header";
import Main from "../../components/Post/Main";
import { getAllPosts } from "../../lib/post/getPost";

export default function index() {
  return (
   <Main/>
  );
}
index.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

