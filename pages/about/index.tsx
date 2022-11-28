import React from 'react'
import Layout from '../../components/layout'

import AboutMe  from '../../components/AboutMe';

const index = () => {
  return (
    <div className='p-10 space-y-10 w-full min-h-screen flex flex-col items-center '>
      <section className='w-full flex justify-center'>
        <h1 className='text-3xl font-bold flex items-center font-serif'>Lyra.Planet<span className='mx-2 w-2 h-2 inline-block bg-red-500'></span>关于我</h1>
      </section>
      <section className='w-full flex items-center'>

      <AboutMe/>
      </section>
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