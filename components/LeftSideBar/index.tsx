import Item from "./item"
import {
  ArchiveBoxIcon,
  CodeBracketIcon,
  SwatchIcon,
  BookmarkIcon,
  HeartIcon,
  StarIcon,
  ChatBubbleLeftEllipsisIcon,
  TruckIcon} from '@heroicons/react/24/outline'
const LeftSideBar = () => {
  return (
    <div className="flex flex-col space-y-8 border-r h-full max-w-[30rem]
    px-4 animate-sildelefttoright
    ">
    <section>
    <div>
        
    </div>     
    </section>
    <section>
    <p className=" 
    text-red-500 text-sm
    transition font-bold
    duration-300
    ">仓库</p>
    <ul>
      <Item link="/"><StarIcon className="h-5 mr-2"/>关于我 AboutMe</Item>  
      <Item link="/"><ArchiveBoxIcon className="h-5 mr-2"/>归档 Archive</Item>
      <Item link="/"><SwatchIcon className="h-5 mr-2"/>分类 Classification</Item>
      <Item link="/">< BookmarkIcon className="h-5 mr-2"/>标签 Tag</Item>
      <Item  link="/"><CodeBracketIcon className="h-5 mr-2"/>实验室 Lab</Item>
    </ul>
    </section>
    <section>
    <p className="
        text-red-500 text-sm
        transition font-bold
        duration-300
    ">互动</p>
    <ul>
      <Item link="/"><ChatBubbleLeftEllipsisIcon className="h-5 mr-2"/>留言板 Message</Item>
      <Item  link="/"><HeartIcon className="h-5 mr-2"/>我的好友 Friend</Item>
      <Item link="/">< TruckIcon className="h-5 mr-2"/>友链 Traveling</Item>
    </ul>
    </section>

    </div>
  )
}

export default LeftSideBar
