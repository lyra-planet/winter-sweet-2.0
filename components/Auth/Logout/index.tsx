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
      <section className={` bg-neutral-100 p-1 ${store.author.authorInfo.name?'':'hidden'}`}>
        <button onClick={()=>logout()}>登出</button>
      </section>
      </div>
  )
}

export default Login