import {
  ADD_CURRENT_EXP_DATA,
  ADD_EXPERIENCE,
  CHANGE_EDIT_DATA,
  CHANGE_EDIT_EXP_SECTION,
  CHANGE_SHOW_MODAL,
  GET_EXPERIENCE,
  GET_EXPERIENCE_ERROR,
} from "../actions/actions";

const initialState = {
  expData: [],
  error: false,
  addedExp: null,

  showEditExpSection: false,
  currentExpData: null,
  modal: {
    showModal: false,
    editData: false,
  },
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
        modal: { ...state.modal, showModal: action.payload },
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
    case CHANGE_EDIT_DATA: {
      return {
        ...state,
        modal: { ...state.modal, editData: action.payload },
      };
    }
    default:
      return state;
  }
};

export default experienceReducer;
