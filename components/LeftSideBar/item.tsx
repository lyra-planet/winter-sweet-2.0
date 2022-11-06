import Link from 'next/link'
import React from 'react'

const Item = ({link,children}:{link:string,children:any}) => {
    return (
    <Link href={link}>
    <li className='w-full
    flex flex-nowrap
    items-center border-b h-12
    text-sm
    lg:text-base
    xl:text-lg
    font-normal
    hover:text-red-500 transition duration-300'>
    {children}
    </li>
    </Link>
  )
}

export default Item