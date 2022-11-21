import React from "react";
import { Register } from "../../components/register/Register";
import Banner from "../../components/banner/Banner";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signUpPage-container">
      <Banner />
      <Register />
    </div>
  );
};
export default SignUpPage;
