import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./ParksDisplay.css";

interface Props {
  name: string;
}

const ParksDisplay = ({ name }: Props) => {
  return (
    <div className="parks-container">
      <p>Location Searched: {name}</p>
    </div>
  );
};

export default ParksDisplay;
