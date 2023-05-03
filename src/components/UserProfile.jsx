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
import RightSideBar from "./RightSideBar";
import MainFooter from "./MainFooter";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProfile, GET_EXPERIENCE } from "../redux/actions/actions";

const UserProfile = () => {
  const params = useParams();
  const myProfile = useSelector((state) => state.profiles.myProfile);
  const clickedProfile = useSelector((state) => state.profiles.clickedProfile);
  const experiences = useSelector((state) => state.experience.expData);
  const addedExpData = useSelector((state) => state.experience.addedExpData);
  const editExpSection = useSelector(
    (state) => state.experience.showEditExpSection
  );

  const currentProfile =
    params.userId === myProfile._id ? myProfile : clickedProfile;

  const endPoint = "https://striveschool-api.herokuapp.com/api/profile/";
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk3MGQxOGM5NmRmYjAwMTUyMWE1YzkiLCJpYXQiOjE2NzA4NDM2NzIsImV4cCI6MTY3MjA1MzI3Mn0.0dUkULTnbH-D7rmu6VpWb4OqjIwfSynoJ3nmyP2FbL4";
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };
  const id = `${currentProfile._id}/experiences`;
  const action = GET_EXPERIENCE;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile(endPoint, options, id, action));
  }, [clickedProfile]);

  useEffect(() => {
    dispatch(fetchProfile(endPoint, options, id, action));
  }, [addedExpData]);

  return (
    <>
      {editExpSection ? (
        <>
          <Col sm={12} md={6} lg={8}>
            <ProfileSection currentProfile={currentProfile} />
            <div className="cards-main-container cd-width">
              {experiences.length !== 0 && (
                <div className="experience cd cd-width ff">
                  <Experience
                    currentProfile={currentProfile}
                    experiences={experiences}
                  />
                </div>
              )}
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <RightSideBar />
          </Col>
        </>
      ) : (
        <>
          <Col sm={12} md={6} lg={8}>
            <ProfileSection currentProfile={currentProfile} />
            <div className="cards-main-container cd-width">
              <AboutUser currentProfile={currentProfile} />
              <div className="activity">
                <Activity />
              </div>
              <div className="experience cd cd-width ff">
                {experiences.length !== 0 && (
                  <Experience
                    currentProfile={currentProfile}
                    experiences={experiences}
                  />
                )}
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
      )}
    </>
  );
};
export default UserProfile;
