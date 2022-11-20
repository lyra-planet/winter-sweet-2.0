import React, { useState } from 'react'
import useLogin from '../../../hooks/useLogin';
import {useEffect} from 'react';

const Form = ({active}) => {
    const {loading,handleLogin,handleSubmit,setEmail,setPassword} = useLogin()
  return (
        <form onSubmit={handleSubmit} className="w-[10rem] flex flex-col  space-y-4">
        <div className=''>
        <p className='text-sm'>Email:</p>
        <input className='w-full text-red-500 text-sm' type="text" onChange={(e)=>setEmail(e.target.value)} name="email"/>
        </div>
        <div>
        <p className='text-sm'>密码:</p>
        <input className='w-full text-red-500' type="password" onChange={(e)=>setPassword(e.target.value)} name="password"/>
        </div>
        <input className='flex-start w-14 bg-red-500' type="submit" value="登录"/>
        </form>
  )
}

export default Form