import React from 'react'
import {distanceToNow} from '../../../lib/dateRelative'
const Item = ({comment,onDelete,isAdmin,isAuthor,w}) => {
  return (
    <div key={comment.createdAt} className={` 
    flex-col
    min-w-[35%] md:first:border-r
    first:border-t
    md:first:border-t-0
    border-b
    md:border-b-0
    space-x-2 px-4 py-3`}
    style={{width:`${w*100}%`}}
    >
    <div className="flex-grow">
      <div className="flex space-x-2">
        <div className='flex flex-row  justify-between w-full'>
        <div className="flex items-center space-x-2">
      <img
        src={comment.userPicture}
        alt={comment.userName}
        width={30}
        height={30}
        className="rounded-full"
      />
      <p className='font-bold text-xs border-b-[2px] border-red-500'>{comment.userName}</p>
    </div>
        
        <div>
        {(isAdmin || isAuthor) && (
          <button
            className="text-gray-400 hover:text-red-500"
            onClick={() => onDelete(comment)}
            aria-label="Close"
          >
            x
          </button>
        )}
        </div>
        </div>
      </div>
      <div className="prose-sm" dangerouslySetInnerHTML={{ __html: comment.text }}/>
    </div>
  </div>
  )
}

export default Item