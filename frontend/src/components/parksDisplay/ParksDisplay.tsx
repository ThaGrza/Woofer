import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./ParksDisplay.css";

interface Props {
    name: string;
    address: string;
    rating: number;
}

const ParksDisplay = ({ name, address,rating }: Props) => {
    return (
            <div className="parks-container">
            <div className="park">
            <h4 className="park-name">{name}</h4>
            <p className="park-rating">{rating}</p>
            <p className="park-address">{address}</p>
            </div>
            </div>
           );
};

export default ParksDisplay;
