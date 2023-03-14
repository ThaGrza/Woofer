import React, { useState } from "react";
import Axios from "axios";
import ParksDisplay from "../parksDisplay/ParksDisplay";
import "./SearchParks.css";

function SearchParks() {
  const [location, setLocation] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  // ! Display Parks component
  const handleChange = (e: any) => {
    ParksDisplay();
  };

  // ! e.key becomes undefined when passed here.
  // const handleKeyDown = (e: any) => {
  //   console.log("Logged from handleKeyDown: ", e.key);
  //   if (e.key === "Enter") {
  //     console.log("ITS WORKING BOYO");
  //   }
  // };

  return (
    <div className="search-parks-container">
      <div className="search-container">
        <input
          placeholder="Search by zip-code or city..."
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleChange(e);
              setSearchActive(true);
            }
          }}
          title="Enter Your Town / City"
          className="search-input"
        ></input>
        <button className="search-parks-button" onClick={handleChange}>
          Search
        </button>
      </div>
      {/* {searchActive ? <ParksDisplay /> : <div></div>} */}
    </div>
  );
}

export default SearchParks;
