import { useStore } from "../store"
import { observer } from "mobx-react-lite"
import { useState } from "react"
import { redirect } from "next/dist/server/api-utils"
const useLogin = () => {
    const store = useStore()
    const login = ({ email, password }:{email:string,password:string})=>{
        new Promise(async (resolve, reject) => {
            const sendData:any = {
                email,
                password
            }
            try {
                if(store.author.authorInfo.id){
                    await fetch('/api/auth/logout',{
                        method:'POST'
                    })
                }
                if(email&&password){
                    const response = await fetch('/api/auth/login', {
                        method: 'POST',
                        body: JSON.stringify(sendData)
                    })
                    const data = await response.json()
                    resolve(data)
                }else{
                    alert("你邮箱和密码输全了没?")
                }
            } catch (error) {
                reject(error)
            }
        }).then((res:any)=>{
        if(res.status==='succeed'){
            const {status,data:{accessToken,author}} = res
            store.author.setAuthorInfo(author)
            store.accessToken.setAccessTokenInfo({data:accessToken})
            
        }else{
            alert(res.status)
        }
        })
    }
    return login
}
export default useLogin
