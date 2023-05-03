import {
  ADD_CURRENT_EXP_DATA,
  ADD_EXPERIENCE,
  CHANGE_EDIT_EXP_SECTION,
  CHANGE_SHOW_MODAL,
  GET_EXPERIENCE,
  GET_EXPERIENCE_ERROR,
} from "../actions/actions";

const initialState = {
  expData: [],
  error: false,
  addedExp: null,
  showModal: false,
  showEditExpSection: false,
  currentExpData: null,
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCE: {
      return {
        ...state,
        expData: action.payload,
      };
    }

    case ADD_EXPERIENCE: {
      return {
        ...state,
        addedExp: action.payload,
      };
    }

    case CHANGE_SHOW_MODAL: {
      return {
        ...state,
        showModal: action.payload,
      };
    }

    case CHANGE_EDIT_EXP_SECTION: {
      return {
        ...state,
        showEditExpSection: action.payload,
      };
    }

    case ADD_CURRENT_EXP_DATA: {
      return {
        ...state,
        currentExpData: action.payload,
      };
    }

    case GET_EXPERIENCE_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default experienceReducer;
