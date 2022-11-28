import { ArrowRight, Play } from '../../../assets';
import Image from 'next/image'
export const SkeletonCard = ({ isLoading }: { isLoading?: boolean }) => (
  <article
    className=' 
    flex flex-col mb-10 space-y-1 p-1
    relative overflow-hidden 
    before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-tran-gray-tran'
  >
  <div 
  className='bg-neutral-200 w-full  aspect-square'
   />
    <section className="border-b w-full flex flex-col justify-between pb-2 space-y-2">
      <section className='flex flex-row justify-between'>
      <p className="
        text-base bg-neutral-400 text-neutral-400 rounded-md
       lg:text-lg 
       xl:text-xl
      font-bold hover:text-red-500  transition duration-300 ">XXXX</p>
      <div className="text-gray-400 items-center 
      text-sm  
      flex space-x-2 font-serif">
      <div className="font-serif text-neutral-300 bg-neutral-300 rounded-md">
                xx月xx日
      </div>
      </div>
      </section>
    <div className="
      text-sm
     xl:text-base
    text-neutral-500">
        
    </div>
    </section>

  </article>
);