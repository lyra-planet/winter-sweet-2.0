import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useRef } from "react";
import tocbot from "tocbot";
import 'tocbot/static/css/tocbot.css'
const Toc = ()=>{
  const ref = useRef<any>(null)
  const {query:{postId} } = useRouter()
    useEffect(() => {
      tocbot.init({
        tocSelector: '#post-toc',
        contentSelector: '#post-content',
        scrollContainer: '#scroll-con',
        headingSelector: 'h1, h2, h3',
        collapseDepth: 0,
        disableTocScrollSync:true
      });
      }, [postId]);
  return (
    <div 
    ref={ref}
    id="post-toc"
    className="bg-white h-full font-serif font-sm text-sm bg-radial overflow-y-auto scrollbar-none"
  />
  )
  }
  export default Toc