import { useRef } from "react";
import { useEffect } from "react";
import { GetServerSideProps } from 'next';
import useInitAuth from '../hooks/useInitAuth';
import useLogout from '../hooks/useLogout';
import LeftSideBar from '../components/LeftSideBar';
import BlogList from '../components/BlogList';
import RightSideBar from '../components/RightSideBar';
import Footer from '../components/Footer';
import Header from '../components/Mobile/Header'
import { getLastFivePosts } from '../lib/post/getPost';
function HomePage({posts}) {
  const darkMode = useRef(false);
  const {initAuth} = useInitAuth()
  const logout = useLogout()
  useEffect(()=>{
  initAuth()
},[])
  // const handleLogout = (e)=>{
  //   e.preventDefault()
  //   logout()
  // }
  return (
    <div className='flex flex-col h-full bg-white'>
   <Header/>
   <div className="flex h-full">
   <section className='w-1/5 border-r hidden md:block'>
      <LeftSideBar/>
    </section>
    <section className='w-4/5 flex-grow overflow-auto scrollbar-none'>
      <div className='flex w-full flex-row'>
      <section className='md:w-2/3 lg:w-3/4'>
      <BlogList posts={JSON.parse(posts)}/>
      </section>
      <section className='w-1/3 lg:w-1/4 hidden md:block border-l'>
      <RightSideBar/>
      </section>
      </div>
      <Footer/>
    </section>
    </div>

    </div>

  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await getLastFivePosts(['slug', 'title', 'excerpt', 'authorId','tags'])
  return {props:{
    posts:JSON.stringify(posts)
  }}
}

