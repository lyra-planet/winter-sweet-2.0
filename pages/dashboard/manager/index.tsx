import React, { useState } from 'react'
import Layout from '../../../components/DashBoard/layout'
import usePosts from '../../../hooks/dashBoard/usePosts'
import Item from '../../../components/DashBoard/Manager/item'
import SetForm from '../../../components/DashBoard/Manager/setForm'
import Link from 'next/link'
import { Spin } from '../../../assets'
const index = () => {
  const posts = usePosts()
  const [active,setActive] = useState(-1)

  const Table = ({posts})=>{
    return (
      <section className='min-w-[55rem] '>

      <div className='p-1 border-b flex items-center bg-radial font-bold'>
      <p className='w-[10%] flex justify-center'>
      status
      </p>
      <p className='w-[10%]  flex justify-center'>count</p>
      <p className='w-[20%] flex justify-center'>title</p>
      <p className='w-[30%] flex justify-center'>tags</p>
      <p className='w-[30%] flex justify-center'>createdAt</p>
      </div>

  
  {
    posts?
    posts.map((post,index)=><Link href={`/dashboard/editor?id=${post.id}`} key={post.id} onClick={() => setActive(index)} >
      <Item post={post} active={active===index}/>
    </Link> ):<div className='w-full flex flex-row justify-center items-center'>
    <Spin className="w-10 h-10 animate-spin"/>Loading....
          
      </div>
  }
  </section>
    )
  }
  return (
    <section className='flex items-center flex-col py-8 px-5 md:px-10 space-y-10 h-full w-full justify-center'>
        <section className='h-[5%]'>
            <h1 className="flex items-center space-x-2 text-3xl font-bold font-serif">
            <p>Lyra.Planet</p>
            <p className="w-2 h-2 bg-red-500"></p>
            <p>文章管理</p>
            </h1>
        </section>
      <section className='h-[90%] relative w-full overflow-auto scrollbar-thumb-red-500 scrollbar-thin'>
      {posts?<Table posts={posts}/>:<div className='
      w-full flex justify-center items-center text-neutral-600 h-full bg-neutral-100
      relative overflow-hidden 
      before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-tran-gray-tran
      
      '>
      <Spin className="w-10 h-10 animate-spin"/>Loading....
        </div>}
      </section>
    </section>
    
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