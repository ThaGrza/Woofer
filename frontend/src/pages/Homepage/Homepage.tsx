import React, { useState } from "react";
import "./Homepage.css";
import Navbar from "../../components/navbar/Navbar";
import SearchParks from "../../components/searchParks/SearchParks";
import Footer from "../../components/footer/Footer";
import SearchUser from "../../components/searchUser/SearchUser";

export default function Homepage() {
  const [location, setLocation] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div className="homepage-container">
      <Navbar />
      <SearchParks />
      <Footer />
    </div>
  );
}
