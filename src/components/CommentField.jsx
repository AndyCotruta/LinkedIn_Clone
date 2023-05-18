import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SlEmotsmile } from "react-icons/sl";
import { HiOutlinePhoto, HiDocument } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import OneComment from "./OneComment";
import BlueButton from "./BlueButton";
import { addComment } from "../redux/actions/actions";

function CommentField({ comments, postId }) {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");
  const myProfile = useSelector((state) => state.profiles.myProfile);
  const [input, setInput] = useState("");
  const [numberOfComments, setNumberOfComments] = useState(2);

  return (
    <div>
      <div className="d-flex p-3">
        <img className="comment-profile-pic mr-2" src={myProfile.image} />
        <div className="comment-field-container flex-grow-1">
          <input
            className="comment-input-field"
            value={input}
            placeholder="Add a comment..."
            onChange={(e) => {
              setInput(e.target.value);
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
      {input.length > 0 && (
        <div
          className="px-3 pb-3"
          onClick={() => {
            dispatch(addComment(accessToken, postId, input));
          }}
        >
          <BlueButton text={"Post"} />
        </div>
      )}
      <div className="comments-container px-3 pb-3">
        <div className="d-flex align-items-center pb-3">
          <div className="most-relevant">Most relevant</div>
          <IoMdArrowDropdown className="most-relevant" />
        </div>
        {comments.slice(0, numberOfComments).map((comment) => (
          <OneComment key={comment._id} comment={comment} />
        ))}
        {numberOfComments < comments.length && (
          <div
            className="load-more-comments"
            onClick={() => {
              setNumberOfComments(numberOfComments + 2);
            }}
          >
            Load more comments
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentField;
