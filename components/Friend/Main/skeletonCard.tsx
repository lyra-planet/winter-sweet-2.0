import { ArrowRight, Play } from '../../../assets';
import Image from 'next/image'
export const SkeletonCard = ({ isLoading }: { isLoading?: boolean }) => (
  <div className='p-1'>
  <article
    className=' 
    flex flex-row justify-center mb-10 shadow-md
    relative overflow-hidden 
    before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-tran-gray-tran'
  >
  <div 
  className='bg-neutral-300 w-1/3  aspect-square'
   />
       <section className="w-2/3 flex-row flex">
        <section className="w-[80%] flex flex-col justify-between p-2 space-y-2">
        <p className="
        text-base bg-neutral-300 text-neutral-300 rounded-sm w-1/3
       lg:text-lg 
       xl:text-xl
      font-bold hover:text-red-500  transition duration-300 ">XXXX</p>
        <div className="
      text-sm  bg-neutral-200 text-neutral-200
     xl:text-base">
      xxxxxxxxxx
        </div>
        </section>
        <section className=' bg-radial w-[20%]'/>
       </section>
  </article>
  </div>

);