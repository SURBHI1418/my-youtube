import React from 'react'
import CommentContainerData from './CommentContainerData'



const CommentLists = ({ CommentDataList = [] }) => {
    return (
      <div className="my-2">
        {CommentDataList.map((comment, index) => (
          <div key={index}>
            <CommentContainerData data={comment} />
            {comment.replies && comment.replies.length > 0 && (
              <div className="pl-5 border border-l-black ml-5">
                <CommentLists CommentDataList={comment.replies} />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

export default CommentLists