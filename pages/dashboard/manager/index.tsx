import React from 'react'
import Layout from '../../../components/DashBoard/layout'

const index = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
    manager
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