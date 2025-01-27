import { useState } from "react";
import Instructions from "./Instructions";
import IngredientsSection from "./IngredientsSection";

const Switcher = ({ instructions, ingredients }) =>{
  const [show, setShow] = useState(true);
  const styles={
    backgroundImage:"linear-gradient(to right top, #f0630b, #ef5e0e, #ee5810, #ed5213,rgb(255, 67, 4))" 
      
  }
  const toggleShow = () => {
    setShow((show) => !show);
    
  };

  return (
    <div className="container-fluid mt-5 ">
      <div className="col-md-12 d-flex justify-content-between" 
      
      >
        <span
          className={`col-6 text-center py-3 ptr switcher ${show?"show":"text-dark fw-normal not-show"}`}
          onClick={toggleShow}
        >
          Ingredients
        </span>
        <span
          className={`col-6 text-center py-3 ptr switcher ${show?"text-dark fw-normal not-show":"show"}`}
          onClick={toggleShow}
                >
          Instructions
        </span>
      </div>
      <div className="container-fluid">
        {show && ingredients ? (
          <IngredientsSection ingredients={ingredients} />
        ) :instructions? (
          <Instructions instructions={instructions} />
        ):(
          <div className="w-100 text-center fs-5 fw-medium my-2">
          No instructions to show
          </div>
        )}
      </div>
    </div>
  );
};

export default Switcher;
