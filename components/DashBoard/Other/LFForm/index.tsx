import { useEffect, useState } from 'react'
import Modal from '../../../Modal'

export default function AdForm({
  onSubmit,type,data
}) {
    const [name,setName] = useState('')
    const [picture,setPicture] = useState('')
    const [description,setDescription] = useState('')
    const [link,setLink] = useState('')

    const [status,setStatus] = useState(1)

    const [modal,setModal] = useState({
      active:0,text:"",type:1
    })
    const restModal = ()=>{
      setTimeout(()=>{
        setModal({...modal,
          active:0
      })
      },3000)
    }
    const isUrl = (str) => {
      let v = new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i');
            return v.test(str);
       }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!isUrl(picture)){
          setModal({...modal,active:1,text:"链接格式错误",type:0})
          restModal()
          return
        }
        const pack = {name, picture, description,link,status,before:data}
        onSubmit(pack,type)
    }
    useEffect(()=>{
      if(data){
        if(data.name){
          setName(data.name)
          setPicture(data.picture)
          setDescription(data.description)
          setLink(data.link)
          setStatus(data.status)
        }
      }

    },[data])
  return (
    <div className='w-full space-y-2'>
    <Modal type={modal.type} active={modal.active} text={modal.text}/>
    <input 
            className="flex w-full  p-1 px-3  resize-y text-neutral-500 outline-none border-[1px] placeholder-neutral-300"
    type="text" placeholder='名字' 
            onChange={(e) => setName(e.target.value)}
            value={name}
    />
    <input 
            className="flex w-full  p-1 px-3  resize-y text-neutral-500 outline-none border-[1px] placeholder-neutral-300"
    type="text" placeholder='图片' 
            onChange={(e) => setPicture(e.target.value)}
            value={picture}
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
