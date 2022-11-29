import Link from 'next/link'
import React from 'react'

const NavItem = ({link,children}:{link:string,children:any}) => {
    return (
    <Link href={link}>
    <li className='w-full 
    flex items-center border-b h-10
    text-sm
    font-normal
    hover:bg-white hover:text-red-500 transition duration-300'>
    {children}
    </li>
    </Link>
  )
}

export default NavItem