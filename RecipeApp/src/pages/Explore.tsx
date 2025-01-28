import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

interface ExploreProps {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Explore: React.FC<ExploreProps> = ({ isLogged, setIsLogged }) => {
  console.log("Explore rendered");
  return (
    <div>
      <Navbar setIsLogged={setIsLogged} />
      <SearchBar />
    </div>
  );
};

export default Explore;
