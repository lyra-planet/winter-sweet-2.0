import Image from 'next/image'
import { useRef } from "react";
import { useEffect } from "react";
import { GetServerSideProps } from 'next';
import { paraseCookie } from '../lib/utils/cookie';
import Form from '../components/Auth/Form';
import useInitAuth from '../hooks/useInitAuth';
import useLogout from '../hooks/useLogout';
import LeftSideBar from '../components/LeftSideBar';
import BlogList from '../components/BlogList';
import RightSideBar from '../components/RightSideBar';
import Footer from '../components/Footer';
function HomePage() {
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
    <div className='flex  h-full bg-white p-[1px]'>
    <section className='w-1/5 hidden md:block'>
      <LeftSideBar/>
    </section>
    <section className='w-4/5 flex-grow overflow-auto scrollbar-none'>
      <div className='flex w-full flex-row'>
      <section className='flex-grow-4'>
      <BlogList/>
      </section>
      <section className='flex-grow-1 hidden md:block'>
      <RightSideBar/>
      </section>
      </div>
      <Footer/>
    </section>
    </div>

  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async (context) => {

  return {props:{a:1}}
}

