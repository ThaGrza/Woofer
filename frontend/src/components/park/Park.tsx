import React from "react";
import "./Park.css";

interface Park {
  name: string;
  location: number;
  miles: number;
}
// ! I think this isn't even being used.
export default function ParkCard(props: Park) {
  return (
    <div className="park-container">
      <h1 className="park-title">{props.name}</h1>
      <p className="park-title">{props.location}</p>
    </div>
  );
}
