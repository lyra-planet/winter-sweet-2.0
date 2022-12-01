import Link from "next/link"
import { formatMonth } from "../../lib/dateRelative"

const SkeletonAd = () => {
    return (
                <section className=" border-b last:border-b-0 pb-3 pt-4 group/item
                relative overflow-hidden  space-y-1
                before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-tran-gray-tran              
                ">
            <h1 className="
            font-semibold text-base cursor-pointer inline-block rounded-md
             bg-neutral-300 text-neutral-300
            ">XXXXXX</h1>
            <div className=" space-y-1 w-full
            text-neutral-500 font-normal text-sm
            ">
            <div className="h-5 w-4/5 rounded-md  bg-neutral-200" />
            <div className="h-5 w-4/5  rounded-md bg-neutral-200" />
            <div className="h-5 w-4/5  rounded-md bg-neutral-200" />
              <div className="h-5 w-3/5 rounded-md  bg-neutral-200" />
    
            </div>
                <p className="text-red-500 inline-block rounded-md bg-red-500 text-xs  font-bold mr-2">xxxx年xx月</p>
        </section>
      )
}

export default SkeletonAd