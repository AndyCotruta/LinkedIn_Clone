import React from "react";
import { useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchAllProfiles,
  fetchPosts,
  fetchProfile,
} from "../../redux/actions/actions";

function AnimationPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    dispatch(fetchProfile(accessToken));
    dispatch(fetchAllProfiles());
    dispatch(fetchPosts());
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return (
    <div className="animation-container">
      <div className="animation-text">
        Welcome to <span className="animation-text-lnkdn">LinkedIn</span>
      </div>
      <ProgressBar
        className="animation-progress"
        bgColor="#0a66c2"
        completed={100}
        transitionDuration="2s"
        animateOnRender
        isLabelVisible={false}
        height="10px"
      />
    </div>
  );
}

export default AnimationPage;
