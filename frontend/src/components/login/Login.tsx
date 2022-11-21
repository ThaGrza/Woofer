import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const user = {
    email: email,
    password: password,
  };
  const woofer = (e: any) => {
    e.preventDefault();
    axios
      .post("/login", user)
      .then((res) => {
        if (res.status === 200) {
          setLogin(true);
          alert("logged in");
          // navigate("/homepage", { replace: true });
        }
      })
      .catch((err) => {
        err = new Error();
      });
  };

  const handleForgotPass = () => {};

  return (
    <div className="page-container">
      <div className="login-container">
        <p className="intro-text">
          Welcome to Woofer the premier social media and dog park platform.
        </p>
        <form className="login-form">
          <input
            className="email-text input"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            className="password-text input"
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
