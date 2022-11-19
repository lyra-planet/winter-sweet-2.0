import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import Header from "./Mobile/Header";

export default function Layout({ children }) {
    return (
        <div className='flex flex-col h-full bg-white relative'>
        <Header/>
        <div className="flex h-full">
        <section className='w-1/5 border-r hidden md:block'>
       <LeftSideBar/>
         </section>
         <section className='w-4/5 flex-grow overflow-auto scrollbar-none'>
           <div className='flex w-full flex-row'>
            {children}
           </div>
           <Footer/>
         </section>
         </div>
         </div>
    )
}