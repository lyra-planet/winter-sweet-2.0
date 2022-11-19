import Link from 'next/link'
import React from 'react'

const index = ({author}) => {
  return (
    <Link href={"/dashboard"}
    className='w-full bg-neutral-100 flex flex-nowrap items-end  p-1 hover:bg-red-500 group hover:text-white transition duration-150 cursor-pointer whitespace-nowrap font-semibold'>
    <p className='hidden lg:inline'><span className='text-red-500 group-hover:text-white font-bold font-serif text-xl'>{author.name}</span>,</p><p> 从此处进入编辑页</p> 
    </Link>
  )
}

export default index