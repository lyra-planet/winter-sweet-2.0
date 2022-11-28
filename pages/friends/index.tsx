import React from 'react'
import Layout from '../../components/layout'
import Main from '../../components/Friend/Main'
const index = () => {
  return (
    <Main/>
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