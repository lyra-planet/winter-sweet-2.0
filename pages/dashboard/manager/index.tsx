import React, { useState } from 'react'
import Layout from '../../../components/DashBoard/layout'
import usePosts from '../../../hooks/dashBoard/usePosts'
import Item from '../../../components/DashBoard/Manager/item'
import SetForm from '../../../components/DashBoard/Manager/setForm'
import Link from 'next/link'
const index = () => {
  const posts = usePosts()
  const [active,setActive] = useState(-1)
  return (
    <section className='py-8 px-10 space-y-10 h-full w-full justify-center'>
        <section className='h-[5%]'>
            <h1 className="flex items-center space-x-2 text-3xl font-bold font-serif">
            <p>Lyra.Planet</p>
            <p className="w-2 h-2 bg-red-500"></p>
            <p>文章管理</p>
            </h1>
        </section>
      <section className='h-[80%] w-full overflow-auto'>
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
        posts&&posts.map((post,index)=><Link href={`/dashboard/editor?id=${post.id}`} key={post.id} onClick={() => setActive(index)} >
          <Item post={post} active={active===index}/>
        </Link> )
      }
      </section>
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