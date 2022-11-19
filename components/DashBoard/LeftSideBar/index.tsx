import { StarIcon, ArchiveBoxIcon, SwatchIcon, BookmarkIcon, CodeBracketIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import config from "../../../config"
import AuthLogout from "../../Auth/Logout"
import Item from "./item"
const LeftSideBar = () => {
  return (
    <div className="flex flex-col space-y-8 h-full w-full
    animate-sildelefttoright bg-white justify-between
    ">
    <section className="flex flex-col space-y-8 w-full
    px-4 animate-sildelefttoright
    ">
    <section></section>
    <section>
    <Link href={'/dashboard'} className="
    text-red-500 text-sm
    transition font-bold
    duration-300
    lg:text-base
    xl:text-lg
     cursor-pointer
    ">控制台</Link>
    <ul>
      <Item link="/dashboard/about"><StarIcon className="h-5 mr-2"/>个人简介<p className="hidden ml-2 lg:inline-block">AboutMe</p></Item>
      <Item link="/dashboard/editor"><ArchiveBoxIcon className="h-5 mr-2"/>文章编辑<p className="hidden ml-2 lg:inline-block">Archive</p></Item>
      <Item link="/dashboard/manager"><SwatchIcon className="h-5 mr-2"/>文章管理<p className="hidden ml-2 lg:inline-block">Classification</p></Item>
      <Item link="/dashboard/upload">< BookmarkIcon className="h-5 mr-2"/>文章上传<p className="hidden ml-2 lg:inline-block">Tag</p></Item>
      <Item link="/"><CodeBracketIcon className="h-5 mr-2"/><p className="hidden ml-2 lg:inline-block">其他</p></Item>
      <Item link="/"><CodeBracketIcon className="h-5 mr-2"/><p className="hidden ml-2 lg:inline-block">主页</p></Item>
    </ul>
    </section>
    </section>

    <section>
        <AuthLogout/>
    </section>
    </div> 
  )
}

export default LeftSideBar