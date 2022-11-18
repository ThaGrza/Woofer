import React from "react";
import Login from "../../components/login/Login";
import Banner from "../../components/banner/Banner";

const LoginPage = () => {
  return (
    <div className="loginPage-container">
      <Banner />
      <Login />
    </div>
  );
};

export default LoginPage;
