import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  let loggedIn = true;
  return (
    <div className="nav-container">
      <Link to="/" className="nav-link title">
        Woofer
      </Link>
      <Link to="/" className="nav-link loggin">
        {loggedIn ? "Profile" : "Sign In"}
      </Link>
    </div>
  );
}

export default Navbar;
