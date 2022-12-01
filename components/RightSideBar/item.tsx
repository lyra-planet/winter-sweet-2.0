import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { formatMonth } from "../../lib/dateRelative"
const Item = ({item}) => {
  return (
    <Link  
    className=" border-b pb-3 pt-0 group/item "
    href={`/posts/${encodeURIComponent(item.id)}`}>

        <p className="text-xs  text-white text-right translate-x-[-1rem] 
        group-hover/item:translate-x-0 
        group-hover/item:text-neutral-500 transition duration-300">@{item?.authorName?.name} 提交</p>
        <h1 className="
        font-semibold text-sm cursor-pointer 
        hover:text-red-500 transition duration-300">{item.title}</h1>
        <p className="
        text-neutral-500 font-normal text-sm hidden
        group-[:first-child]/item:inline-block
        " dangerouslySetInnerHTML={{ __html: item.excerpt?.[1] }}>
        </p> 
         <div className="flex items-center justify-start">
            <p className="text-red-500 text-xs  font-bold mr-2">{formatMonth(item.createdAt)}</p>
        </div>
    </Link>

  )
}

export default Item