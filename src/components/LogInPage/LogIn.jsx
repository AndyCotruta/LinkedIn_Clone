import React from "react";
import LoginInputArea from "./LoginInputArea";
import SignUpInputArea from "./SignUpInputArea";

function LogIn({ signUp, setSignUp }) {
  return (
    <div className="login-container">
      <div>
        <div className="login-welcome-text">
          Welcome to your professional community
        </div>
        {signUp ? <SignUpInputArea /> : <LoginInputArea />}
      </div>

      <div>
        <img
          className="login-image"
          src="lnkdn-login.svg"
          alt="Man sitting in front of a desk and working on a computer"
        />
      </div>
    </div>
  );
}

export default LogIn;
