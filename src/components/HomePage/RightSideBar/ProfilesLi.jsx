import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADD_CLICKED_PROFILE } from "../../../redux/actions/actions";
import GreyBorderBtn from "../../Buttons/GreyBorderBtn";

const ProfilesLi = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const id = props.profile._id;

  return (
    <li className="sidebarLi d-flex">
      <div className="pt-3">
        <div className="xs-profiles fs-12 d-flex align-items-center text-center">
          <img
            className="xs-profiles pointer"
            src={props.profile.image}
            alt="mini-profile-pics"
            onClick={() => {
              dispatch({
                type: ADD_CLICKED_PROFILE,
                payload: props.profile,
              });
              navigate(`/profile/${id}`);
            }}
          />
        </div>
      </div>

      <ul className="ml-3">
        <li className="pt-3">
          <span
            className="fw-bold pointer"
            onClick={() => {
              dispatch({
                type: ADD_CLICKED_PROFILE,
                payload: props.profile,
              });
              navigate(`/profile/${id}`);
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
