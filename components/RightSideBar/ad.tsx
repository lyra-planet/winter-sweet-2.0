import Link from "next/link"
import { formatMonth } from "../../lib/dateRelative"

const Ad = ({item}) => {
    console.log(item)
    return (
        <Link href={item?.link}>
                <section className="hover:scale-105 border-b last:border-b-0 pb-3 pt-4 group/item transition duration-300">
            <h1 className="
            font-semibold text-base cursor-pointer 
            transition duration-300">{item?.name}</h1>
            <p className="
            text-neutral-500 font-normal text-sm hidden
            group-[:first-child]/item:inline-block
            "
            dangerouslySetInnerHTML={{ __html: item?.description }}
            ></p>
            <div className="flex items-center justify-start">
                <p className="text-red-500 text-xs  font-bold mr-2">{formatMonth(item.createdAt)}</p>
            </div>
        </section>
        </Link>

      )
}

export default Ad