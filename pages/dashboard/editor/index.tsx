import React from 'react'
import Layout from '../../../components/DashBoard/layout'
import dynamic from "next/dynamic";
const Editor = dynamic(()=>import('../../../components/DashBoard/Editor'),{ssr:false})
const index = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' h-full'>
    <Editor/>
    <div>{children}</div>
    </div>
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