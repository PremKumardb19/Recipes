import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";



const Explore: React.FC = () => {
  console.log("Explore rendered");
  return (
    <div>
      <Navbar />
      <SearchBar />
    </div>
  );
};

export default Explore;
