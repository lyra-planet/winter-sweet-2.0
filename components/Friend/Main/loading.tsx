import React from 'react'
import { SkeletonCard } from './skeletonCard'

const loading = () => {
  return (
    <>  
    <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
  </>
  )
}

export default loading