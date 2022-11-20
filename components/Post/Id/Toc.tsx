import { useLayoutEffect } from "react";
import TocHelper from "toc-helper";

const Toc = ({tocRef,contentRef})=>{
    useLayoutEffect(() => {
      console.log(tocRef.current,contentRef.current)
      if(typeof window === 'object'){
        console.log(typeof window)
        new TocHelper(tocRef.current, {
          scrollSelector: contentRef.current,
          contentSelector: contentRef.current,
          collapsedLevel: 3,
        });
      }
    }, [contentRef, tocRef]);
  return (
    <div
    ref={tocRef}
    className="bg-white h-full font-serif font-sm text-sm bg-radial"
  />
  )
  }
  export default Toc