import React from "react";
import formatDistanceStrict from "date-fns/formatDistanceStrict";
import { SlOptions } from "react-icons/sl";

function OneComment({ comment }) {
  return (
    <div className="d-flex">
      <img className="comment-profile-pic mr-2" src={comment.user.image} />
      <div className="d-flex align-items-center flex-grow-1 comment-text">
        <div className="flex-grow-1">
          <div>
            {comment.user.firstName} {comment.user.lastName}
          </div>
          <div>{comment.comment}</div>
        </div>
        <div>
          {formatDistanceStrict(new Date(comment.createdAt), new Date())} ago
        </div>
        <SlOptions />
      </div>
    </div>
  );
}

export default OneComment;
