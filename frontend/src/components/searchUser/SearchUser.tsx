import React, { useState } from "react";
import axios from "axios";
import "./SearchUser.css";

function SearchUser() {
  const [user, setUser] = useState("");
  const findUser = () => {
    axios.get("/user/" + user).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="search-user-container">
      <input
        placeholder="Find Other Woofers!"
        className="search-user-input"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      ></input>
      <button className="search-user-button" onClick={findUser}>
        Search
      </button>
    </div>
  );
}
export default SearchUser;
