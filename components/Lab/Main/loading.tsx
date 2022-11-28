import React from 'react'
import { SkeletonCard } from './skeletonCard'

const loading = () => {
  return (
    <section className="space-y-10">
    <section className="
    sticky top-0
    z-10
    text-2xl font-semibold flex items-center
    after:content-[''] after:border-b after:w-full after:absolute after:right-0 after:z-10
    w-full
    bg-white
    ">
        <div className="flex items-center relative z-20 pr-2 bg-white space-x-1">
        <p className=" text-red-500 bg-red-500 rounded-md">xxxx年xx月</p>
        <p className="w-1.5 h-1.5 bg-neutral-300"></p>
        <p className="text-neutral-200 bg-neutral-200 rounded-md font-normal text-xl"><span className="font-serif">X</span>篇博客</p>
        </div>

    </section>
    <section className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  pb-10">
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
    </section>
  </section>
  )
}

export default loading