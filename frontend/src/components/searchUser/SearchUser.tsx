import React, { useState } from "react";
import Axios from "axios";
import "./SearchUser.css";

function SearchUser() {
  const [user, setUser] = useState("");

  const findUser = () => {
    Axios.get("/user/" + user).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="search-user-container">
      <input
        placeholder="Search Users..."
        className="search-user-input"
        onChange={(e) => {
          setUser(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            findUser();
          }
        }}
      ></input>
    </div>
  );
}
export default SearchUser;
