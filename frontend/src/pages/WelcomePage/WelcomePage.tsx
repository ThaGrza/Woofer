import React from "react";
import Loggin from "../../components/loggin/Loggin";
import Banner from "../../components/banner/Banner";
import "./WelcomePage.css";

export default function WelcomePage() {
  return (
    <div className="welcomePage-container">
      <Banner />
      <Loggin />
    </div>
  );
}
