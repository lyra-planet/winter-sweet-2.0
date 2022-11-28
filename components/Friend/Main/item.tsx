import Link from 'next/link'
import Image from 'next/image'

const item = ({friend}) => {
  return (
    <Link href={friend.link} className="w-full p-1 space-y-1">
    <article key={friend.id} className="flex flex-row justify-center mb-10 shadow-md hover:shadow-xl duration-150 transition">
        <Image 
        className='w-1/3'
        src={friend.picture} 
        width={700}
        height={700}
        alt="Picture of the Guadget"/>
       <section className="w-2/3 flex-row flex">
        <section className="w-[80%]  flex flex-col justify-between p-2 space-y-2">
      <p className="
        text-base 
       lg:text-lg 
       xl:text-xl
      font-bold hover:text-red-500  transition duration-300 ">{friend.name}</p>
        <div className="
      text-sm
     xl:text-base
    text-neutral-500">
        {friend.description}
        </div>
        </section>
        <section className=' bg-radial w-[20%]'/>
       </section>
  </article>
  </Link>
  )
}

export default item