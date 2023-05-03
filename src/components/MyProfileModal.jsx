import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  CHANGE_SHOW_PROFILE_MODAL,
  fetchProfile,
} from "../redux/actions/actions";

const MyProfileModal = (props) => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.profiles.myProfile);

  const [addedMyProfileData, setaddedMyProfileData] = useState({
    name: "",
    surname: "",
    email: "",
    title: "",
    area: "",
    bio: "",
  });

  function handleChange(event) {
    setaddedMyProfileData({
      ...addedMyProfileData,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    setaddedMyProfileData(myProfile);
  }, [myProfile]);

  const endPoint = "https://striveschool-api.herokuapp.com/api/profile/";
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk3MGQxOGM5NmRmYjAwMTUyMWE1YzkiLCJpYXQiOjE2NzA4NDM2NzIsImV4cCI6MTY3MjA1MzI3Mn0.0dUkULTnbH-D7rmu6VpWb4OqjIwfSynoJ3nmyP2FbL4";
  const options = {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addedMyProfileData),
  };
  const id = "";
  const action = "";
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
              value={addedMyProfileData.name}
              name="name"
              onChange={handleChange}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Surname*</Form.Label>
            <Form.Control
              value={addedMyProfileData.surname}
              name="surname"
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
              value={addedMyProfileData.area}
              name="area"
              onChange={handleChange}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>About*</Form.Label>
            <Form.Control
              value={addedMyProfileData.bio}
              name="bio"
              onChange={handleChange}
              type="text"
              placeholder=""
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            dispatch({
              type: CHANGE_SHOW_PROFILE_MODAL,
              payload: false,
            });
          }}
        >
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(fetchProfile(endPoint, options, id, action));
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyProfileModal;
