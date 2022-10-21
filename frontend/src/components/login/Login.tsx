import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { SignUp } from "../signUp/SignUp";

export default function Login() {
  const [newMember, setNewMember] = useState(false);

  const handleSignUp = () => {
    setNewMember(true);
  };

  const handleForgotPass = () => {
    alert("LOL you forgot your password?");
  };

  return (
    <div className="page-container">
      {newMember === false && (
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
            ></input>
            <input
              className="password-text input"
              id="password"
              type="password"
              placeholder="Password"
            ></input>
            <button className="login button">Login</button>
          </form>
          <div className="signUp-options">
            <button className="signup button" onClick={handleSignUp}>
              Sign Up
            </button>
            <button
              className="forgot-password button"
              onClick={handleForgotPass}
            >
              Forgot Password?
            </button>
          </div>
        </div>
      )}
      {newMember === true && <SignUp />}
    </div>
  );
}
