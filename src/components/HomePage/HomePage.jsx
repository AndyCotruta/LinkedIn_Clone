import RightSideBar from "./RightSideBar/RightSideBar";
import MainPostsContainer from "./MainPostsContainer";
import LeftSidebar from "./LeftSideBar/LeftSidebar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";

const HomePage = () => {
  const navigate = useNavigate();

  const myProfile = useSelector((state) => state.profiles.myProfile);

  useEffect(() => {
    if (myProfile === null) {
      navigate("/login");
    } else {
      return;
    }
  }, []);

  return (
    <>
      {myProfile && (
        <div className="hom">
          <LeftSidebar myProfileData={myProfile} />
          <MainPostsContainer />
          <RightSideBar />
        </div>
      )}
    </>
  );
};

export default HomePage;
