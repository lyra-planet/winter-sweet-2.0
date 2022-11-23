import React from 'react'
import Layout from '../../components/layout'

import AboutMe  from '../../components/AboutMe';

const index = () => {
  return (
    <div className='p-10 space-y-10 w-full min-h-screen flex flex-col items-center '>
      <section>
        <h1 className=' text-3xl font-bold flex items-center'>Lyra.Planet<span className='mx-2 w-2.5 h-2.5 inline-block bg-red-500'></span>关于我</h1>
      </section>
      <AboutMe/>
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