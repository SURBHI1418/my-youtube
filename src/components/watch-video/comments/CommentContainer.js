import React from 'react'
import { CommentData } from '../../../utils/constants'
import CommentLists from './CommentLists'

const CommentContainer = () => {
  return (
    <div className='px-[7%] m-4 w-[74%]'>
    <h1 className="text-2xl font-bold mb-3">Comments:</h1>
    <div className='flex bg-gray-100 shadow-sm p-2 rounded-lg my-2 '>
      
    <CommentLists CommentDataList={CommentData}/>
    </div>
    </div>

  )
}

export default CommentContainer