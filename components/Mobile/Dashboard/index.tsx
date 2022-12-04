import { StarIcon, ArchiveBoxIcon, SwatchIcon, BookmarkIcon, CodeBracketIcon, ChatBubbleLeftEllipsisIcon, HeartIcon, TruckIcon } from "@heroicons/react/24/outline";
import { ArrowRight, Email, Fun, Github, Home, Netease, QQ, Telegram, Terminal } from "../../../assets";
import NavItem from "./navItem";
import AuthForm from '../../../components/Auth/Form'
import FooterItem from "./footerItem";
import { useState } from "react";
import config from "../../../config";
import { useStore } from "../../../store";
import Link from "next/link";
import FooterClickCopy from "./footerClickCopy"

const index = () => {
  const [active,setActive] = useState(false)
  const store = useStore()
  return (
    <div className="text-white px-10 pt-5 pb-20 space-y-14 h-full scrollbar scrollbar-none">
      <section className="flex">
        <section className={`${store.author.authorInfo.name?'hidden':''}`}>
        <button className="px-3 pt-1 pb-3 flex 
        items-center font-semibold bg-white text-red-500
        hover:scale-105 duration-150 transition
        " onClick={()=>setActive(active=>!active)}>
        登录<ArrowRight className="w-4"/>
        </button>
        </section>
        <section className={`${store.author.authorInfo.name?'':'hidden'}`}>
        <Link href={"/dashboard"}
    className='px-3 pt-1 pb-3 flex 
    items-center font-semibold bg-white text-red-500
    hover:scale-105 duration-150 transition'>
   控制台 
        </Link>
        </section>
        <section>
          <div className={`${active?"":"scale-0"} p-4 opacity-90 bg-neutral-800 right-0 absolute overflow-hidden transition-all duration-150`}>
          <AuthForm active={active}/>
          </div>
        </section>
      </section>
      <section>
      <NavItem link="/"><Home className="h-5 mr-2"/>主页 Home</NavItem>  
      <NavItem link="/about"><StarIcon className="h-5 mr-2"/>关于我 AboutMe</NavItem>  
      <NavItem link="/posts"><ArchiveBoxIcon className="h-5 mr-2"/>归档 Archive</NavItem>
      <NavItem link="/tags">< BookmarkIcon className="h-5 mr-2"/>标签 Tag</NavItem>
      <NavItem  link="/lab"><CodeBracketIcon className="h-5 mr-2"/>实验室 Lab</NavItem>
      <NavItem link="/comments"><ChatBubbleLeftEllipsisIcon className="h-5 mr-2"/>留言板 Message</NavItem>
      <NavItem  link="/friends"><HeartIcon className="h-5 mr-2"/>我的好友 Friend</NavItem>
      <NavItem link={config.links.friendLink}>< TruckIcon className="h-5 mr-2"/>友链 Traveling</NavItem>
      </section>

      <section className="flex justify-between">
        <section className="w-1/2">
            <h1 className="opacity-50 text-sm mb-1">•交流&探讨•</h1>
            <ul>
            <FooterItem link={config.links.littlePlanet}><Fun className="w-4 mr-1"/>小星球</FooterItem>
            <FooterItem link={config.links.jueJin}><Terminal className="w-4 mr-1"/> 掘金</FooterItem>
            <FooterItem link={config.links.netease}><Netease className="w-4 mr-1"/>网易云音乐</FooterItem>
            </ul>
        </section>
        <section className="w-1/2">
        <h1 className="opacity-50 text-sm mb-1">•联系&关注•</h1>
        <ul>
            <FooterClickCopy link={config.links.email}><Email className="w-4 mr-1"/>E-mail</FooterClickCopy>
            <FooterItem link={config.links.telegram}><Telegram className="w-4 mr-1"/>Telegram</FooterItem>
            <FooterItem link={config.links.qq}><QQ className="w-4 mr-1"/>QQ</FooterItem>
            <FooterItem link={config.links.github}><Github className="w-4 mr-1"/>GitHub</FooterItem>
        </ul>
        </section>
      </section>
    </div>
  );
};

export default index;
