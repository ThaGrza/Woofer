import React, { useState } from "react";
import Axios from "axios";
import "./Homepage.css";
import Navbar from "../../components/navbar/Navbar";
import SearchParks from "../../components/searchParks/SearchParks";
import Footer from "../../components/footer/Footer";
import SearchUser from "../../components/searchUser/SearchUser";

export default function Homepage() {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
	Axios.get("/getParks").then((res) => {
	console.log(res.data.message);
	});
  };

  return (
    <div className="homepage-container">
      <Navbar />
      <SearchParks onSearchChange={handleSearch} />
      <Footer />
    </div>
  );
}
