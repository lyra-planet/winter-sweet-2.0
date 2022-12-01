import { Archive, Edit, Home, Setting,Upload } from "../../../assets"
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
    <div className="
    text-red-500 text-sm
    transition font-bold
    duration-300
    lg:text-base
    xl:text-lg
     cursor-pointer
    ">控制台</div>
    <ul>
      <Item link="/dashboard"><Archive className="h-5 mr-2"/>文章管理<p className="hidden ml-2 lg:inline-block">Manager</p></Item>
      <Item link="/dashboard/editor"><Edit className="h-5 mr-2"/>文章编辑<p className="hidden ml-2 lg:inline-block">Editor</p></Item>
      <Item link="/dashboard/upload">< Upload className="h-5 mr-2"/>文章上传<p className="hidden ml-2 lg:inline-block">Upload</p></Item>
      <Item link="/dashboard/other"><Setting className="h-5 mr-2"/>其他<p className="hidden ml-2 lg:inline-block">Other</p></Item>
      <Item link="/"><Home className="h-5 mr-2"/>主页<p className="hidden ml-2 lg:inline-block">Home</p></Item>
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