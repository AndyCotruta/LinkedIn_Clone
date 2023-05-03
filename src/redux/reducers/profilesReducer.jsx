import {
  ADD_ALL_PROFILES,
  ADD_CLICKED_PROFILE,
  ADD_MY_PROFILE,
  CHANGE_SHOW_PROFILE_MODAL,
} from "../actions/actions";

const initialState = {
  allProfiles: [],
  clickedProfile: null,
  myProfile: null,
  showProfileModal: false,
};

const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_PROFILES: {
      return {
        ...state,
        allProfiles: action.payload,
      };
    }

    case ADD_CLICKED_PROFILE: {
      return {
        ...state,
        clickedProfile: action.payload,
      };
    }

    case ADD_MY_PROFILE: {
      return {
        ...state,
        myProfile: action.payload,
      };
    }
    case CHANGE_SHOW_PROFILE_MODAL: {
      return {
        ...state,
        showProfileModal: action.payload,
      };
    }
    default:
      return state;
  }
};

export default profilesReducer;
