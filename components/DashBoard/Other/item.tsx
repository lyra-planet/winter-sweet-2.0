import React from 'react'
import { formatDate, formatMonth } from '../../../lib/dateRelative'

const item = ({item,active}) => {
  console.log(item)
  return (
    <div className={`cursor-pointer border-b p-1 text-xs flex items-center ${active?" bg-red-500 border text-white  font-semibold rounded-sm ":"hover:bg-neutral-100"}  transition duration-150`}>
      <div className='w-[30%] flex justify-center'>
      <p className={` inline-block p-0.5 text-sm rounded-md text-white font-semibold ${
        item.status===1 ? "bg-green-500": item.status===0  ? "bg-blue-500" : item.status === -1 ? " bg-yellow-500" : "bg-red-500"
      }`}>
        {
      item.status===1 ? "Published": item.status===0  ? "Deleted" : item.status === -1 ? "Draft" : "ERROR"}
        </p>  
      </div>
      <p className='w-[30%] flex justify-center'>{item.name}</p>
      <p className='w-[40%] flex justify-center'>{formatMonth(item.createdAt)}</p>
      </div>
  )
}

export default item