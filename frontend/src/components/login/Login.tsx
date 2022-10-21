import { Link } from "react-router-dom";
import React from "react";
import "./Login.css";

export default function Login() {
  return (
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
        <Link to="/SignUp" className="signUp-option">
          <button className="signup button">Sign Up</button>
        </Link>
        <button className="forgot-password button">Forgot Password?</button>
      </div>
    </div>
  );
}
