import Link from 'next/link'

const Item = ({link,children}:{link:string,children:any}) => {
    return (
        <Link href={link}>
    <li className='w-full 
    flex items-center border-b h-8
    text-xs
    font-normal text-neutral-500
    hover:text-red-500 hover:border-b-red-500 transition duration-300'>

    {children}
   
    </li>
    </Link>
  )
}

export default Item