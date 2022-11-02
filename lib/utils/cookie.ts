import {serialize,CookieSerializeOptions, parse } from 'cookie'
import type{NextApiResponse} from 'next';


export const setCookie = (res:NextApiResponse,name:string,value:unknown,options:CookieSerializeOptions={})=>{
    const stringValue = typeof value === 'object'? 'j:'+JSON.stringify(value):String(value)
    if(typeof options.maxAge === 'number'){
        options.expires = new Date(Date.now()+options.maxAge*1000)
    }
    res.setHeader('Set-Cookie',serialize(name,stringValue,options))
}
export const delCookie = (res:NextApiResponse,name:string)=>{
    console.log(name)
    res.setHeader('Set-Cookie',serialize(name,'',{expires:new Date(Date.now()),path:'/'}))
}
export const paraseCookie = (cookie: string | undefined) => {
    if(cookie){
        const cookieArr = cookie.split("; ")
        let obj = {} 
        cookieArr.forEach((i) => {
            let arr = i.split("=");
            obj[arr[0]] =arr[1];
        });
        return obj
    }
    return {}
  }
