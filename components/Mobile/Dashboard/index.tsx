import { StarIcon, ArchiveBoxIcon, SwatchIcon, BookmarkIcon, CodeBracketIcon, ChatBubbleLeftEllipsisIcon, HeartIcon, TruckIcon } from "@heroicons/react/24/outline";
import { ArrowRight, Email, Fun, Github, Netease, QQ, Telegram, Terminal } from "../../../assets";
import NavItem from "./navItem";
import AuthForm from '../../../components/Auth/Form'
import FooterItem from "./footerItem";
import { useState } from "react";
const index = () => {
  const [active,setActive] = useState(false)

  return (
    <div className="text-white px-10 pt-5 pb-20 space-y-14 h-full scrollbar scrollbar-none">
      <section className="flex">
        <button className="px-3 pt-1 pb-3 flex 
        items-center font-semibold bg-white text-red-500
        hover:scale-105 duration-150 transition
        " onClick={()=>setActive(active=>!active)}>
        登录<ArrowRight className="w-4"/>
        </button>
        <section>
          <div className={`${active?"":"scale-0"} p-4 opacity-90 bg-neutral-800 right-0 absolute overflow-hidden transition-all duration-150`}>
          <AuthForm active={active}/>
          </div>
        </section>
      </section>
      <section>
      <NavItem link="/"><StarIcon className="h-5 mr-2"/>关于我 AboutMe</NavItem>  
      <NavItem link="/"><ArchiveBoxIcon className="h-5 mr-2"/>归档 Archive</NavItem>
      <NavItem link="/"><SwatchIcon className="h-5 mr-2"/>分类 Classification</NavItem>
      <NavItem link="/">< BookmarkIcon className="h-5 mr-2"/>标签 Tag</NavItem>
      <NavItem  link="/"><CodeBracketIcon className="h-5 mr-2"/>实验室 Lab</NavItem>
      <NavItem link="/"><ChatBubbleLeftEllipsisIcon className="h-5 mr-2"/>留言板 Message</NavItem>
      <NavItem  link="/"><HeartIcon className="h-5 mr-2"/>我的好友 Friend</NavItem>
      <NavItem link="/">< TruckIcon className="h-5 mr-2"/>友链 Traveling</NavItem>
      </section>
      <section>
        <div className="w-full h-8 flex justify-between border-white border-[1px]">
        <input type="text" className="p-2 w-5/6 flex-grow border-none outline-none text-red-500" />
        <button className="bg-white text-red-500 whitespace-nowrap px-5">搜索</button>
        </div>
      </section>
      <section className="flex justify-between">
        <section className="w-1/2">
            <h1 className="opacity-50 text-sm mb-1">•交流&探讨•</h1>
            <ul>
            <FooterItem link={'/'}><Fun className="w-4 mr-1"/>小星球</FooterItem>
            <FooterItem link={'/'}><Terminal className="w-4 mr-1"/> 掘金</FooterItem>
            <FooterItem link={'/'}><Netease className="w-4 mr-1"/>网易云音乐</FooterItem>
            </ul>
        </section>
        <section className="w-1/2">
        <h1 className="opacity-50 text-sm mb-1">•联系&关注•</h1>
        <ul>
        <FooterItem link={'/'}><Email className="w-4 mr-1"/>E-mail</FooterItem>
            <FooterItem link={'/'}><Telegram className="w-4 mr-1"/>Telegram</FooterItem>
            <FooterItem link={'/'}><QQ className="w-4 mr-1"/>QQ</FooterItem>
            <FooterItem link={'/'}><Github className="w-4 mr-1"/>GitHub</FooterItem>
        </ul>
        </section>
      </section>
    </div>
  );
};

export default index;
