import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <input className="email-text" placeholder="Email"></input>
        <input className="username-text" placeholder="Username"></input>
        <input className="password-text" placeholder="Password"></input>
        <input className="password-text" placeholder="Password"></input>
        <button className="signup-form-button">Sign Up</button>
      </form>
    </div>
  );
}
