const leftSideBar = ({tags,active,setPosts}) => {
  return (
    <section className="h-full border-r  w-1/5 space-y-2">
    <div className="w-full flex-row flex items-center pr-2">
      <hgroup className="flex items-center flex-row relative pr-2 bg-white space-x-1 text-lg">
              <p className=" text-red-500">集册</p>
              <p className="w-1 h-1 bg-neutral-300"></p>
              <p className="text-neutral-400 font-normal text-sm"><span className="font-serif">{tags.length}</span>个标签</p>
      </hgroup>
      <p className="flex-grow bg-neutral-100  h-[1px]"/>
      </div>
      <section className="h-full">
        <ul className="space-y-2  overflow-y-auto">
            {
               tags.map((item,index)=>{
                const tag = item.tag
                    return (
                        <li key={tag}
                        onClick={()=>setPosts(index)}
                        className=" cursor-pointer border-b flex flex-row space-x-1 hover group">
                            <p className="text-red-500">#</p>
                            <p className={`${active===index? "text-red-500":"text-neutral-800"} group-hover:text-red-500 duration-150`}>{tag}</p>
                        </li>
                    )
                })
            }
        </ul>
      </section>
    </section>
  )
}

export default leftSideBar