import { useLayoutEffect } from "react";
import TocHelper from "toc-helper";

const Toc = ()=>{
    useLayoutEffect(() => {
        console.log("Toc")
        console.log(          new TocHelper(document.getElementById('post-toc'), {
            scrollSelector: document.getElementById('post-content'),
            contentSelector: document.getElementById('post-content'),
            collapsedLevel: 3,
          }))
        //   new TocHelper(document.getElementById('post-toc'), {
        //     scrollSelector: document.getElementById('post-content'),
        //     contentSelector: document.getElementById('post-content'),
        //     collapsedLevel: 3,
        //   });
      }, []);
  return (
    <div
    id="post-toc"
    className="bg-white h-full font-serif font-sm text-sm bg-radial"
  />
  )
  }
  export default Toc