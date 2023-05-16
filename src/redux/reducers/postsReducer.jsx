import {
  ADD_ALL_POSTS,
  CHANGE_CREATE_POST,
  CHANGE_EDIT_POST,
  CHANGE_POST_MODAL_EDIT_MODE,
  CHANGE_SHOW_POST_MODAL,
} from "../actions/actions";

const initialState = {
  posts: [],
  showPostModal: false,
  editMode: false,
  createPost: {
    text: "",
    postImage: "",
  },
  editPost: {},
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
    case CHANGE_POST_MODAL_EDIT_MODE: {
      return {
        ...state,
        editMode: action.payload,
      };
    }
    case CHANGE_EDIT_POST: {
      return {
        ...state,
        editPost: action.payload,
      };
    }
    case CHANGE_CREATE_POST: {
      return {
        ...state,
        createPost: action.payload,
      };
    }

    default:
      return state;
  }
};

export default postsReducer;
