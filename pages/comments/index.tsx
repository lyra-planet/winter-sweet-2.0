import React, { Suspense } from 'react'
import Layout from '../../components/layout'
import Comments from '../../components/Comment/stickyForm'
const index = () => {
  return (
    <section className='p-10 space-y-10 min-h-screen w-full'>
      <section>
        <h1 className=' text-3xl font-bold flex items-center'>
          Lyra.Planet
          <span className='mx-2 w-2.5 h-2.5 inline-block bg-red-500'>
            </span>留言板</h1>
      </section>
      <section className='relative'> 
        <Comments linkTo={'/comments'}/>
      </section>
    </section>
  )
}
export async function getServerSideProps(context) {

  return { props:{}}
}
index.getLayout = function getLayout(page: React.ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
export default index