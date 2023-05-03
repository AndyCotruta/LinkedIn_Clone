import { ADD_ALL_POSTS, CHANGE_SHOW_POST_MODAL } from "../actions/actions";

const initialState = {
  posts: [],
  showPostModal: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }

    case CHANGE_SHOW_POST_MODAL: {
      return {
        ...state,
        showPostModal: action.payload,
      };
    }

    default:
      return state;
  }
};

export default postsReducer;
