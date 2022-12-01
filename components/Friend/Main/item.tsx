import Link from 'next/link'
import Image from 'next/image'

const item = ({friend}) => {
  const isUrl = (str) => {
    let v = new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i');
          return v.test(str);
    }
  return (
    <Link href={friend.link} className="w-full p-1 space-y-1">
    <article key={friend.id} className="flex flex-row justify-center mb-10 shadow-md hover:shadow-xl duration-150 transition">
       {isUrl(friend.picture)&&<Image 
        className='w-1/3'
        src={friend.picture} 
        width={700}
        height={700}
        alt="Picture of the Guadget"/>}
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