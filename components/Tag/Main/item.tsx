import Link from 'next/link'
import React from 'react'
import { formatDay } from '../../../lib/dateRelative'

const item = ({post}) => {
  return (
    <article className="flex flex-row space-x-2 hover:bg-neutral-100 cursor-pointer ">
    <section >
        <div className="font-serif font-bold 
        lg:text-sm
        xl:text-base
        bg-red-500 px-1   text-white">
        {post.count}
        </div>
    </section>
    <section className="border-b w-full border-dotted flex flex-row justify-between pb-2">
    <Link href={`/posts/${encodeURIComponent(post.id)}`}>
      <p className="
        text-base 
       lg:text-lg 
       xl:text-xl
    hover:text-red-500  transition duration-300 ">{post.title}</p>
    </Link>
    <div className="font-serif text-neutral-400">
    {formatDay(post.createdAt)}
    </div>
    </section>
  </article>
  )
}

export default item