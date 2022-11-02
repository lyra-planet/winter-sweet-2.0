import { HeartIcon,ArrowSmallRightIcon } from "@heroicons/react/24/solid"
import Link from 'next/link';
import { ArrowRight } from "../../assets";
const Item = () => {
  return (
    <section className='
    group/box
    space-y-4 border-b py-4
    px-5
    flex
    flex-col justify-around
    text-sm
    first:text-base
    xl:px-6 
    xl:border-r 
    xl:text-sm
    first:space-y-10
    first:xl:col-span-2
    first:2xl:row-span-2
    first:2xl:col-span-1
    first:2xl:px-8'>
        <div className="space-y-4 2xl:group-[:first-child]/box:space-y-10">
        <hgroup>
            <h3 className='flex items-center text-neutral-400 font-serif cursor-default'><p className="text-sm">No</p><p className="text-lg ml-[0.1rem]">159</p></h3>
            <h1 className='
            cursor-pointer text-3xl font-semibold hover:text-red-500 
            
            2xl:group-[:first-child]/box:text-4xl
            transition duration-300'>拉着三位「毕业生」，我们组了一个「寒气录音室」</h1>
        </hgroup>
        <div>
            <div className=" text-neutral-500 2xl:group-[:first-child]/box:text-xl group-[:first-child]/box:text-neutral-600">
            <span className="">
            在很多中国城市，2022 年的这个深秋，都有着让人体感舒适的天气，但在心理上却很难说是个惬意的季节，经济的不景气、工作和生活的压力让人有点儿喘不过气。
                本来尝试想在三个股东群里征集「今年被裁员过」的朋友来做一个特辑，不曾想第一个群里刚发完就征集满了，但我们今天显然不想「制造焦虑」，只想通过这次随性而愉快的群聊给这个深秋和即将到来的冬天给大家带来一些慰籍~  
            </span>
            <div className="
            inline-block
            w-22 flex-row
            relative z-10  bg-radial cursor-pointer group font-serif text-sm p-1
            hover:text-white
            group/comment
            before:content-[''] 
            before:absolute 
            before:w-0 
            before:h-full 
            before:left-0 
            before:top-0 
            before:z-0 
          before:bg-red-500 
            hover:before:w-full 
            before:transition-all 
            before:duration-300
            ">
            <p className="relative z-10 font-semibold"> 35 条评论
            <ArrowRight className="inline w-0 relative z-10 text-black group-hover/comment:text-white group-hover:w-4  transition-all duration-300"/>
            </p>
        </div> 

            </div>
        </div>

        </div>

        <div className="flex flex-row flex-nowrap justify-between
        group-[:not(:first-child)]/box:grid group-[:not(:first-child)]/box:space-y-3
        ">
        <ul className='flex items-center space-x-1 text-sm text-gray-400 font-serif'>
            <li>9月28日</li>
            <li className=' bg-red-500 w-1 h-1'/>
            <li>1小时25分钟</li>
            <li className=' bg-red-500 w-1 h-1'/>
            <li className="flex flex-row">
                #
                <p className="hover:text-red-500 transition duration-300 cursor-pointer">
                    <Link href={"/"}>
                    FIGMA
                    </Link>            
                    </p>
                </li>
        </ul>
        <div>
            
        </div>


        <div className="
        group-[:not(:first-child)]/box:flex
        hidden
        hover:bg-red-500
        hover:text-white text-black  justify-left w-[6.5rem] items-center cursor-pointer 
        transition duration-300 group/readmore">
        <p className="mr-1 bg-red-500 w-5 h-5 flex justify-center items-center">
        <HeartIcon className="w-4 text-white"/>
        </p>
        <p className=" whitespace-nowrap 
        ">Read More</p> 
         </div>

        
        <div className=" 
        flex group-[:not(:first-child)]/box:hidden
        bg-red-500 text-white h-8 w-[8rem]  justify-center items-center cursor-pointer 
        hover:scale-105 transition duration-300 group/readmore">
        <p className="mr-1">
        <HeartIcon className="w-4 group-hover/readmore:animate-bounce"/>
        </p>
        <p className=" whitespace-nowrap 
        ">Read More</p> 
         </div>
        </div>



    </section>
  )
}

export default Item