import React from "react";
import { Link } from "react-router-dom";
import SearchUser from "../searchUser/SearchUser";
import "./Navbar.css";

function Navbar() {
  let loggedIn = true;
  return (
    <div className="nav-container">
      <Link to="/" className="nav-link title">
        Woofer
      </Link>
      <Link to="/profile" className="nav-link login">
        {loggedIn ? "Profile" : "Sign In"}
      </Link>
    </div>
  );
}

export default Navbar;
