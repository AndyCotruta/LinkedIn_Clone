import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  CHANGE_SHOW_PROFILE_MODAL,
  editProfile,
  fetchProfile,
} from "../redux/actions/actions";
import BlueButton from "./BlueButton";
import GreyBorderBtn from "./GreyBorderBtn";

const MyProfileModal = (props) => {
  const dispatch = useDispatch();

  const myProfile = useSelector((state) => state.profiles.myProfile);
  const accessToken = localStorage.getItem("accessToken");

  const [addedMyProfileData, setaddedMyProfileData] = useState({
    firstName: myProfile.firstName,
    lastName: myProfile.lastName,
    email: myProfile.email,
    title: myProfile.title,
    location: myProfile.location,
    about: myProfile.about,
  });

  function handleChange(event) {
    setaddedMyProfileData({
      ...addedMyProfileData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Edit your profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name*</Form.Label>
            <Form.Control
              value={addedMyProfileData.firstName}
              name="firstName"
              onChange={handleChange}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Surname*</Form.Label>
            <Form.Control
              value={addedMyProfileData.lastName}
              name="lastName"
              onChange={handleChange}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              value={addedMyProfileData.email}
              name="email"
              onChange={handleChange}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title*</Form.Label>
            <Form.Control
              value={addedMyProfileData.title}
              name="title"
              onChange={handleChange}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Location*</Form.Label>
            <Form.Control
              value={addedMyProfileData.location}
              name="location"
              onChange={handleChange}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>About*</Form.Label>
            <Form.Control
              value={addedMyProfileData.about}
              name="about"
              onChange={handleChange}
              type="text"
              placeholder=""
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div
          onClick={() => {
            props.setShowModal(false);
          }}
        >
          <GreyBorderBtn content={"Close"} />
        </div>
        <div
          onClick={() => {
            dispatch(editProfile(accessToken, addedMyProfileData));
          }}
        >
          <BlueButton text={"Save Changes"} />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default MyProfileModal;
