import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlueButton from "../Buttons/BlueButton";

function SignUpInputArea() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState(false);

  const handleSignUp = async () => {
    try {
      if (!passwordError) {
        let response = await fetch("http://localhost:3001/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, lastName, email, title, password }),
        });
        if (response.ok) {
          let data = await response.json();
          localStorage.setItem("accessToken", data.accessToken);
          navigate("/redirect");
        } else {
          console.log("Error while creating an account");
          setError(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-input-area">
      <div className="d-flex flex-column">
        <div className="login-name-container">
          <input
            className="login-input mb-2"
            placeholder="Firstname"
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            className="login-input mb-2"
            placeholder="Lastname"
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
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
          className="login-input mb-2"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          className="login-input mb-2"
          placeholder="Verify Password"
          type="password"
          value={secondPassword}
          onChange={(e) => {
            setSecondPassword(e.target.value);
          }}
        />
        <input
          className="login-input"
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onFocus={() => {
            if (password !== secondPassword) {
              setPasswordError(true);
            } else if (password === secondPassword) {
              setPasswordError(false);
            }
          }}
        />
      </div>
      {error && (
        <div className="login-wrong-credentials">
          An account with this email already exists.
        </div>
      )}
      {passwordError && (
        <div className="login-wrong-credentials">
          Passwords don't match. Please try again.
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
          handleSignUp();
        }}
      >
        <BlueButton text={"Sign Up"} />
      </div>
    </div>
  );
}

export default SignUpInputArea;
