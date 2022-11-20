import { GetServerSideProps } from 'next/types';
import React, { useEffect } from 'react'
import useInitAuth from '../hooks/useInitAuth';
const StoreProvider = ({pageProps,Component}) => {
  const {initAuth} = useInitAuth()
  useEffect(()=>{
  initAuth()
},[])
const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <Component {...pageProps} />
  )
}

export default StoreProvider
