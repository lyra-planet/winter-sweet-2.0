import { ArrowRight, Play } from '../../../assets';

export const SkeletonCard = () => (
  <article
    className=' 
    flex flex-row space-x-2 
    relative overflow-hidden 
    before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-tran-gray-tran'
  >
    <section >
        <div className="font-serif font-bold 
        lg:text-sm
        xl:text-base
        bg-red-500 px-1   text-red-500 rounded-sm">
        X
        </div>
    </section>
    <section className="border-b w-full border-dotted flex flex-row justify-between pb-2">
    <p className="
        text-base 
       lg:text-lg 
       xl:text-xl
     text-neutral-300 bg-neutral-300 rounded-md
    transition duration-300 ">XXXXXX</p>
    <div className="font-serif text-neutral-200 rounded-md bg-neutral-200">
    xx月xx日
    </div>
    </section>
  </article>
);
export const LeftBarSkeletonCard = () => (
  <li
    className=' 
    flex flex-row space-x-1
    relative overflow-hidden 
    before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-tran-gray-tran'
  >            
    <p className="text-red-500">#</p>
    <p className=" text-neutral-200 bg-neutral-200 rounded-md">xxxxxx</p>
  </li>
);