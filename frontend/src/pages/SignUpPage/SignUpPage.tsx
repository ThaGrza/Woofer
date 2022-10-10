import React from "react";
import SignUp from "../../components/signUp/SignUp";
import Banner from "../../components/banner/Banner";

export default function SignUpPage() {
  return (
    <div className="signuppage-container">
      <Banner />
      <SignUp />
    </div>
  );
}
