import React, { useEffect, useState } from "react";
import Axios from "axios";
import Star from "../starRating/Stars";
import "./ParksDisplay.css";

interface Props {
  name: string;
  address: string;
  rating: number;
  image: string;
}

const ParksDisplay = ({ name, address, rating }: Props) => {
  // call api from this COMP to correctly get images
  return (
    <div className="park">
      <h4 className="park-name">{name}</h4>
      <Star rating={rating} />
      <p className="park-address">{address}</p>
      {/* <img className="park-image" alt={name} src={image} /> */}
    </div>
  );
};

export default ParksDisplay;

// ! Change image Prop to something else for photo_reference
// ! Make and call new backend API route for get images
// ! Display image in Comp
