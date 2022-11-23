import { ArrowRight, Play } from '../../../assets';

export const SkeletonCard = ({ isLoading }: { isLoading?: boolean }) => (
  <article
    className=' 
    flex flex-row space-x-2 mb-10
    relative overflow-hidden 
    before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-tran-gray-tran'
  >
                <section >
                    <div className="font-serif font-bold 
                    lg:text-lg 
                    xl:text-xl
                    bg-red-500 px-1  text-red-500 rounded-md">
                    X
                    </div>
                </section>
                <section className="border-b w-full border-dotted flex flex-col justify-between pb-2 space-y-2">
                  <p className="
                w-24
                text-base
              text-neutral-400 bg-neutral-400 
                rounded-md
                lg:text-lg
                xl:text-xl
                font-bold">XXXXXX</p>
                <div className="
                  text-sm
                 xl:text-base
                text-neutral-500">

              <div className="inline space-y-2">
              <div className="h-4 w-4/5 rounded-md  bg-neutral-200" />
              <div className="h-4 w-3/5 rounded-md bg-neutral-200" />
              <div className="h-4 w-5/5 rounded-md  bg-neutral-200" />
              <div className="h-4 w-4/5 rounded-md  bg-neutral-200" />
              </div>                  
                </div>



                <div className="text-gray-400 items-center 
                text-sm  
                flex space-x-2">
                <div className="flex flex-row ">
                 <ul className="flex flex-row space-x-2">

              <li className=' bg-neutral-300 text-neutral-300 rounded-md'>
                #
              <span className="transition duration-300 cursor-pointer hover:bg-red-500 hover:text-white px-0.5">
              xxxx
              </span>
              </li>

                </ul>

                </div>
                <div className="w-1 h-1 bg-neutral-300"></div>
                <div className="font-serif text-neutral-300 bg-neutral-300 rounded-md">
                xx月xx日
                </div>
                </div>
                </section>
  </article>
);