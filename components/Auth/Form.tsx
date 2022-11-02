import React, { useState } from 'react'
import useLogin from '../../hooks/useLogin';
import {useEffect} from 'react';

const Form = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loading,setLoading] = useState(false)
    const [userData,setUserData]= useState({})
    const login = useLogin()
    const handleSubmit = (e)=>{
       handleLogin()
       e.preventDefault()
    }
    async function handleLogin() {
        setLoading(true)
        try {
        const data = login({
                email: email,
                password: password
            })
        } catch (error) {
            console.log(error)
        } finally {
           setLoading(false)
        }
    }
    useEffect(()=>{

    },[userData])
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} name="email"/>
        <input type="text" onChange={(e)=>setPassword(e.target.value)} name="password"/>
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Form