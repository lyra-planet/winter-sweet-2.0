import React, { Suspense, useEffect, useState } from 'react'
import Layout from '../../../components/DashBoard/layout'
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import { getRefreshTokenByToken } from '../../../lib/token';
import { GetServerSideProps } from 'next/types';
const Editor = dynamic(()=>import('../../../components/DashBoard/Editor'),{ssr:false})
const index = () => {
  const router = useRouter()
  const [post,setPost] = useState({})
  useEffect(()=>{
  if(router.query.id){
    fetch("/api/post/getPostById",{method:"POST",body:router.query.id as string})
    .then(res=>res.json())
    .then(data=>{
      setPost(data)
    })
  }
  },[router])
  return (
    <Editor post={post}/>
  )
}
index.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default index

export const getServerSideProps: GetServerSideProps = async ({req,res}) => {
  const refresh_token = req.cookies["refresh_token"]
  if(!refresh_token){
    return{
      redirect:{
        destination:'/',
        permanent:false
      }
    }
  }
  const refreshToken = await getRefreshTokenByToken(refresh_token)
  if(! refreshToken){
    return{
      redirect:{
        destination:'/',
        permanent:false
      }
    }
  }
  return {props:{}}
}