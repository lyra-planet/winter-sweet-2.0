import { useRef, useEffect } from "react";
import Item from "./item";
import Loading from "./loading";
const index = ({tags,index}) => {
  const ref = useRef(null)
  useEffect(() => {
    if(ref){
      ref.current.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  },[index])
  return tags?(
      <section className="h-[80%] md:px-4 md:w-4/5 space-y-2 md:h-[95%]">
        <div className="w-full flex-row flex items-center">
        <hgroup className="flex items-center relative z-20 pr-2 bg-white space-x-1 text-2xl">
                <p className=" text-red-500">{tags[index].tag}</p>
                <p className="w-1.5 h-1.5 bg-neutral-300"></p>
                <p className="text-neutral-400 font-normal text-xl"><span className="font-serif">{tags[index].posts?.length}</span>篇博客</p>
        </hgroup>
        <p className="flex-grow bg-neutral-100 h-[2px]"/>
        </div>
          <ul ref={ref} className="h-full space-y-4 overflow-y-auto scrollbar-none">
            {
               tags[index].posts.map((post)=>{
                return (
                  <Item key={post.id} post={post}/>
                )
              })
            }
          </ul>
      </section>
  ):<Loading/>
};

export default index;
