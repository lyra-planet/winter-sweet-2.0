import { useStore } from "../store"
import { observer } from "mobx-react-lite"
import { useState } from "react"
import { redirect } from "next/dist/server/api-utils"
import cookie from 'react-cookies'
import { useRouter } from "next/router"
const useLogout = () => {
    const store = useStore()
    const router = useRouter()
    const logout = ()=>{
        new Promise(async (resolve, reject) => {
            try {

                const response = await fetch('/api/auth/logout', {
                    method: 'POST',
                })
                const data = await response.json()
                console.log(data )
                resolve(data)
            } catch (error) {
                reject(error)
            }
        }).then((res:any)=>{
            console.log(res)
        if(res.status==='succeed'){
            store.author.setAuthorInfo({})
            store.accessToken.setAccessTokenInfo({data:''})
            console.log("logout!")
            cookie.remove('refresh_token', { path: '/' })
            router.push("/")
        }else{
            alert(res.status)
        }
        })
    }
    return logout
}
export default useLogout
