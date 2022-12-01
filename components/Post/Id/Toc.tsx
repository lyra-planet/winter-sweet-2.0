import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useRef } from "react";
import TocHelper from "toc-helper";
import tocbot from "tocbot";
import 'tocbot/static/css/tocbot.css'
const Toc = ()=>{
  const ref = useRef<any>(null)
  const {query:{postId} } = useRouter()
    useEffect(() => {
      console.log(1)
      tocbot.init({
        // Where to render the table of contents.
        tocSelector: '#post-toc',
        // Where to grab the headings to build the table of contents.
        contentSelector: '#post-content',
        scrollContainer: '#scroll-con',
        // Which headings to grab inside of the contentSelector element.
        headingSelector: 'h1, h2, h3',
        collapseDepth: 0,
        // Smooth scrolling enabled.
        scrollSmooth: true,
        // Smooth scroll duration.
        scrollSmoothDuration: 420,
        // Smooth scroll offset.
        scrollSmoothOffset: 200,
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