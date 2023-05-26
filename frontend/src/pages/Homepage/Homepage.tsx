import { useState } from "react";
import "./Homepage.css";
import Navbar from "../../components/navbar/Navbar";
import SearchParks from "../../components/searchParks/SearchParks";
import Footer from "../../components/footer/Footer";
import ParksDisplay from "../../components/parksDisplay/ParksDisplay";
import ParksApi from "../../components/parksApi/ParksApi";

const Homepage = () => {
  const [location, setLocation] = useState("");

  const handleSearch = (value: string) => {
    setLocation(value);
    getData();
  };

  const getData = () => {
      ParksApi(location).then(function (res){
          console.log(res);
      })
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
