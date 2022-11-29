import React from 'react'
import { Alert, Check,Error } from '../../assets'

const index = ({type=1,active,children}) => {
  return (
    <div className={` 
    ${active?"animate-modal":""} absolute -translate-y-full z-50 flex flex-row items-center justify-center rounded-md top-0 px-4 py-2 font-medium  shadow-xl bg-white left-1/2 -translate-x-1/2`}>
    {
        type===1?<Check className="w-6 text-green-500"/>:
        type===0?<Error className="w-6 text-red-500"/>:
        type==-1? <Alert className="w-6 text-yellow-500"/>:""
    }
    <p>{children}</p>
    </div>
  )
}

export default index