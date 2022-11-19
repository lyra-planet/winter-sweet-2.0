'use client'
import React, { useEffect, useState } from 'react'
import "@uiw/react-md-editor/markdown-editor.css";
import dynamic from 'next/dynamic';

  
  const MDEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
  );


const index = () => {
    const [value, setValue] = useState(`---

title: "Test"

excerpt: ["123","123"]

author: "Lyra"

tags: ["123"]

---
test
    `);
    const uploadPost = async()=>{
      await fetch("/api/post/uploadPost",{
        method:"POST",
        body:value
      })
    }
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