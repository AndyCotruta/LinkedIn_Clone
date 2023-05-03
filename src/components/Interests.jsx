import { Tab, Tabs } from "react-bootstrap";
import Education from "./Education";

const Interests = () => {
  return (
    <div className="interests-section ">
      <h3 className="fs-20 fw-700">Interests</h3>
      <div className="skills-content d-flex-column">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Top Voices">
            <div className="mt-3">
              <Education />
            </div>
          </Tab>
          <Tab eventKey="profile" title="Companies">
            <div className="mt-3">
              <Education />
            </div>
          </Tab>
          <Tab eventKey="contact" title="Groups">
            <div className="mt-3">
              <Education />
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Interests;
