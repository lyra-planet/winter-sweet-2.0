const SkeletonItem = () => {
  return (
    <div
    className="border-b pb-3 pt-0 group/item
    relative overflow-hidden  space-y-1
    before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-tran-gray-tran">
        <p className="text-xs text-white text-right translate-x-[-1rem]"></p>
        <h1 className="
        font-semibold text-sm w-20 bg-neutral-300 text-neutral-300 rounded-md">XXXXXX</h1>
        <div className="space-y-1
        text-neutral-500 font-normal text-sm hidden
        group-[:first-child]/item:inline-block w-full
        ">
            <div className="h-5 w-4/5 rounded-md  bg-neutral-200" />
            <div className="h-5 w-3/5 rounded-md bg-neutral-200" />
              <div className="h-5 w-4/5 rounded-md  bg-neutral-200" />
        </div> 
        <p className="text-red-500 inline-block bg-red-500 rounded-md text-xs  font-bold mr-2">xxxx年xx月</p>
    </div>

  )
}

export default SkeletonItem