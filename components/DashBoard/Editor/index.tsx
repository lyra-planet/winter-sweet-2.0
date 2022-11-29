'use client'
import React, { useEffect, useState } from 'react'
import "@uiw/react-md-editor/markdown-editor.css";
import dynamic from 'next/dynamic';

  
  const MDEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
  );


const index = ({post=false}:{post:any}) => {
    const [value, setValue] = useState(`---

title: "Test"

excerpt: ["123123","123"]

tags: ["123"]

---
test
    `)


  useEffect(()=>{
    const format = !post.title? `---

title: "Test"
    
excerpt: ["123123","123"]
    
tags: ["123"]
    
---
test
`: `---
    
title: "${post?.title}"
      
excerpt: ["${post?.excerpt?.join(`","`)}"]
    
tags: ["${post?.tags?.join(`","`)}"]
      
---
test`
setValue(format)
},[post])
  
    const uploadPost = async()=>{
      await fetch("/api/post/uploadPost",{
        method:"POST",
        body:JSON.stringify({before:post,after:value})
      })
    }
    console.log(post)
    return (
        <main className='h-full w-full'>
          <div className='h-full w-full  flex flex-col'>
            <MDEditor className='h-full max-w-none prose prose-neutral
            prose-hr:m-0 
            prose-headings:m-0
            prose-blockquote:m-0
            prose-p:m-0
            w-full border-b '
          value={value} 
          onChange={setValue} 

          />
           <div className='flex w-full justify-end'>
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