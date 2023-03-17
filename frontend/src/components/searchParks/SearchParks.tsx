import React, { useState } from "react";
import Axios from "axios";
import ParksDisplay from "../parksDisplay/ParksDisplay";
import "./SearchParks.css";

function SearchParks() {
  const [location, setLocation] = useState("NH");
  const [searchActive, setSearchActive] = useState(false);

  const handleChange = (e: any) => {
    Axios.post("/parkLocation", location).then((res) => {});
    Axios.get("/getParks").then((res) => {
      //! Map response data to parksDisplay comp
      console.log(res.data.message);
    });
  };

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
      {searchActive ? (
        <div className="parks-container">{<ParksDisplay />}</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default SearchParks;
