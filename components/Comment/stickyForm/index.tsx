import { Suspense, useState } from "react"
import useComments from "../../../hooks/front/useComment"
import Loading from "./loading"
import CommentForm from "./form"
import CommentList from "./list"

export default function Comment({linkTo}) {
    const { text, setText, comments, onSubmit, onDelete } = useComments("",linkTo)
    const [active,setActive] = useState(false)
    return (()=>{
      if(typeof comments === 'boolean'){
        return <Loading/>
      }else{
        return (
        <section className="relative w-full">
          <div className="bg-black p-1 inline-block text-white font-serif border-b-2 border-red-500">
           共有{comments.length}条留言
          </div>
            <section>

            <CommentList comments={comments} onDelete={onDelete} />
            </section>
        <section className={`
        ${active?"":" scale-0"} transition duration-150 origin-bottom-right
        w-2/3 md:w-1/2  h-[80vh] fixed bottom-10 right-10 space-y-4`}>
        <div className="flex justify-start text-sm w-full">

        </div>
        <CommentForm onSubmit={onSubmit} text={text} setText={setText} />
        </section>
        <section className="fixed bottom-16  right-10 space-y-4 ">
          <button 
          onClick={()=>setActive(active=>!active)}
          className="bg-red-500 text-white py-2 md:py-1 px-4">
          吐槽
          </button>
        </section>
        </section>)  
      }    
    })()

  }
  