import React from 'react'
import Layout from '../../components/layout'

const index = () => {
  return (
    <div>
        施工中
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