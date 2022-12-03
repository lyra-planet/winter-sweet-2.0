import React from 'react'

const loading = () => {
  return (
    <div
    className=' 
     space-y-3 w-full
    relative overflow-hidden 
    before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-tran-gray-tran'
  >
    <div className="h-4 w-4/5 rounded-md  bg-neutral-200" />
    <div className="h-4 w-3/5 rounded-md bg-neutral-200" />
    <div className="h-4 w-4/5 rounded-md  bg-neutral-200" />      
    <div className="h-4 w-2/5 rounded-md  bg-neutral-200" />
    <div className="h-4 w-3/5 rounded-md bg-neutral-200" />
    <div className="h-4 w-4/5 rounded-md  bg-neutral-200" />        
    </div>

  )
}

export default loading