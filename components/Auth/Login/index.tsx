import React, { useState,useEffect } from 'react'
import useLogout from '../../../hooks/useLogout';
import { useStore } from '../../../store';
import AuthorBar from '../AuthorBar';
import Form from '../Form'

const Login = () => {
  const [active,setActive] = useState(false)
  const store = useStore();
  return (
    <div className=' text-neutral-700'>
      <section className={`${store.author.authorInfo.name?'hidden':''}`}>
      <button 
      onClick={()=>setActive(active=>!active)}
      className=' bg-neutral-100 p-1 hover:bg-red-500 hover:text-white hover:font-bold cursor-pointer transition-all duration-150'>
      登录
      </button>
      <div className={`absolute z-10 bottom-12 left-12 bg-neutral-600 p-10 opacity-90 text-neutral-50 transition-all duration-75 origin-bottom-left ${active?"":"scale-0"}`}>  
      <Form active={active}/>
      </div>
      </section>
      <section className={`${store.author.authorInfo.name?'':'hidden'}`}>

      <AuthorBar author={store.author.authorInfo} />
      </section>
      </div>
  )
}

export default Login