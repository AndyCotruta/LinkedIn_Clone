import WritePost from "./WritePost";
import PostsDisplay from "../PostComponent/PostsDisplay";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  CHANGE_POST_MODAL_EDIT_MODE,
  CHANGE_SHOW_POST_MODAL,
} from "../../redux/actions/actions";
import PostModal from "../PostComponent/PostModal";

const MainPostsContainer = () => {
  const dispatch = useDispatch();
  const showPostModal = useSelector((state) => state.posts.showPostModal);
  const allPosts = useSelector((state) => state.posts.posts);
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
  return (
    <>
      <div>
        <PostModal
          show={showPostModal}
          onHide={() => {
            dispatch({
              type: CHANGE_SHOW_POST_MODAL,
              payload: !showPostModal,
            });
            dispatch({
              type: CHANGE_POST_MODAL_EDIT_MODE,
              payload: false,
            });
          }}
        />
        <WritePost />
        <div className="d-flex align-items-center justify-content-between fs-14">
          <hr className="w-75"></hr>
          <span className="mx-2">
            Sort by: <span className="fw-800">Top</span>
          </span>
        </div>
        {sortedPosts?.map((post, i) => (
          <PostsDisplay post={post} key={post._id} i={i} />
        ))}
      </div>
    </>
  );
};

export default MainPostsContainer;
