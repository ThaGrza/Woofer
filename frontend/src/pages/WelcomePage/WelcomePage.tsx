import React from "react";
import Login from "../../components/login/Login";
import Banner from "../../components/banner/Banner";
import "./WelcomePage.css";

export default function WelcomePage() {
  return (
    <div className="welcomePage-container">
      <Banner />
      <Login />
    </div>
  );
}
