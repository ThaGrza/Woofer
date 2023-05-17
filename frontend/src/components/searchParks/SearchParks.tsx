import React, { useState } from "react";
import ParksDisplay from "../parksDisplay/ParksDisplay";
import "./SearchParks.css";

function SearchParks(props: any) {
  const [searchActive, setSearchActive] = useState(false);

// moved to homepage.tsx
  const handleChange = (e: any) => {
      //! Map response data to parksDisplay comp
  };

  return (
    <div className="search-parks-container">
      <div className="search-container">
        <input
          placeholder="Search by zip-code or city..."
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
