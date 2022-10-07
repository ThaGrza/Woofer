import React from "react";
import { useState } from "react";
import "./App.css";
import Homepage from "../src/pages/Homepage/Homepage";
import Welcome from "../src/pages/Welcome/Welcome";

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  if (isLoggedIn) {
    return <Homepage />;
  }
  return <Welcome />;
}
