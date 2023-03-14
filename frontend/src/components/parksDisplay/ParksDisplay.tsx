import React, { useState } from "react";
import Axios from "axios";
import "./ParksDisplay.css";
import Park from "../park/Park";

interface Location {
  lat: number;
  long: number;
}
interface Park {
  name: string;
  location: string;
}

export default function ParksDisplay() {
  const [valid, setValid] = useState(false);
  const [name, setName] = useState("");
  const [miles, setMiles] = useState(0);
  const [location, setLocation] = useState(0);

  Axios.get("/googleTest").then((res) => {
    alert(res.data.message);
  });

  return (
    <div className="parks-container">
      {/* map through res.data parks */}
      <p>Hi.</p>
    </div>
  );
}
