import { Accordion } from "react-bootstrap";
import {
  ADD_QUERY,
  ADD_SEARCH_RESULTS,
  CHANGE_CLICKED_SEARCH_STATUS,
} from "../actions/actions";

const initialState = {
  clicked: false,
  query: "",
  searchResults: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CLICKED_SEARCH_STATUS: {
      return {
        ...state,
        clicked: action.payload,
      };
    }

    case ADD_QUERY: {
      return {
        ...state,
        query: action.payload,
      };
    }

    case ADD_SEARCH_RESULTS: {
      return {
        ...state,
        searchResults: action.payload,
      };
    }

    default:
      return state;
  }
};

export default searchReducer;
