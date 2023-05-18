import { useState } from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { parseISO, format } from "date-fns";
import { addExperience, editExperience } from "../../redux/actions/actions";
import BlueButton from "../Buttons/BlueButton";

const ExperienceModal = ({
  setShowModal,
  editData,
  currentExp,
  index,
  ...props
}) => {
  const dispatch = useDispatch();

  const accessToken = localStorage.getItem("accessToken");
  const myProfile = useSelector((state) => state.profiles.myProfile);

  const [addedData, setAddedData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    location: "",
  });
  const [editedData, setEditedData] = useState({
    role: currentExp?.role,
    company: currentExp?.company,
    startDate: currentExp?.startDate,
    endDate: currentExp?.endDate,
    description: currentExp?.description,
    location: currentExp?.location,
  });

  const handleAdd = (event) => {
    setAddedData({
      ...addedData,
      [event.target.name]: event.target.value,
    });
  };

  const handleEdit = (event) => {
    setEditedData({
      ...editedData,
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
          {editData ? <span>Edit</span> : <span>Add</span>}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          className="mx-3"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Role*</Form.Label>
            <Form.Control
              value={editData ? editedData.role : addedData.role}
              onChange={editData ? handleEdit : handleAdd}
              name="role"
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Company name*</Form.Label>
            <Form.Control
              value={editData ? editedData.company : addedData.company}
              onChange={editData ? handleEdit : handleAdd}
              name="company"
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Location*</Form.Label>
            <Form.Control
              value={editData ? editedData.location : addedData.location}
              onChange={editData ? handleEdit : handleAdd}
              name="location"
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group>
            <p>Start date*</p>
            <Row>
              <Col>
                <Form.Control
                  type="date"
                  value={
                    editData
                      ? format(parseISO(editedData.startDate), "yyyy-MM-dd")
                      : addedData.startDate
                  }
                  onChange={editData ? handleEdit : handleAdd}
                  name="startDate"
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
                  value={
                    editData
                      ? format(parseISO(editedData.endDate), "yyyy-MM-dd")
                      : addedData.endDate
                  }
                  onChange={editData ? handleEdit : handleAdd}
                  name="endDate"
                  placeholder="month"
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={editData ? editedData.description : addedData.description}
              onChange={editData ? handleEdit : handleAdd}
              name="description"
              as="textarea"
              rows={3}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {editData ? (
          <div
            onClick={() => {
              dispatch(editExperience(accessToken, editedData, index));
            }}
          >
            <BlueButton text={"Update"} />
          </div>
        ) : (
          <div
            onClick={() => {
              dispatch(addExperience(accessToken, addedData));
            }}
          >
            <BlueButton text={"Save"} />
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ExperienceModal;
