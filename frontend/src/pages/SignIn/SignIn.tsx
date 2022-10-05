import react from "react";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="sign-in-container">
      <h1 className="signin-header">Woofer</h1>
      <p className="intro-text">
        Welcome to Woofer the premier social media and dog park buddy platform.
      </p>
      <input className="username-text" placeholder="Username"></input>
      <input className="password-text" placeholder="Password"></input>
      <button className="signin-button">Login</button>
      <button className="signup-button">Sign Up</button>
      <button className="forgot-password-button">Forgot Password?</button>
    </div>
  );
}
export default SignIn;
