import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlueButton from "../Buttons/BlueButton";

function LoginInputArea() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = async () => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
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
      <div
        className="pt-3"
        onClick={() => {
          handleLogin();
        }}
      >
        <BlueButton text={"Log In"} />
      </div>
    </div>
  );
}

export default LoginInputArea;
