import React, { Suspense, useEffect, useState } from 'react'
import "@uiw/react-md-editor/markdown-editor.css";
import dynamic from 'next/dynamic';
import { Spin } from '../../../assets';

  
  const MDEditor = dynamic(
    () => import("@uiw/react-md-editor"),
    {suspense: true}
  );

  const index = ({post=false}:{post:any}) => {
    const [value, setValue] = useState('')
    const [status,setStatus] = useState(1)
    useEffect(()=>{
    const format = !post.title? `---

title: Test
    
tags: 123
    
---

<!-- mid -->

<!-- end -->
test
`: `---
    
title: ${post?.title}
      
    
tags: ${post?.tags?.join(' ')}
      
---
${post?.excerpt[0]}
<!-- mid -->
${post?.excerpt[1]}
<!-- end -->

test`
setValue(format)

if(typeof post.status === 'number'){
  console.log(post.status)
  setStatus(post.status)
}
    },[post])
  
    const uploadPost = async()=>{
      await fetch("/api/post/uploadPost",{
        method:"POST",
        body:JSON.stringify({before:post,after:value,status:status})
      })
    }
    return (
        <main className='h-full w-full'>
          <div className='h-full w-full  flex flex-col'>
            <Suspense fallback={
              <div className='h-full bg-neutral-100 flex items-center justify-center
              w-full border-b
              relative overflow-hidden 
              before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-tran-gray-tran
              '>
              <Spin className="w-10 h-10 animate-spin"/>Loading....
              </div>
            }>
            <MDEditor className='h-full max-w-none prose prose-neutral
            prose-hr:m-0 
            prose-headings:m-0
            prose-blockquote:m-0
            prose-p:m-0
            w-full border-b '
          value={value} 
          onChange={setValue} 
          />
            </Suspense>
           <div className='flex w-full justify-between'>
            <div className=' space-x-1'>
              <button 
              onClick={()=>setStatus(1)}
              className={`w-20 p-1 cursor-pointer ${status===1 ? " bg-green-500 text-white font-semibold":" bg-neutral-200 text-black hover:bg-neutral-300"}`}>
                Publish
              </button>
              <button 
              onClick={()=>setStatus(-1)}
              className={`p-1 w-20  border-r cursor-pointer ${status===-1 ? " bg-yellow-500 text-white font-semibold":" bg-neutral-200 text-black hover:bg-neutral-300"}`}>
                Draft
              </button>
              <button 
              onClick={()=>setStatus(0)}
              className={`p-1 w-20  border-r cursor-pointer ${status===0 ? " bg-blue-500 text-white font-semibold":" bg-neutral-200 text-black hover:bg-neutral-300"}`}>
               Delete
              </button>
            </div>
            <button 
            className=' bg-neutral-100 text-black hover:bg-red-500 transition duration-150  hover:text-white py-0.5 px-2'
            onClick={()=>uploadPost()}
            >
              上传
            </button>
           </div>
          </div>
        </main>
    )
}

export default index