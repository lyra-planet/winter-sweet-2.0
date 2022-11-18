import dynamic from 'next/dynamic'
import { GetServerSideProps } from 'next/types'
import React from 'react'
import Layout from '../../components/DashBoard/layout'
import { getRefreshTokenByToken } from '../../lib/token'
import { decodeRefreshToken } from '../../lib/utils/jwt'


const index = () => {
  return (
    <div>
      <section>
123
      </section>
      <section>
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
export const getServerSideProps: GetServerSideProps = async ({req,res}) => {
  const refresh_token = req.cookies["refresh_token"]
  if(!refresh_token){
    return{
      redirect:{
        destination:'/',
        permanent:false
      }
    }
  }
  const refreshToken = await getRefreshTokenByToken(refresh_token)
  if(! refreshToken){
    return{
      redirect:{
        destination:'/',
        permanent:false
      }
    }
  }
  return {props:{}}
}