import { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col, FormControl } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { useDispatch, useSelector } from "react-redux";
import { parseISO, format } from "date-fns";
import {
  ADD_EXPERIENCE,
  CHANGE_SHOW_MODAL,
  fetchProfile,
  GET_EXPERIENCE,
} from "../redux/actions/actions";

const ExperienceModal = (props) => {
  const [addedData, setAddedData] = useState({
    role: props.editData ? props.currentProfile.experiences.role : "",
    company: props.editData ? props.currentProfile.experiences.company : "",
    startDate: props.editData ? props.currentProfile.experiences.startDate : "",
    endDate: props.editData ? props.currentProfile.experiences.endDate : "",
    description: props.editData
      ? props.currentProfile.experiences.description
      : "",
    location: props.editData ? props.currentProfile.experiences.location : "",
  });

  const handleChange = (event) => {
    setAddedData({
      ...addedData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="experience-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="mx-3">
          <span>Add</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="mx-3">* indicates required</p>
        <Form
          className="mx-3"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Role*</Form.Label>
            <Form.Control
              value={addedData.role}
              onChange={handleChange}
              name="role"
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Employment type</Form.Label>
            <Form.Control as="select">
              <option>Please select</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Self-employed</option>
              <option>Freelance</option>
              <option>Contract</option>
              <option>Internship</option>
              <option>Apprenticeship</option>
              <option>Seasonal</option>
            </Form.Control>
            <p>
              Learn more about{" "}
              <span>
                <a href="https://www.linkedin.com/help/linkedin/answer/a549563?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_position%3BgJ0yLoo2SCiO0YPLpEz2Rg%3D%3D">
                  employment types
                </a>
              </span>
            </p>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Company name*</Form.Label>
            <Form.Control
              value={addedData.company}
              name="company"
              onChange={handleChange}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Location*</Form.Label>
            <Form.Control
              value={addedData.location}
              name="location"
              onChange={handleChange}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Location type</Form.Label>
            <Form.Control as="select">
              <option>Please select</option>
              <option>On-Site</option>
              <option>Hybrid</option>
              <option>Remote</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <p>Start date*</p>
            <Row>
              <Col>
                <Form.Control
                  type="date"
                  value={addedData.startDate}
                  name="startDate"
                  onChange={handleChange}
                  placeholder="month"
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <p>End date*</p>
            <Row>
              <Col>
                <Form.Control
                  type="date"
                  value={addedData.endDate}
                  name="endDate"
                  onChange={handleChange}
                  placeholder="month"
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={addedData.description}
              name="description"
              onChange={handleChange}
              as="textarea"
              rows={3}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {props.editData ? (
          <Button onClick={() => {}}>Update</Button>
        ) : (
          <Button onClick={() => {}}>Save</Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ExperienceModal;
