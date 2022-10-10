import React from "react";
import { useState } from "react";
import "./App.css";
import Homepage from "../src/pages/Homepage/Homepage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  if (isLoggedIn) {
    return <Homepage />;
  }
  return <WelcomePage />;
}
