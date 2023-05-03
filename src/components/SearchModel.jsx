import React from "react";
import "./SearchModel.css";
import search from "../Icon/Search.svg";
import { useNavigate } from "react-router-dom";
import { ADD_CLICKED_PROFILE, fetchProfile } from "../redux/actions/actions";
import { useDispatch } from "react-redux";

const SearchModel = (props) => {
  const navigate = useNavigate();
  const action = ADD_CLICKED_PROFILE;
  const dispatch = useDispatch();
  const id = props.resultData._id;
  const endPoint = "https://striveschool-api.herokuapp.com/api/profile/";
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4NGEyNzQwNWJkYTAwMTUwOTE4NDQiLCJpYXQiOjE2NzA5MjQ4MzksImV4cCI6MTY3MjEzNDQzOX0.x2Rft_8jW0eH4mFzHLq669IFCzGAFGCn7LuvHCf2udU";
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-between search-results"
        onClick={() => {
          navigate(`/profile/${id}`);
          dispatch(fetchProfile(endPoint, options, id, action));
        }}
      >
        <div className="d-flex">
          <div>
            <img src={search} alt="" className="ml-3" />
          </div>
          <div className="d-flex align-items-center">
            <div className="ml-3 fs-16 fw-700">
              {props.resultData.name} {props.resultData.surname} ·{" "}
            </div>
            <div className="ml-1 fs-12 career"> {props.resultData.title}</div>
          </div>
        </div>
        <div>
          <img src={props.resultData.image} alt="" className="search-image" />
        </div>
      </div>
    </>
  );
};

export default SearchModel;
