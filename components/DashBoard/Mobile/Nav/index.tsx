import { StarIcon, ArchiveBoxIcon, SwatchIcon, BookmarkIcon, CodeBracketIcon, ChatBubbleLeftEllipsisIcon, HeartIcon, TruckIcon } from "@heroicons/react/24/outline";
import { ArrowRight, Email, Fun, Github, Netease, QQ, Telegram, Terminal } from "../../../../assets";
import NavItem from "./navItem";
import FooterItem from "./footerItem";
import config from "../../../../config";
import useLogout from "../../../../hooks/useLogout";
import { useStore } from "../../../../store";
const index = () => {
  const store = useStore();
  const logout = useLogout()
  return (
    <div className="text-white px-10 pt-5 pb-20 space-y-14 h-full scrollbar scrollbar-none">
      <section className="flex">
        <button className={`px-3 pt-1 pb-3 flex ${store.author.authorInfo.name?'':'hidden'}
        items-center font-semibold bg-white text-red-500
        hover:scale-105 duration-150 transition`}
        onClick={()=>logout()}>
        登出<ArrowRight className="w-4"/>
        </button>
      </section>
      <section>
      <NavItem link="/dashboard"><StarIcon className="h-5 mr-2"/>控制台 Dashboard</NavItem>  
      <NavItem link="/dashboard/editor">< BookmarkIcon className="h-5 mr-2"/>文章编辑 Editor</NavItem>
      <NavItem link="/dashboard/manager"><ArchiveBoxIcon className="h-5 mr-2"/>文章管理 Manager</NavItem>
      <NavItem  link="/dashboard/upload"><CodeBracketIcon className="h-5 mr-2"/>文章上传 Upload</NavItem>
      <NavItem link="/dashboard/other"><ChatBubbleLeftEllipsisIcon className="h-5 mr-2"/>其他 Other</NavItem>
      <NavItem  link="/"><HeartIcon className="h-5 mr-2"/>主页 Home</NavItem>
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
            <FooterItem link={config.links.email}><Email className="w-4 mr-1"/>E-mail</FooterItem>
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
