import Link from 'next/link'
import React from 'react'
import { formatDate } from '../../../../lib/dateRelative'

const index = ({post}) => {
  return (
    <Link href={`/posts/${encodeURIComponent(post.id)}`}>
        <div className=' bg-radial p-4 flex flex-col justify-between space-y-3 h-full w-full hover:scale-105 duration-300 transition'>
        <section>
        <hgroup>
            <p className=' text-red-500 font-bold font-serif'><span>No.</span><span>{post.count}</span></p>
            <h1 className='text-2xl font-semibold hover:text-red-500 duration-300 transition'>{post.title}</h1>
        </hgroup>
        </section>
        <section>
            <p className=' text-base text-neutral-500' dangerouslySetInnerHTML={{ __html: post.excerpt[0] }}></p>
        </section>
        <section>
            <p className=' text-sm text-neutral-500'>{formatDate(JSON.parse(post.createAt))}</p>
        </section>
    </div>
    </Link>
  )
}

export default index