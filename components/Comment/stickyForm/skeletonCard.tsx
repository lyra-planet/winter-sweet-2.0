import clsx from 'clsx';

export const SkeletonCard = ({ isLoading }: { isLoading?: boolean }) => (
  <div
    className=' 
    flex-col    
    w-full
    md:odd:border-r
    first:border-t
    md:first:border-t-0
    border-b
    px-4 py-3
    space-y-3
    relative overflow-hidden 
    before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-tran-gray-tran'
  >
        <div className="flex items-center space-x-2 w-full ">
        <div className='w-[30px] h-[30px] rounded-full bg-radial border'/>
            <p className='font-bold text-xs border-b-[2px] border-red-500 '>
           xxxxxx</p>
        </div>
        <div className="h-full space-y-3">
        <div className="h-4 w-4/5 rounded-md  bg-neutral-200" />
        <div className="h-4 w-3/5 rounded-md bg-neutral-200" />
        <div className="h-4 w-4/5 rounded-md  bg-neutral-200" />
        <div className="h-4 w-full rounded-md bg-neutral-200" />
        <div className="h-4 w-full rounded-md  bg-neutral-200" />
        <div className="h-4 w-1/2 rounded-md bg-neutral-200" />
        <div className="h-4 w-3/4 rounded-md bg-neutral-200" />
        </div>
  </div>
);