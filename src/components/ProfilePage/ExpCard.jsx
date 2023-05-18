import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlinePencil, HiTrash } from "react-icons/hi";
import { format, parseISO } from "date-fns";
import ExperienceModal from "./ExperienceModal";
import { deleteExperience } from "../../redux/actions/actions";

function ExpCard({ experience, index, currentProfile }) {
  const dispatch = useDispatch();

  const myProfile = useSelector((state) => state.profiles.myProfile);
  const accessToken = localStorage.getItem("accessToken");

  const [showEditExp, setShowEditExp] = useState(false);
  const [editData, setEditData] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const experiences = currentProfile.experiences;
  const currentExp = experiences[index];

  return (
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
      <ExperienceModal
        currentExp={currentExp}
        editData={editData}
        index={index}
        show={showModal}
        onHide={() => {
          setShowModal(false);
          setEditData(false);
        }}
      />
      <div>
        <p className="fs-16 fw-800">{experience.role}</p>
        <p className="fs-14">{experience.company}</p>
        <span className="fs-14 ld-grey">
          from {format(parseISO(experience.startDate), "yyyy-MM-dd")}
        </span>
        <p className="fs-14 ld-grey">{experience.area}</p>
      </div>
      {showEditExp && currentProfile._id === myProfile._id && (
        <div>
          <button className="experience-buttons">
            <HiTrash
              onClick={() => {
                dispatch(deleteExperience(accessToken, experience));
              }}
              className="experience-buttons-icon"
            />
          </button>
          <button className="experience-buttons">
            <HiOutlinePencil
              className="experience-buttons-icon"
              onClick={() => {
                setEditData(true);
                setShowModal(true);
              }}
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default ExpCard;
