import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import Footer from "../Footer";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";

export default function Layout({ children }) {
    return (
        <div className='flex flex-col h-full bg-white'>
        <div className="h-10 md:hidden">
        <Header/>
        </div>
        <div className="flex h-full">
        <section className='w-1/5 h-full border-r hidden md:block'>
       <LeftSideBar/>
         </section>
         <section className="w-full md:w-4/5 h-full">
            {children}
         </section>
         </div>
         </div>
    )
}