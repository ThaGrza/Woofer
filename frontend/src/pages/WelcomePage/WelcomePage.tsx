import React from "react";
import Login from "../../components/login/Login";
import Banner from "../../components/banner/Banner";
import "./WelcomePage.css";
// TODO: Change placeholders to images and final descriptions for app showcase
export default function WelcomePage() {
  return (
    <div className="welcomePage-container">
      <h1 className="welcome">Welcome to Woofer!</h1>
      <p className="welcome-desc">
        Woofer is the premier place for all dog park activites. Find parks near
        you, monitor and see how busy they are, or if woofers you know visit
        often! From finding new friends to making play dates at your favorite
        parks, Woofer is the answer. Start Woofin!
      </p>
    </div>
  );
}
