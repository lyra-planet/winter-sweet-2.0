import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import Header from "./Mobile/Header";

export default function Layout({ children }) {
  const {pathname} = useRouter()
  const mainRef = useRef(null)
  useEffect(() => {
    mainRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  },[pathname])
    return (
        <div className='flex flex-col h-full bg-white relative'>
        <Header/>
        <div className="flex h-full">
        <section className='w-1/5 border-r hidden md:block'>
       <LeftSideBar/>
         </section>
         <section ref={mainRef}  className='w-4/5 flex-grow overflow-auto scrollbar-none'>
           <div className='flex w-full flex-row flex-grow'>
            {children}
           </div>
           <Footer/>
         </section>
         </div>
         </div>
    )
}