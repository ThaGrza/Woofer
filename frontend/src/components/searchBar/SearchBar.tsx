import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [location, setLocation] = useState("");

  const searchValue = (e: any) => {
    console.log(location);
  };

  return (
    <div className="search-container">
      <input
        placeholder="Enter Your City"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        title="Enter Your City"
        className="search-input"
      ></input>
      <button className="search-bar" onClick={searchValue}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
