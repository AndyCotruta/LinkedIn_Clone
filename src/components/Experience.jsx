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

const Experience = ({ currentProfile }) => {
  const dispatch = useDispatch();
  const params = useParams();

  const myProfile = useSelector((state) => state.profiles.myProfile);
  const [showEditExp, setShowEditExp] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(false);

  const experiences = currentProfile.experiences;

  return (
    <div className="experience-section ">
      <ExperienceModal
        currentProfile={currentProfile}
        show={showModal}
        editData={editData}
        onHide={() => {
          setShowModal(false);
        }}
      />
      <div className="d-flex experience-subsection">
        <h3 className="activity-title fs-20 fw-700 d-block d-flex align-items-center">
          Experience
        </h3>
        {/* this gets displayed when on user page */}
        {myProfile._id === params.userId && (
          <div>
            <>
              <button
                className="experience-buttons"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <HiOutlinePlus className="experience-buttons-icon" />
              </button>
            </>
          </div>
        )}

        {/* end here */}
      </div>
      {experiences.map((experience) => (
        <div
          className="experience-content d-flex justify-content-between"
          key={experience._id}
          onMouseEnter={() => {
            setShowEditExp(true);
          }}
          onMouseLeave={() => {
            setShowEditExp(false);
          }}
        >
          <div>
            <p className="fs-16 fw-800">{experience.role}</p>
            <p className="fs-14">{experience.company}</p>
            <span className="fs-14 ld-grey">
              from {format(parseISO(experience.startDate), "yyyy-MM-dd")}
            </span>
            <p className="fs-14 ld-grey">{experience.area}</p>
          </div>
          {showEditExp && (
            <div>
              <button className="experience-buttons">
                <HiTrash
                  onClick={() => {}}
                  className="experience-buttons-icon"
                />
              </button>
              <button className="experience-buttons">
                <HiOutlinePencil
                  className="experience-buttons-icon"
                  onClick={() => {}}
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
