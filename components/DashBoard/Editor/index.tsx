import React, { Suspense, useEffect, useState } from 'react'
import "@uiw/react-md-editor/markdown-editor.css";
import dynamic from 'next/dynamic';
import { Spin } from '../../../assets';
import Modal from '../../Modal'
  
  const MDEditor = dynamic(
    () => import("@uiw/react-md-editor"),
    {suspense: true}
  );

  const index = ({post=false}:{post:any}) => {
    const [value, setValue] = useState('')
    const [status,setStatus] = useState(1)
    const [modal,setModal] = useState(0)
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
      const data = await fetch("/api/post/uploadPost",{
        method:"POST",
        body:JSON.stringify({before:post,after:value,status:status})
      }).then(res=>res.json())
      console.log(data)
      if(data.status==="succeed"){
        setModal(1)
        setTimeout(()=>{
          setModal(0)
        },3000)
      }
    }
    return (
        <main className='flex h-full  w-full'>
        <Modal active={modal} type={1}>上传成功</Modal>
          <div className='w-full h-full flex flex-col '>
            <Suspense fallback={
              <div className='h-full bg-neutral-100 flex items-center justify-center
              w-full border-b
              relative overflow-hidden 
              before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-tran-gray-tran
              '>
              <Spin className="w-10 h-10 animate-spin text-neutral-600"/>Loading....
              </div>
            }>
              <div className='h-[86vh]'>
              <MDEditor className=' h-full
            max-w-none prose prose-neutral
            prose-hr:m-0 
            prose-headings:m-0
            prose-blockquote:m-0
            prose-p:m-0
            w-full border-b '
          value={value} 
          onChange={setValue} 
          />
              </div>
            </Suspense>
           <div className='flex flex-grow flex-row w-full justify-between items-center'>
            <div className='h-full space-x-1'>
              <button 
              onClick={()=>setStatus(1)}
              className={`w-20 p-1 h-full cursor-pointer ${status===1 ? " bg-green-500 text-white font-semibold":" bg-neutral-200 text-black hover:bg-neutral-300"}`}>
                Publish
              </button>
              <button 
              onClick={()=>setStatus(-1)}
              className={`p-1 w-20 h-full  border-r cursor-pointer ${status===-1 ? " bg-yellow-500 text-white font-semibold":" bg-neutral-200 text-black hover:bg-neutral-300"}`}>
                Draft
              </button>
              <button 
              onClick={()=>setStatus(0)}
              className={`p-1 w-20 h-full  border-r cursor-pointer ${status===0 ? " bg-blue-500 text-white font-semibold":" bg-neutral-200 text-black hover:bg-neutral-300"}`}>
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