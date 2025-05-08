import React from 'react'
import { CircleUserRound } from 'lucide-react';

const CommentContainerData = ({data}) => {
    const {name, text, replies}=data;
  return (

    <div className='flex  ' >
        <CircleUserRound/>
        
      <div className='px-4'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>

      </div>

    </div>
  )
}

export default CommentContainerData