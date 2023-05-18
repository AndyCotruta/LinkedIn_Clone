import { Col } from "react-bootstrap";
import EditLi from "./EditLi";
import ActionLi from "./ActionLi";
import ProfileAd from "./ProfileAd";
import ProfilesLi from "./ProfilesLi";
import CoursesLi from "./CoursesLi";
import { useSelector } from "react-redux";

const messageIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    data-supported-dps="16x16"
    fill="currentColor"
    className="mercado-match"
    width="16"
    height="16"
    focusable="false"
  >
    <path d="M14 2L0 6.67l5 2.64 5.67-3.98L6.7 11l2.63 5L14 2z"></path>
  </svg>
);

const dropdownIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    data-supported-dps="16x16"
    fill="currentColor"
    className="mercado-match"
    width="16"
    height="16"
    focusable="false"
  >
    <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
  </svg>
);

const RightSideBar = () => {
  const allProfiles = useSelector((state) => state.profiles.allProfiles);

  return (
    <Col className="d-flex flex-column align-items-end ">
      <ul className="sidebarUL mb-1">
        <EditLi text="Edit public profile & URL" />
        <EditLi text="Add profile in another language" />
      </ul>
      <ProfileAd />
      <ul className="sidebarUL profilesUL mb-0">
        <div className="fw-bold pt-3 fs-20">People also viewed</div>
        {allProfiles.users.slice(0, 5).map((profile) => (
          <ProfilesLi icon={messageIcon} profile={profile} key={profile._id} />
        ))}
      </ul>
      <ActionLi text="Show More" icon={dropdownIcon} />
      <ul className="sidebarUL profilesUL mb-0">
        <div className="fw-bold pt-3 fs-20">People you may know</div>
        {allProfiles.users.slice(0, 5).map((profile) => (
          <ProfilesLi icon={messageIcon} profile={profile} key={profile._id} />
        ))}
      </ul>
      <ActionLi text="Show More" icon={dropdownIcon} />
      <div className="sidebarUL profilesUL mb-0 sticky">
        <div className="fw-bold pt-3 fs-20">
          <div className="d-flex align-items-center">
            <span className="linkedin-d-blue mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                data-supported-dps="14x14"
                fill="currentColor"
                className="mercado-match"
                width="14"
                height="14"
                focusable="false"
              >
                <g>
                  <path
                    className="background-mercado"
                    d="M14 1v12a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM4 5H2v7h2zm.25-2A1.27 1.27 0 003 1.8 1.27 1.27 0 001.75 3 1.27 1.27 0 003 4.2 1.27 1.27 0 004.25 3zM12 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 006.89 6V5H5v7h2V8.73A1.74 1.74 0 018.66 6.8C9.82 6.8 10 7.94 10 8.73V12h2z"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="fs-18">LEARNING</span>
          </div>
        </div>

        <CoursesLi
          imgSource="https://backend.cleverclipstudios.com/wp-content/uploads/2022/04/Blogpost-E-Learnings-1024x576.jpg"
          courseName="Creating Illustrative Design"
        />
        <CoursesLi
          imgSource="https://observatory.tec.mx/wp-content/uploads/2019/03/bigstock-Vector-Creative-Illustration-256954996.jpg"
          courseName="Grasshopper: Tips, Tricks, and Techniques"
        />
        <div className="mb-3">
          {" "}
          <CoursesLi
            imgSource="https://theeducationhub.org.nz/wp-content/uploads/2021/01/1.-What-teachers-should-know-scaled.jpeg"
            courseName="SketchUp 2020 Essential Training"
          />
        </div>
      </div>
      <ActionLi text="See my recommendations" />
    </Col>
  );
};

export default RightSideBar;
