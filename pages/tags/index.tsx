import React from 'react'
import Layout from '../../components/layout'

const index = () => {
  return (
    <div>tags</div>
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