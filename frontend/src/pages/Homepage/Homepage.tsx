import React, { useState } from "react";
import "./Homepage.css";
import Navbar from "../../components/navbar/Navbar";
import SearchParks from "../../components/searchParks/SearchParks";
import Footer from "../../components/footer/Footer";
import Feed from "../../components/feed/Feed";

export default function Homepage(props: any) {
  return (
    <div className="homepage-container">
      <Navbar />
      <SearchParks />
      <Feed />
      <Footer />
    </div>
  );
}
