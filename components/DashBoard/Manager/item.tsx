import React from 'react'

const item = ({post,active}) => {
  return (
    <div className={`cursor-pointer border-b p-1 flex items-center ${active?" bg-red-500 rounded-sm text-white":"hover:bg-neutral-100"}  transition duration-150`}>
      <div className='w-[10%] flex justify-center'>
      <p className={` inline-block p-1 rounded-md text-white font-semibold ${
        post.status===1 ? "bg-green-500": post.status===0  ? "bg-blue-500" : post.status === -1 ? " bg-yellow-500" : "bg-red-500"
      }`}>
        {
      post.status===1 ? "Published": post.status===0  ? "Deleted" : post.status === -1 ? "Draft" : "ERROR"}
        </p>  
      </div>
      <p className='w-[10%]  flex justify-center'>{post.count}</p>
      <p className='w-[20%] flex justify-center'>{post.title}</p>
      <p className='w-[30%] flex justify-center'>{post.tags}</p>
      <p className='w-[30%] flex justify-center'>{post.createdAt}</p>
      </div>
  )
}

export default item