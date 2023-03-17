import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./ParksDisplay.css";

interface Park {
  name: string;
  review: number;
  address: string;
  hours: number;
}

const ParksDisplay = () => {
  return (
    // ! ACTUAL CODE
    // <div className="parks-container">
    //   <p className="park-title">{props.name}</p>
    //   <p className="park-item">{props.review}</p>
    //   <p className="park-item">{props.name}</p>
    //   <p className="park-item">{props.hours}</p>
    //   <img alt={props.name} className="park-image">
    //     Image
    //   </img>
    // </div>
    // ! TEST CODE
    <div className="parks-container">
      <p>hi</p>
    </div>
  );
};

export default ParksDisplay;
