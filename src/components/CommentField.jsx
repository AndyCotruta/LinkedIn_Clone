import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SlEmotsmile } from "react-icons/sl";
import { HiOutlinePhoto, HiDocument } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import OneComment from "./OneComment";

function CommentField({ comments }) {
  const myProfile = useSelector((state) => state.profiles.myProfile);
  const [comment, setComment] = useState("");

  return (
    <div>
      <div className="d-flex p-3">
        <img className="comment-profile-pic mr-2" src={myProfile.image} />
        <div className="comment-field-container flex-grow-1">
          <input
            className="comment-input-field"
            value={comment}
            placeholder="Add a comment..."
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <button className="comment-field-buttons">
            <SlEmotsmile className="comment-field-icon" />
          </button>

          <button className="comment-field-buttons">
            <HiOutlinePhoto className="comment-field-icon" />
          </button>
        </div>
      </div>
      <div className="comments-container p-3">
        <div className="d-flex align-items-center">
          <div className="most-relevant">Most relevant</div>
          <IoMdArrowDropdown className="most-relevant" />
        </div>
        {comments.map((comment) => (
          <OneComment comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default CommentField;
