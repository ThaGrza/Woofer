import React from "react";
import "./SignUp.css";

export function SignUp() {
  return (
    <div signUp-container>
      <p className="signUp-intro">
        OOOO we have a new member! Welcome Welcome Friend! Fill out some
        standard information below, once you are signed in you can start to
        customize your account!
      </p>
      <form className="signUp-form">
        <input className="signUp-input input" placeholder="Email"></input>
        <input className="signUp-input input" placeholder="Username"></input>
        <input
          className="signUp-input input"
          type="password"
          placeholder="Password"
        ></input>
        <input
          className="signUp-input input"
          type="password"
          placeholder="Password"
        ></input>
        <button className="signUp-button button">Sign Up</button>
      </form>
    </div>
  );
}
