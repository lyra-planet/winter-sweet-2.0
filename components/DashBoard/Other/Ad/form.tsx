import { useEffect, useState } from 'react'

export default function AdForm({
  onSubmit,type,data
}) {
  const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [link,setLink] = useState('')
    const [status,setStatus] = useState(1)
    const handleSubmit = (e)=>{
        e.preventDefault()
        const pack = {name,description,link:link,status,before:data}
        onSubmit(pack,type)
    }
    useEffect(()=>{
      console.log(data)
      if(data.name){
        setName(data.name)
        setDescription(data.description)
        setLink(data.link)
      }
    },[data])
  return (
    <div className='w-full space-y-2'>
    <input 
            className="flex w-full  p-1 px-3  resize-y text-neutral-500 outline-none border-[1px] placeholder-neutral-300"
    type="text" placeholder='标题' 
            onChange={(e) => setName(e.target.value)}
            value={name}
    />
    <input 
            className="flex w-full  p-1 px-3  resize-y text-neutral-500 outline-none border-[1px] placeholder-neutral-300"
    type="text" placeholder='链接' 
            onChange={(e) => setLink(e.target.value)}
            value={link}
    />
    <textarea
        className="flex w-full  p-3  resize-y text-neutral-500 outline-none border-[1px] placeholder-neutral-300"
        rows={2}
        placeholder={"描述"}
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <div className='flex flex-col space-y-1 sm:space-y-0 sm:flex-row justify-between'>
        <div className="flex flex-row sm:space-x-1 text-xs md:text-base">
        <button 
              onClick={()=>setStatus(1)}
              className={`w-20 p-1  cursor-pointer ${status===1 ? " bg-green-500 text-white font-semibold":" bg-neutral-200 text-black hover:bg-neutral-300"}`}>
                Publish
              </button>
              <button 
              onClick={()=>setStatus(-1)}
              className={`p-1 w-20  border-r cursor-pointer ${status===-1 ? " bg-yellow-500 text-white font-semibold":" bg-neutral-200 text-black hover:bg-neutral-300"}`}>
                Draft
              </button>
              <button 
              onClick={()=>setStatus(0)}
              className={`p-1 w-20   border-r cursor-pointer ${status===0 ? " bg-blue-500 text-white font-semibold":" bg-neutral-200 text-black hover:bg-neutral-300"}`}>
               Delete
              </button>
        </div>
        <button 
        onClick={handleSubmit}
        className="py-1 text-xs px-4 w-20 bg-red-500 text-white disabled:opacity-40 hover:scale-105">
            上传
        </button>
      </div>
    </div>
  )
}
