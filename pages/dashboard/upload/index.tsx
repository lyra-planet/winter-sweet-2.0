import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Layout from '../../../components/DashBoard/layout'
import Upload from '../../../components/DashBoard/Upload/index.tsx'
import Modal from '../../../components/Modal'
import { getRefreshTokenByToken } from '../../../lib/token'
const index = () => {
  const [status,setStatus] = useState(1)
  const [post,setPost] = useState('')
  const [modal,setModal] = useState({
    active:0,text:"",type:1
  })
  const restModal = ()=>{
    setTimeout(()=>{
    setModal({...modal,
        active:0
    })
    },1500)
  }
  const router = useRouter()
  const uploadPost = async()=>{
    setModal({active:1,text:"上传中",type:2})
    const data = await fetch("/api/post/uploadPost",{
      method:"POST",
      body:JSON.stringify({before:false,after:post,status:status})
    }).then(res=>res.json())
    if( data.status=== 'succeed' ){
      setModal({active:1,text:"上传成功",type:1})
      restModal()
      router.push('/dashboard/manager')
    }
  }
  const updateFilesCb=(files,status)=>{
    if(files[0]){
      let reader=new FileReader();
      reader.readAsText(files[0]);
      reader.onload=function(){
        setPost(reader.result as string)    
        setStatus(status)
      }
    }
  }
  return (
  <section className='flex flex-col px-5 md:px-10 space-y-5 h-full w-full justify-center'>
    <Modal active={modal.active} text={modal.text} type={modal.type} />
    <section className='h-[5%]'>
        <h1 className="flex items-center space-x-2 text-xl md:text-3xl font-bold font-serif">
        <p>Lyra.Planet</p>
        <p className="w-2 h-2 bg-red-500"></p>
        <p>文章上传</p>
        </h1>
    </section>
    <section className='h-full w-full overflow-auto'>
      <Upload uploadPost={uploadPost} updateFilesCb={updateFilesCb} label={"MarkDown"} multiple={false}/>
    </section>
  </section>
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