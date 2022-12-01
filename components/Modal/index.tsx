import React from 'react'
import { Alert, Check,Error, Spin } from '../../assets'

const Modal = ({type=1,active,text}) => {
  return (
    <div className={` 
    ${active?"translate-y-full":"opacity-0 -translate-y-full"} transition duration-300 absolute  z-50 flex flex-row items-center justify-center rounded-md top-0 px-4 py-2 font-medium  shadow-xl bg-white left-1/2 -translate-x-1/2`}>
    {
        type===1?<Check className="w-6 text-green-500"/>:
        type===0?<Error className="w-6 text-red-500"/>:
        type==-1?<Alert className="w-6 text-yellow-500"/>:
        type== 2?<Spin className="w-6 h-6 animate-spin text-neutral-600"/>:""
    }
    <p>{text}</p>
    </div>
  )
}

export default Modal