import React from 'react'
import { SkeletonCard,LeftBarSkeletonCard } from './skeletonCard'
const loading = () => {
  return (
    <>
      <section className="h-full border-r  w-1/5 space-y-2">
    <div className="w-full flex-row flex items-center pr-2">
      <hgroup className="flex items-center flex-row relative pr-2 bg-white space-x-1 text-lg">
              <p className=" text-red-500 bg-red-500 rounded-md">集册</p>
              <p className="w-1 h-1 bg-neutral-300"></p>
              <p className="text-neutral-400 bg-neutral-400 rounded-md font-normal text-sm"><span className="font-serif">X</span>个标签</p>
      </hgroup>
      <p className="flex-grow bg-neutral-100  h-[1px]"/>
      </div>
      <section className="h-full">
        <ul className="space-y-2  overflow-y-auto">
        <LeftBarSkeletonCard/>
       <LeftBarSkeletonCard/>
        <LeftBarSkeletonCard/>

        </ul>
      </section>
    </section>
    <section className="px-4 w-4/5 space-y-2 h-full">
    <div className="w-full flex-row flex items-center">
    <hgroup className="flex items-center relative z-20 pr-2 bg-white space-x-1 text-2xl">
            <p className=" text-red-500 bg-red-500 rounded-md">xxxx</p>
            <p className="w-1.5 h-1.5 bg-neutral-300"></p>
            <p className="text-neutral-200 bg-neutral-200 rounded-md font-normal text-xl"><span className="font-serif">X</span>篇博客</p>
    </hgroup>
    <p className="flex-grow bg-neutral-100  h-[2px]"/>
    </div>
    <section className="h-full">
      <ul className="space-y-4 overflow-y-auto scrollbar-none h-full">
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      </ul>
    </section>
  </section>

    </>
  )
}

export default loading