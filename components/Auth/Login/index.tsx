import React, { useState,useEffect } from 'react'
import useLogout from '../../../hooks/useLogout';
import { useStore } from '../../../store';
import AuthorBar from '../AuthorBar';
import Form from '../Form'

const Login = () => {
  const [active,setActive] = useState(false)
  const store = useStore();
  const logout = useLogout()
  return (
    <div className=' text-neutral-700'>
      <section className={`${store.author.authorInfo.name?'hidden':''}`}>
      <button 
      onClick={()=>setActive(active=>!active)}
      className=' bg-neutral-100 p-1 hover:bg-red-500 hover:text-white hover:font-bold cursor-pointer transition-all duration-150'>
      登录
      </button>
      <Form active={active}/>
      </section>
      <section className={`${store.author.authorInfo.name?'':'hidden'}`}>
      <AuthorBar author={store.author.authorInfo} />
      </section>
      </div>
  )
}

export default Login