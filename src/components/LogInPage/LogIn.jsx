import React from "react";
import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BlueButton from "../BlueButton";

function LogIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = async () => {
    try {
      let response = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        let data = await response.json();
        localStorage.setItem("accessToken", data.accessToken);
        navigate("/redirect");
      } else {
        console.log("Error while login");
        setError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div>
        <div className="login-welcome-text">
          Welcome to your professional community
        </div>
        <div className="login-input-area">
          <div className="d-flex flex-column">
            <input
              className="login-input mb-2"
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="login-input"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          {error && (
            <div className="login-wrong-credentials">
              Email or Password might be wrong.
            </div>
          )}
          <div className="py-3">
            By clicking Agree & Join, you agree to the LinkedIn{" "}
            <span className="login-agreement-text">User Agreement</span>,
            <span className="login-agreement-text"> Privacy Policy</span> and{" "}
            <span className="login-agreement-text">Cookie Policy</span>
          </div>
          <div
            onClick={() => {
              handleLogin();
            }}
          >
            <BlueButton text={"Log In"} />
          </div>
        </div>
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
