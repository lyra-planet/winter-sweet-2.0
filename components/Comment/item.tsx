import React from 'react'
import {distanceToNow} from '../../lib/dateRelative'
const Item = ({comment,onDelete,isAdmin,isAuthor}) => {
  return (
    <div key={comment.createdAt} className="flex space-x-2 px-4 py-3 bg-radial">
    <div className="flex-shrink-0">
      <img
        src={comment.userPicture}
        alt={comment.userName}
        width={30}
        height={30}
        className="rounded-full"
      />
    </div>
    <div className="flex-grow">
      <div className="flex space-x-2">
        <div className='flex flex-col md:flex-row  justify-between w-full'>

        <p className='font-bold text-sm'>{comment.userName}</p>
        <div>
        <time className=" text-neutral-500 font-serif text-xs">
          {distanceToNow(comment.createdAt)}
        </time>
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
      <div className="prose" dangerouslySetInnerHTML={{ __html: comment.text }}/>
    </div>
  </div>
  )
}

export default Item