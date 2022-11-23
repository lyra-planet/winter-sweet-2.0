import { ArrowRight, Play } from '../../assets';

export const SkeletonCard = ({ isLoading }: { isLoading?: boolean }) => (
  <div
    className=' 
    group/box
    space-y-4 border-b py-4
    px-5
    flex
    w-full
    flex-col justify-around
    text-sm
    first:text-base
    xl:grid-r
    xl:px-6
    xl:border-l
    xl:border-collapse
    xl:ml-[-1px]
    xl:text-sm
    first:space-y-10
    first:xl:col-span-2
    first:2xl:row-span-2
    first:2xl:col-span-1
    first:2xl:px-8
    relative overflow-hidden 
    before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-tran-gray-tran'
  >
      <div className="space-y-4 2xl:group-[:first-child]/box:space-y-10">
        <hgroup>
          <h3 className="flex items-center justify-between text-neutral-200 font-serif cursor-default mb-1">
            <p className=' bg-neutral-200 rounded-md'>
            <span className="text-sm">No.</span>
            <span className="text-sm ml-[0.1rem]">xxx</span>
            </p>
            <p className=" bg-neutral-200 rounded-md text-neutral-200 translate-x-[-1rem] opacity-0 group-hover/box:opacity-100 group-hover/box:translate-x-0 transition duration-150">
            <span className="text-sm">@</span>
            <span className="text-sm">xxx 提交</span>
            </p>
          </h3>
            <h1
              className="
            cursor-pointer text-3xl font-semibold 
            bg-neutral-400 inline text-neutral-400 rounded-md
            2xl:group-[:first-child]/box:text-4xl
            transition duration-300"
            >
            XXXXX
            </h1>
        </hgroup>
        <div className="w-full">
          <div
            className=" relative
          text-neutral-500
          2xl:group-[:first-child]/box:text-xl
          group-[:first-child]/box:text-neutral-600"
          >
            <div className="inline space-y-3">
              <div className="space-y-3"> 
              <div className="h-4 w-4/5 rounded-md  bg-neutral-200" />
              <div className="h-4 w-3/5 rounded-md bg-neutral-200" />
              <div className="h-4 w-4/5 rounded-md  bg-neutral-200" />
              </div>

          <div className="
          hidden group-[:first-child]/box:block
          h-4 w-full rounded-md bg-neutral-200" />
          <div className="
          hidden group-[:first-child]/box:block
          h-4 w-full rounded-md  bg-neutral-200" />
        <div className="
        hidden group-[:first-child]/box:block
        h-4 w-1/2 rounded-md bg-neutral-200" />
        <div className="
        hidden group-[:first-child]/box:block
        h-4 w-3/4 rounded-md bg-neutral-200" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col flex-nowrap justify-between space-y-3
        "
      >
        <ul className="flex items-center space-x-1 text-sm text-gray-400 font-serif">
          <li className="rounded-md bg-neutral-300 text-neutral-300 h-4">xxxx年xx月xx日</li>
          <li className=" bg-red-500 w-1 h-1" />
          <li className="w-16 rounded-md bg-neutral-300 h-4"></li>
          <li className=" bg-red-500 w-1 h-1" />
          <li className="w-16 rounded-md bg-neutral-300 h-4"></li>
        </ul>

        <a>
          <div
            className="
        group-[:not(:first-child)]/box:flex
        hidden
       text-black  justify-left w-[6.5rem] items-center cursor-pointer
        transition duration-300 group/readmore"
          >
            <p className="mr-1 bg-red-500 rounded-md w-5 h-5 flex justify-center items-center">
              <Play className="w-4 text-red-500" />
            </p>
          </div>

          <div
            className="
        inline-flex  group-[:not(:first-child)]/box:hidden
        bg-red-500 text-white px-2 py-1  justify-center items-center cursor-pointer
        md:text-sm  rounded-md
        hover:scale-105 transition duration-300 group/readmore"
          >
            <p className="mr-1">
              <Play className="w-5 text-red-500" />
            </p>

            <p
              className=" whitespace-nowrap text-red-500
        "
            >
              Read More
            </p>
          </div>
        </a>
      </div>

  </div>
);