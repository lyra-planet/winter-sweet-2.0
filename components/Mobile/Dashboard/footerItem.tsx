import Link from 'next/link'

const FooterItem = ({link,children}:{link:string,children:any}) => {
    return (
        <Link href={link}>
    <li className='inline-flex
    items-center border-b h-8
    text-xs mr-2
    font-normal text-white
    border-dotted
    hover:text-red-500 
    hover:bg-white 
    hover:border-b-red-500
    transition duration-300'>
    {children}
    </li>
    </Link>
  )
}

export default FooterItem