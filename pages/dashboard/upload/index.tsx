import React from 'react'
import Layout from '../../../components/DashBoard/layout'
import Upload from '../../../components/DashBoard/Upload/index.tsx'

const index = ({ children }: { children: React.ReactNode }) => {
  const updateFilesCb=(files)=>{
    if(files[0]){
      let reader=new FileReader();
      reader.readAsText(files[0]);
      reader.onload=function(){
        console.log(reader.result)      
      }
    }
  }
  return (
    <section className='py-8 px-10 space-y-10 h-full w-full justify-center'>
    <section className='h-[5%]'>
        <h1 className="flex items-center space-x-2 text-3xl font-bold font-serif">
        <p>Lyra.Planet</p>
        <p className="w-2 h-2 bg-red-500"></p>
        <p>文章上传</p>
        </h1>
    </section>
  <section className='h-full w-full overflow-auto'>
  <Upload updateFilesCb={updateFilesCb} label={"MarkDown"} multiple={false}/>
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