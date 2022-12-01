import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { formatDay } from '../../../lib/dateRelative'

const item = ({post}) => {
  const isUrl = (str) => {
    let v = new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i');
          return v.test(str);
    }
  return (
    <Link href={post.link} className="w-full p-1 space-y-1">
    <article key={post.id} className="flex flex-col justify-center mb-10">
        {isUrl(post.picture)&&<Image 
        className=' shadow-lg'
        src={post.picture} 
        width={700}
        height={700}
        alt="Picture of the Guadget"/>}
        <section className="border-b w-full flex flex-col justify-between pb-2 space-y-2">
      <section className='flex flex-row justify-between'>
      <p className="
        text-base 
       lg:text-lg 
       xl:text-xl
      font-bold hover:text-red-500  transition duration-300 ">{post.name}</p>
      <div className="text-gray-400 items-center 
      text-sm  
      flex space-x-2 font-serif">
      {formatDay(post.createdAt)}
      </div>
      </section>
    <div className="
      text-sm
     xl:text-base
    text-neutral-500">
        {post.description}
    </div>
    </section>
    </article>
  </Link>
  )
}

export default item