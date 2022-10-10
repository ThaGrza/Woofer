import { Link } from "react-router-dom";
import React from "react";

export default function Loggin() {
  return (
    <div className="loggin-container">
      <p className="intro-text">
        Welcome to Woofer the premier social media and dog park buddy platform.
      </p>
      <form className="loggin-form">
        <input className="username-text" placeholder="Username"></input>
        <input className="password-text" placeholder="Password"></input>
        <button className="loggin-button">Login</button>
      </form>
      <div className="signUp-optins">
        <Link to="/SignUp" className="signUp-option">
          <button className="signup-button">Sign Up</button>
        </Link>
        <button className="forgot-password-button">Forgot Password?</button>
      </div>
    </div>
  );
}
