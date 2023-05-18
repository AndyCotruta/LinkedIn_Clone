import like from "../../Icon/like.svg";
import comment from "../../Icon/chat.svg";
import repost from "../../Icon/share.svg";
import share from "../../Icon/Send 2.svg";
import {
  CHANGE_EDIT_POST,
  CHANGE_POST_MODAL_EDIT_MODE,
  CHANGE_SHOW_POST_MODAL,
  deletePost,
  likePost,
} from "../../redux/actions/actions";
import PostModal from "../PostModal";
import { useDispatch, useSelector } from "react-redux";
import { SlOptions } from "react-icons/sl";
import { useState } from "react";
import CommentField from "../CommentField";

const PostsDisplay = (props) => {
  const dispatch = useDispatch();
  const editMode = useSelector((state) => state.posts.editMode);
  const myProfile = useSelector((state) => state.profiles.myProfile);
  const showPostModal = useSelector((state) => state.posts.showPostModal);
  const [showPostOptions, setShowPostOptions] = useState(false);
  const accessToken = localStorage.getItem("accessToken");

  return (
    <>
      <div className="mainContainerPost mb-3">
        <div className="post-header d-flex justify-content-between align-items-center p-3">
          <div>
            <img
              className="userPicturePost mr-3"
              src={props.post.user.image}
              alt="profile.name"
            />
          </div>
          <div className="flex-grow-1">
            <span className="fs-14 fw-700 mr-1">
              {props.post.user.firstName}
            </span>
            <span className="fs-14 fw-700 mr-2">
              {props.post.user.lastName}
            </span>
            <div className="fs-12  ">{props.post.user.title}</div>
          </div>
          {myProfile._id === props.post.user._id && (
            <div
              onClick={() => {
                setShowPostOptions(!showPostOptions);
              }}
              className="post-options-icon"
            >
              <SlOptions />
            </div>
          )}
          {showPostOptions && (
            <div className="post-options-container">
              <div
                className="post-options"
                onClick={() => {
                  dispatch({
                    type: CHANGE_EDIT_POST,
                    payload: {
                      id: props.post._id,
                      text: props.post.text,
                      postImage: props.post.image,
                    },
                  });
                  dispatch({
                    type: CHANGE_POST_MODAL_EDIT_MODE,
                    payload: true,
                  });
                  dispatch({
                    type: CHANGE_SHOW_POST_MODAL,
                    payload: true,
                  });
                }}
              >
                Edit
              </div>
              <div className="post-options">Report</div>
              <div
                className="post-options"
                onClick={() => {
                  dispatch(deletePost(accessToken, props.post._id));
                }}
              >
                Delete
              </div>
            </div>
          )}
        </div>

        <div className="post-content p-3 fs-14">
          <p>{props.post.text}</p>
        </div>

        <div style={{ height: "540px" }}>
          <img
            src={props.post.image}
            alt="random-pic"
            className="w-100"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="d-flex justify-content-between px-3 py-3">
          <div>{props.post.likes.length} likes</div>
          <div>{props.post.comments.length} comments</div>
        </div>

        <div>
          <div className="like-box-feed wrapper my-1 fs-14 fw-800 mx-3">
            <button
              aria-label="Add a photo"
              className="d-flex align-items-center justify-content-center share-box-btn  py-2 px-1 my-1 width-hover"
              onClick={() => {
                dispatch(likePost(accessToken, props.post._id));
              }}
            >
              <img src={like} alt="" />
              <span className="share-box-btn-text  ml-2 fs-16">Like</span>
            </button>
            <button
              aria-label="Add a video"
              className="d-flex align-items-center justify-content-center share-box-btn py-2 px-1 my-1 width-hover"
            >
              <img src={comment} alt="" />
              <span className="share-box-btn-text  ml-2 fs-16">Comment</span>
            </button>
            <button
              aria-label="Create an event"
              className="d-flex align-items-center  justify-content-center share-box-btn py-2 px-1 my-1 width-hover"
            >
              <img src={repost} alt="" />
              <span className="share-box-feed-entry-toolbar__item-text  ml-2 fs-16">
                Repost
              </span>
            </button>
            <button
              aria-label="Write an article on LinkedIn"
              className="d-flex align-items-center justify-content-center share-box-btn py-2 px-1 my-1 width-hover"
            >
              <img src={share} alt="" />
              <span className="share-box-feed-entry-toolbar__item-text ml-2 fs-16">
                Send
              </span>
            </button>
          </div>
        </div>
        <CommentField comments={props.post.comments}/>
      </div>
    </>
  );
};

export default PostsDisplay;
