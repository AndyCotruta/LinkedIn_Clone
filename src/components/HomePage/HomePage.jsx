import RightSideBar from "../RightSideBar";
import MainPostsContainer from "./MainPostsContainer";
import { Col } from "react-bootstrap";
import LeftSidebar from "./LeftSidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_ALL_POSTS,
  ADD_MY_PROFILE,
  fetchPosts,
  fetchProfile,
} from "../../redux/actions/actions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="d-flex">
      {myProfile && (
        <>
          <LeftSidebar myProfileData={myProfile} />
          <MainPostsContainer />
          <RightSideBar />
        </>
      )}
    </div>
  );
};

export default HomePage;
