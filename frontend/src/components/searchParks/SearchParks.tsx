import { ChangeEvent, useState } from "react";
import "./SearchParks.css";

interface Location {
  onSearchChange: (value: string) => void;
}

const SearchParks = ({ onSearchChange }: Location) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = () => {
    onSearchChange(searchValue);
  };

  return (
    <div className="search-parks-container">
      <div role="search" className="search-container">
        <input
          placeholder="Search by zip-code or city..."
          title="Enter Your Town / City"
          className="search-input"
          type="text"
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        ></input>
        <button className="search-button" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchParks;
