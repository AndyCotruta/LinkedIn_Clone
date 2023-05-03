import { useEffect, useState } from "react";
import {
  CHANGE_EDIT_EXP_SECTION,
  CHANGE_SHOW_MODAL,
  fetchProfile,
  GET_EXPERIENCE,
  ADD_CURRENT_EXP_DATA,
  ADD_EXPERIENCE,
} from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlinePencil, HiTrash } from "react-icons/hi";
import { IoMdArrowBack } from "react-icons/io";
import ExperienceModal from "./ExperienceModal";
import { useParams } from "react-router-dom";
import { format, parse, parseISO } from "date-fns";

const Experience = (props) => {
  const dispatch = useDispatch();
  const params = useParams();

  // const experiences = useSelector((state) => state.experience.expData);
  const experiences = props.experiences;
  const showModal = useSelector((state) => state.experience.showModal);
  const myProfile = useSelector((state) => state.profiles.myProfile);
  const clickedProfile = useSelector((state) => state.profiles.clickedProfile);
  const currentProfile =
    params.userId === myProfile._id ? myProfile : clickedProfile;
  const currentExpData = useSelector(
    (state) => state.experience.currentExpData
  );
  const editExpSection = useSelector(
    (state) => state.experience.showEditExpSection
  );
  const isMyProfile =
    myProfile && clickedProfile && myProfile._id === clickedProfile._id;
  // const endPoint = "https://striveschool-api.herokuapp.com/api/profile/";
  // const accessToken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk3MGQxOGM5NmRmYjAwMTUyMWE1YzkiLCJpYXQiOjE2NzA4NDM2NzIsImV4cCI6MTY3MjA1MzI3Mn0.0dUkULTnbH-D7rmu6VpWb4OqjIwfSynoJ3nmyP2FbL4";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     Authorization: "Bearer " + accessToken,
  //   },
  // };
  // const params = useParams();
  // const id = params.userId === `${props.currentProfile._id}/experiences`;
  // const action = GET_EXPERIENCE;
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({
  //     type: action,
  //     payload: [],
  //   });
  //   dispatch(fetchProfile(endPoint, options, id, action));
  // }, [props.currentProfile]);

  const endPoint = "https://striveschool-api.herokuapp.com/api/profile/";
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk3MGQxOGM5NmRmYjAwMTUyMWE1YzkiLCJpYXQiOjE2NzA4NDM2NzIsImV4cCI6MTY3MjA1MzI3Mn0.0dUkULTnbH-D7rmu6VpWb4OqjIwfSynoJ3nmyP2FbL4";
  const options = {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };
  const deleteId =
    props.currentExpData &&
    `${currentProfile._id}/experiences/${currentExpData._id}`;
  const action = ADD_EXPERIENCE;

  return (
    <div className="experience-section ">
      <div className="d-flex experience-subsection">
        <h3 className="activity-title fs-20 fw-700 d-block d-flex align-items-center">
          {editExpSection && (
            <span>
              <button className="experience-buttons">
                <IoMdArrowBack
                  className="experience-buttons-icon"
                  onClick={() => {
                    dispatch({
                      type: CHANGE_EDIT_EXP_SECTION,
                      payload: !editExpSection,
                    });
                  }}
                />
              </button>
            </span>
          )}
          Experience
        </h3>
        {/* this gets displayed when on user page */}
        <div>
          {isMyProfile && (
            <>
              <button
                className="experience-buttons"
                onClick={() => {
                  dispatch({ type: CHANGE_SHOW_MODAL, payload: true });
                }}
              >
                <HiOutlinePlus className="experience-buttons-icon" />
              </button>
              {!editExpSection && (
                <button className="experience-buttons">
                  <HiOutlinePencil
                    className="experience-buttons-icon"
                    onClick={() => {
                      dispatch({
                        type: CHANGE_EDIT_EXP_SECTION,
                        payload: !editExpSection,
                      });
                    }}
                  />
                </button>
              )}
            </>
          )}

          <ExperienceModal
            currentProfile={props.currentProfile}
            currentExpData={currentExpData}
            show={showModal}
            onHide={() => {
              dispatch({ type: CHANGE_SHOW_MODAL, payload: false });
              dispatch({
                type: ADD_CURRENT_EXP_DATA,
                payload: null,
              });
            }}
          />
        </div>
        {/* end here */}
      </div>
      {experiences.map((experience) => (
        <div
          className="experience-content d-flex justify-content-between"
          key={experience._id}
        >
          {/* <div className="experience-logo">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQEFWO_s8a0FHQ/company-logo_200_200/0/1647618816994?e=1678924800&v=beta&t=odzOEdC0guAqvuVCim8HVjfOOqC4KwNoQmSMZQ69EPg"
              alt=""
            />
          </div> */}
          <div>
            <p className="fs-16 fw-800">{experience.role}</p>
            <p className="fs-14">{experience.company}</p>
            <span className="fs-14 ld-grey">
              from{" "}
              {experience.startDate &&
                experience.startDate !== null &&
                format(parseISO(experience.startDate), "yyyy-MM-dd")}
            </span>
            {/* <span className="fs-14 ld-grey"> until </span>
            <span className="fs-14 ld-grey">
              {experience.updatedAt.slice(0, 10)}
            </span> */}
            <p className="fs-14 ld-grey">{experience.area}</p>
          </div>{" "}
          {editExpSection && (
            <div>
              <button className="experience-buttons">
                <HiTrash
                  onClick={() => {
                    dispatch({
                      type: ADD_CURRENT_EXP_DATA,
                      payload: experience,
                    });
                    console.log(
                      `We want to delete the experience with id: ${experience._id} and completeEndpoint ${currentProfile._id}/experiences/${experience._id}`
                    );
                    dispatch(
                      fetchProfile(
                        endPoint,
                        options,
                        `${currentProfile._id}/experiences/${experience._id}`,
                        action
                      )
                    );
                  }}
                  className="experience-buttons-icon"
                />
              </button>
              <button className="experience-buttons">
                <HiOutlinePencil
                  className="experience-buttons-icon"
                  onClick={() => {
                    dispatch({ type: CHANGE_SHOW_MODAL, payload: true });
                    dispatch({
                      type: ADD_CURRENT_EXP_DATA,
                      payload: experience,
                    });
                  }}
                />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Experience;
