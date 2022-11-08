import React, { useState } from "react";
import axios from "axios";
import "./SearchParks.css";

function SearchParks() {
  const [location, setLocation] = useState("");

  const searchValue = (e: any) => {
    console.log(location);
  };

  return (
    <div className="search-container">
      <input
        placeholder="Enter Your Town / City"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        title="Enter Your Town / City"
        className="search-input"
      ></input>
      <button className="search-parks-button" onClick={searchValue}>
        Search
      </button>
    </div>
  );
}

export default SearchParks;
