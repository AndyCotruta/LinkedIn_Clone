import React from "react";
import search from "../../Icon/Search.svg";
import { useNavigate } from "react-router-dom";
import { ADD_CLICKED_PROFILE } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

const SearchModel = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = props.resultData._id;

  return (
    <div
      className="d-flex align-items-center justify-content-between search-results"
      onClick={() => {
        props.setQuery("");
        dispatch({
          type: ADD_CLICKED_PROFILE,
          payload: props.resultData,
        });
        navigate(`/profile/${id}`);
      }}
    >
      <div className="d-flex">
        <div>
          <img src={search} alt="" className="px-3" />
        </div>
        <div className="d-flex align-items-center">
          <div className="fs-16 fw-700">
            {props.resultData.firstName} {props.resultData.lastName} |
          </div>
          <div className="ml-1 fs-12"> {props.resultData.title}</div>
        </div>
      </div>
      <div>
        <img src={props.resultData.image} alt="" className="search-image" />
      </div>
    </div>
  );
};

export default SearchModel;
