import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline"
const Item = () => {
  return (
    <section className=" border-b pb-3 pt-0 group/item ">
        <p className="text-xs  text-white text-right translate-x-[-1rem] 
        group-hover/item:translate-x-0 
        group-hover/item:text-neutral-500 transition duration-300">@Lyra 提交</p>
        <h1 className="
        font-semibold text-sm cursor-pointer 
        hover:text-red-500 transition duration-300">比 Time Machine 还 Time Machine 的搜索工具 Rewind</h1>
        <p className="
        text-neutral-500 font-normal text-sm hidden
        group-[:first-child]/item:inline-block
        ">
            虽然官网上的描述是「搜索工具」，但上搭配时间轴已经强大到像一个「时间回朔」工具了，官方演示里可以图形化地展示过去一段时间内的电脑操作，从各种软件中截取文字甚至是视频会议里的语音转写，实际完成度即使只有五六成应该也是个 killer app 了~
        </p> 
         <div className="flex items-center justify-start">
            <p className="text-red-500 text-xs  font-bold mr-2">12小时前</p>
            <div className="text-neutral-500 text-xs flex space-x-[0.1rem] 
            hover:bg-red-500 hover:text-white transition duration-300">
                <p>1</p>
                <div><ChatBubbleLeftIcon className="w-4"/></div>
                <p className="text-white">发表评论</p>
            </div>
        </div>
    </section>
  )
}

export default Item