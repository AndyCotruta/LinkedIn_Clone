import React from "react";
import formatDistanceStrict from "date-fns/formatDistanceStrict";
import { SlOptions } from "react-icons/sl";

function OneComment({ comment }) {
  return (
    <div className="pb-2">
      <div className="d-flex">
        <img
          className="comment-profile-pic mr-2 mt-2"
          src={comment.user.image}
        />
        <div className="flex-grow-1 comment-text px-3 pt-2 pb-3">
          <div className="d-flex">
            <div className="flex-grow-1 align-items-center">
              <div className="comment-user-name">
                {comment.user.firstName} {comment.user.lastName}
              </div>
              <div className="comment-user-title">{comment.user.title}</div>
            </div>
            <div className="d-flex align-items-center">
              <div className="mr-2 comment-createdAt">
                {formatDistanceStrict(new Date(comment.createdAt), new Date())}{" "}
                ago
              </div>
              <SlOptions />
            </div>
          </div>
          <div>{comment.comment}</div>
        </div>
      </div>
      <div className="comment-interaction-container pt-1">
        <div className="ml-3 comment-interaction">Like</div>
        <div>|</div>
        <div className="comment-interaction">Reply</div>
      </div>
    </div>
  );
}

export default OneComment;
