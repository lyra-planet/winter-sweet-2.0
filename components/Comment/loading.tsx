import React from 'react'
import comments from '../../pages/comments'
import CommentForm from './form'
import CommentList from './list'
import { SkeletonCard } from './skeletonCard'

const loading = () => {
  return (
    <div className="
    w-full 
    max-h-[95vh]
    flex flex-col
    xl:sticky space-y-4 xl:top-0 pt-10 lx:pt-20">
    <div className="
    text-2xl font-bold flex items-center space-x-4
    "><p className="">评论</p><p className="border-b flex-grow"/></div>
          <div className="flex justify-start text-sm">
        <div className="bg-black p-1 text-white font-serif border-b-2 border-red-500">
         共有X条评论
        </div>
      </div>
    <div>
    <form className='w-full'>
      <textarea
        className="flex w-full  p-3  resize-y text-neutral-500 outline-none border-[1px] placeholder-neutral-300"
        rows={2}
        disabled={true}
      />

      <div className="flex items-center mt-4">
          <button
            type="button"
            className="py-2 px-4  bg-red-500 text-red-500 rounded-md"
          >
           登录
          </button>
      </div>
    </form>
    </div>
    <div className="space-y-4 
    flex-grow
    overflow-y-auto scrollbar-none border-b border-t">
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
    </div>
    </div>
  )
}

export default loading