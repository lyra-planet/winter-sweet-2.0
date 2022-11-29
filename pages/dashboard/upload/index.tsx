import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Layout from '../../../components/DashBoard/layout'
import Upload from '../../../components/DashBoard/Upload/index.tsx'
import Modal from '../../../components/Modal'
const index = () => {
  const [status,setStatus] = useState(1)
  const [post,setPost] = useState('')
  const [modal,setModal] = useState(0)
  const router = useRouter()
  const uploadPost = async()=>{
    const data = await fetch("/api/post/uploadPost",{
      method:"POST",
      body:JSON.stringify({before:false,after:post,status:status})
    }).then(res=>res.json())
    if( data.status=== 'succeed' ){
      setModal(1)
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
  <section className='py-8 px-10 space-y-10 h-full w-full justify-center'>
      <Modal active={modal} type={1}>上传成功</Modal>
    <section className='h-[5%]'>
        <h1 className="flex items-center space-x-2 text-3xl font-bold font-serif">
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