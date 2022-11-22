import { Suspense, useRef } from "react";
import { useEffect } from "react";
import { GetServerSideProps } from 'next';
import LeftSideBar from '../components/LeftSideBar';
import BlogList from '../components/BlogList';
import RightSideBar from '../components/RightSideBar';
import Footer from '../components/Footer';
import Header from '../components/Mobile/Header'
import AuthLogin from '../components/Auth/Login'
import { getLastFivePosts } from '../lib/post/getPost';
import Layout from "../components/layout";
import Loading from "../components/Comment/stickyForm/loading"
function HomePage() {
  const darkMode = useRef(false);
  return (
      <div className='flex w-full flex-row'>
      <section className='w-full md:w-2/3 lg:w-3/4'>
      <BlogList/>
      </section>
      <section className='w-1/3 lg:w-1/4 hidden md:block border-l xl:ml-[-1px]'>
      <RightSideBar/>
      </section>
      </div>
  )
}
HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default HomePage


