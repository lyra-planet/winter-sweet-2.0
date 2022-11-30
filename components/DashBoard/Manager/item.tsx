import React from 'react'

const item = ({post,active}) => {
  console.log(post)
  return (
    <div className={`cursor-pointer border-b p-1 flex items-center ${post.selected?" bg-red-500 border text-white  font-semibold rounded-sm ":"hover:bg-neutral-100"}  transition duration-150`}>
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
      <div className='w-[30%] flex justify-center space-x-2'>{post.tags.map(tag=><p>
        <span className='text-red-500'> #</span><span>{tag}</span>
      </p>)}</div>
      <p className='w-[30%] flex justify-center'>{post.createdAt}</p>
      </div>
  )
}

export default item