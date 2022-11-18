
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
    import AuthLogin from '../Auth/Login'
  import config from "../../config"
  const LeftSideBar = () => {
    return (
      <div className="flex flex-col space-y-8 h-full w-full
      animate-sildelefttoright bg-white justify-between
      ">
      <section className="flex flex-col space-y-8 w-full
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
      lg:text-base
      xl:text-lg
      ">仓库</p>
      <ul>
        <Item link="/"><StarIcon className="h-5 mr-2"/>关于我 <p className="hidden ml-2 lg:inline-block">AboutMe</p></Item>
        <Item link="/"><ArchiveBoxIcon className="h-5 mr-2"/>归档 <p className="hidden ml-2 lg:inline-block">Archive</p></Item>
        <Item link="/"><SwatchIcon className="h-5 mr-2"/>分类<p className="hidden ml-2 lg:inline-block">Classification</p></Item>
        <Item link="/">< BookmarkIcon className="h-5 mr-2"/>标签<p className="hidden ml-2 lg:inline-block">Tag</p></Item>
        <Item  link="/"><CodeBracketIcon className="h-5 mr-2"/>实验室 <p className="hidden ml-2 lg:inline-block">Lab</p></Item>
      </ul>
      </section>
      <section>
      <p className="
          text-red-500 text-sm
          transition font-bold
          duration-300
          lg:text-base
          xl:text-lg
      ">互动</p>
      <ul>
        <Item link="/"><ChatBubbleLeftEllipsisIcon className="h-5 mr-2"/>留言板<p className="hidden ml-2 lg:inline-block">Message</p></Item>
        <Item  link="/"><HeartIcon className="h-5 mr-2"/>我的好友 <p className="hidden ml-2 lg:inline-block">Friend</p></Item>
        <Item link={config.links.friendLink}>< TruckIcon className="h-5 mr-2"/>友链 <p className="hidden ml-2 lg:inline-block">Traveling</p></Item>
      </ul>
      </section>
      </section>
      <section>
        <AuthLogin/>
      </section>
      </div> 
    )
  }
  
  export default LeftSideBar
  
  