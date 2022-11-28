import { useRouter } from "next/router"
import Main from "../../components/Tag/Main";
import Layout from "../../components/layout"
import LeftSideBar from "../../components/Tag/Main/leftSideBar";
import { useState } from "react";
import useAllTag from "../../hooks/useAllTag";
import Loading from "../../components/Tag/Main/loading";

const index = () => {
    const tags = useAllTag()
    const [active,setActive] = useState(0)
    const handlePosts = (index)=>{
        setActive(index)
    }
  return (
    <div className="pt-8 pb-10 px-10 space-y-4 w-full flex flex-col h-full md:h-screen">
    <section className=" md:h-[10%]">
        <h1 className="flex items-center space-x-2 text-3xl font-bold font-serif">
        <p>Lyra.Planet</p>
        <p className="w-2 h-2 bg-red-500"></p>
        <p>标签集</p>
        </h1>
    </section>
<section className="flex flex-col space-y-4 h-[85%] md:space-y-0 md:flex-row font-serif px-2 ">
    {
        tags?<>
          <LeftSideBar tags={tags} active={active} setPosts={handlePosts}/>
        <Main tags={tags} index={active} />
        </>:<Loading/>
    }
  </section>
</div>
   
  )
}
index.getLayout = function getLayout(page: React.ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
  
export default index