export const SkeletonCard = ({ isLoading }: { isLoading?: boolean }) => (
  <div
    className=' 
    flex space-x-2 px-4 py-3 bg-radial
    relative overflow-hidden 
    before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-tran-gray-tran'
  >
    <div className="flex-shrink-0">
      <div className=' w-[30px] h-[30px] bg-red-500 rounded-full'></div>
    </div>
    <div className="flex-grow">
      <div className="flex space-x-2">
        <div className='flex flex-col md:flex-row  justify-between w-full mb-2'>

        <p className='font-bold text-sm bg-neutral-400 text-neutral-400 rounded-md'>XXXXXX</p>
        <div>
        <time className=" text-neutral-400 bg-neutral-400 rounded-md font-serif text-xs">
        days ago
        </time>
        </div>
        </div>
      </div>
      <div className=" space-y-3">
      <div className="h-4 w-4/5 rounded-md  bg-neutral-200" />
        <div className="h-4 w-3/5 rounded-md bg-neutral-200" />
      </div>
    </div>
  </div>
);