import { Navbar, Col, Row, Container, NavItem, ListGroup, ListGroupItem, DropdownButton, Dropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap/esm";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MdSettings } from "react-icons/md";
import "./MainFooter.css";
import question from "../Icon/Exclude.svg";
import settings from "../Icon/settings.svg";
import logo from "../Icon/Logo.svg";

const MainFooter = () => {
  return (
    <Row className="mt-5 d-flex align-items-baseline">
      <Col md={8}>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="footer-main">
          <div className="list-1">
            <div>About</div>
            <div>Community Guidelines</div>
            <div>Privacy & Terms</div>
            <div>Sales Solutions</div>
            <div>Safety Center</div>
          </div>
          <div className="grid grid--no-gutters grid--is-nested">
            <div>Accessibility</div>
            <div>Careers</div>
            <div>Ad Choices</div>
            <div>Mobile</div>
          </div>
          <div className="grid grid--no-gutters grid--is-nested">
            <div>Talent Solutions</div>
            <div>Marketing Solutions</div>
            <div>Advertising</div>
            <div>Small Business</div>
          </div>
          <ListGroup className="grid grid--no-gutters grid--is-nested">
            <div className="d-flex align-items-start">
              <img src={question} alt="" className="mr-2" />
              <div className="questions">
                <p className="fs-14 fw-700">Questions?</p>
                <p className="fs-12">Visit our help center</p>
              </div>
            </div>
            <div className="d-flex align-items-start mt-3">
              <img src={settings} alt="" className="mr-2" />
              <div className="questions">
                <p className="fs-14 fw-700">Manage your account and privacy</p>
                <p className="fs-12">Go to your Settings.</p>
              </div>
            </div>
          </ListGroup>
        </div>
      </Col>
      <Col md={4}>
        <ListGroup className="select-language">
          <p className="fs-12 mb-1">Select language</p>

          <DropdownButton className="DropdownButton select-language-form " title="English">
            <Dropdown.Item eventKey="1">Polski</Dropdown.Item>
            <Dropdown.Item eventKey="2">Spanish</Dropdown.Item>
          </DropdownButton>
        </ListGroup>
      </Col>
    </Row>
  );
};

export default MainFooter;
