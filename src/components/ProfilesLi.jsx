import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADD_CLICKED_PROFILE, fetchProfile } from "../redux/actions/actions";
import GreyBorderBtn from "./GreyBorderBtn";

const ProfilesLi = (props) => {
  const navigate = useNavigate();
  const action = ADD_CLICKED_PROFILE;
  const dispatch = useDispatch();
  const id = props.profile._id;
  const endPoint = "https://striveschool-api.herokuapp.com/api/profile/";
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk3MGQxOGM5NmRmYjAwMTUyMWE1YzkiLCJpYXQiOjE2NzA4NDM2NzIsImV4cCI6MTY3MjA1MzI3Mn0.0dUkULTnbH-D7rmu6VpWb4OqjIwfSynoJ3nmyP2FbL4";
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };

  return (
    <li className="sidebarLi d-flex">
      <div className="pt-3">
        <div className="xs-profiles fs-12 d-flex align-items-center text-center">
          <img
            className="xs-profiles pointer"
            src={props.profile.image}
            alt="mini-profile-pics"
            onClick={() => {
              navigate(`/profile/${props.profile._id}`);
              dispatch(fetchProfile(endPoint, options, id, action));
            }}
          />
        </div>
      </div>

      <ul className="ml-3">
        <li className="pt-3">
          <span
            className="fw-bold pointer"
            onClick={() => {
              navigate(`/profile/${props.profile._id}`);
              dispatch(fetchProfile(endPoint, options, id, action));
            }}
          >
            {props.profile.firstName} {props.profile.lastName} |{" "}
          </span>
          <span className="linkedin-d-grey">1st</span>
        </li>
        <li className="py-2 fs-14 linkedin-d-grey">{props.profile.title}</li>
        <li className="pb-3">
          <GreyBorderBtn icon={props.icon} content="Message" />
        </li>
      </ul>
    </li>
  );
};

export default ProfilesLi;
