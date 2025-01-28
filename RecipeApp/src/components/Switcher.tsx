import { useState } from "react";
import Instructions from "./Instructions";
import IngredientsSection from "./IngredientsSection";
import { Ingredient } from "./IngredientsSection"

interface SwitcherProps {
  instructions: string | null;
  ingredients: Ingredient[] | null;  
}

const Switcher = ({ instructions, ingredients }: SwitcherProps) => {
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div className="container-fluid mt-5">
      <div className="col-md-12 d-flex justify-content-between">
        <span
          className={`col-6 text-center py-3 ptr switcher ${show ? "show" : "text-dark fw-normal not-show"}`}
          onClick={toggleShow}
        >
          Ingredients
        </span>
        <span
          className={`col-6 text-center py-3 ptr switcher ${show ? "text-dark fw-normal not-show" : "show"}`}
          onClick={toggleShow}
        >
          Instructions
        </span>
      </div>
      <div className="container-fluid">
        {show && ingredients ? (
          <IngredientsSection ingredients={ingredients} />
        ) : instructions ? (
          <Instructions instructions={instructions} />
        ) : (
          <div className="w-100 text-center fs-5 fw-medium my-2">
            No instructions to show
          </div>
        )}
      </div>
    </div>
  );
};

export default Switcher;
