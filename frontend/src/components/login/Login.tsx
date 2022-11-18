import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const configuration = {
    method: "post",
    url: "http://localhost:3001/login",
    data: {
      email,
      password,
    },
  };
  const woofer = () => {
    axios(configuration)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignUp = () => {};

  const handleForgotPass = () => {};

  return (
    <div className="page-container">
      <div className="login-container">
        <p className="intro-text">
          Welcome to Woofer the premier social media and dog park platform.
        </p>
        <form className="login-form">
          <input
            className="username-text input"
            id="username"
            type="username"
            placeholder="Username"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            className="password-text input"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button className="login button" onClick={woofer}>
            Login
          </button>
        </form>
        <div className="signUp-options">
          <Link to="/signup" className="signup-link">
            <button className="signup-link-button">Sign Up</button>
          </Link>
          <button className="forgot-password-button" onClick={handleForgotPass}>
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
}
