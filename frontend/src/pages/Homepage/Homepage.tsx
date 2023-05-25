import { useState } from "react";
import axios from "axios";
import "./Homepage.css";
import Navbar from "../../components/navbar/Navbar";
import SearchParks from "../../components/searchParks/SearchParks";
import Footer from "../../components/footer/Footer";
import ParksDisplay from "../../components/parksDisplay/ParksDisplay";

const Homepage = () => {
  const [location, setLocation] = useState("");

  const handleSearch = (value: string) => {
    setLocation(value);
  };

  return (
    <div className="homepage-container">
      <Navbar />
      <SearchParks onSearchChange={handleSearch} />
      <ParksDisplay name={location} />
      <Footer />
    </div>
  );
};

export default Homepage;
