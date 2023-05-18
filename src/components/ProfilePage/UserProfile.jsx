import Experience from "./Experience";
import Education from "./Education";
import Licenses from "./Licences";
import Skills from "./Skills";
import Languages from "./Languages";
import Interests from "./Interests";
import Activity from "./Activity";
import AboutUser from "./AboutUser";
import ProfileSection from "./ProfileSection";
import { Col } from "react-bootstrap";
import RightSideBar from "../HomePage/RightSideBar/RightSideBar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const params = useParams();
  const myProfile = useSelector((state) => state.profiles.myProfile);
  const clickedProfile = useSelector((state) => state.profiles.clickedProfile);

  const currentProfile =
    params.userId === myProfile._id ? myProfile : clickedProfile;

  return (
    <>
      <Col sm={12} md={6} lg={8}>
        <ProfileSection currentProfile={currentProfile} />
        <div className="cards-main-container cd-width">
          <AboutUser currentProfile={currentProfile} />
          <div className="activity">
            <Activity />
          </div>
          <div className="experience cd cd-width ff">
            <Experience currentProfile={currentProfile} />
          </div>
          <div className="education cd cd-width ff">
            <Education />
          </div>
          <div className="Licenses cd cd-width ff">
            <Licenses />
          </div>
          <div className="skills cd cd-width ff">
            <Skills />
          </div>
          <div className="languages cd cd-width ff">
            <Languages />
          </div>
          <div className="interests cd cd-width ff">
            <Interests />
          </div>
        </div>
      </Col>
      <Col sm={12} md={6} lg={4} className="px-0">
        <RightSideBar />
      </Col>
    </>
  );
};
export default UserProfile;
