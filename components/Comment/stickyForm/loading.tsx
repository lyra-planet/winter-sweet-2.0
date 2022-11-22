import React from 'react'
import { SkeletonCard } from './skeletonCard'

const loading = () => {
  return (
    <section>
    <div className="bg-black p-1 inline-block text-white font-serif border-b-2 border-red-500">
    共有X条留言
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 border-t">
    <SkeletonCard isLoading={true} />
    <SkeletonCard isLoading={true} />
    <SkeletonCard isLoading={true} />
    <SkeletonCard isLoading={true} />
  </div>
    </section>
  )
}

export default loading