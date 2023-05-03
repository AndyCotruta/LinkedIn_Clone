import message from "../Icon/Send.svg";
import plus from "../Icon/Plus.svg";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { HiOutlinePencil } from "react-icons/hi";
import { useEffect } from "react";
import { CHANGE_SHOW_PROFILE_MODAL } from "../redux/actions/actions";
import MyProfileModal from "./MyProfileModal";

const ProfileSection = (props) => {
  const params = useParams();
  const myProfile = useSelector((state) => state.profiles.myProfile);
  const showProfileModal = useSelector(
    (state) => state.profiles.showProfileModal
  );
  const dispatch = useDispatch();

  return (
    <div className="profile-main">
      <MyProfileModal
        show={showProfileModal}
        onHide={() => {
          dispatch({
            type: CHANGE_SHOW_PROFILE_MODAL,
            payload: false,
          });
        }}
      />
      <div className="profile-cover">
        <img
          src="https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png"
          alt=""
        />
        <div className="profile-picture">
          <img src={props.currentProfile.image} alt="profile-image" />
        </div>
      </div>
      <div className="profile-text-area">
        <div className="profile-text">
          <div className="d-flex justify-content-between">
            {" "}
            <p className="username fs-24 fw-700 margin-0">
              {props.currentProfile.firstName} {props.currentProfile.lastName}
            </p>{" "}
            {params.userId === myProfile._id && (
              <button className="experience-buttons">
                <HiOutlinePencil
                  className="experience-buttons-icon"
                  onClick={() => {
                    dispatch({
                      type: CHANGE_SHOW_PROFILE_MODAL,
                      payload: true,
                    });
                  }}
                />
              </button>
            )}
          </div>

          <p className="user-role fs-16">{props.currentProfile.title}</p>
          <div className="contact-location d-flex align-items-center">
            <p className="location fs-14  mr-2">{props.currentProfile.area}</p>
            <p className="contact-info fs-14 fw-700">Contact info</p>
          </div>
        </div>
        <div className="profile-buttons d-flex justify-content-between">
          <button className="first-button ld-btn">
            <img src={message} alt="" />
            Message
          </button>
          <button className="second-button ld-btn">
            <img src={plus} alt="" />
            Follow
          </button>
          <button className="third-button gray-button ld-btn">More</button>
        </div>
      </div>
    </div>
  );
};
export default ProfileSection;
