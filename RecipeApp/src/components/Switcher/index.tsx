import Instructions from "../Instructions";
import IngredientsSection from "../IngredientsSection";
import { Ingredient } from "../IngredientsSection";
import { useDataStore } from "../../store/DataStore";

interface SwitcherProps {
  instructions: string | null;
  ingredients: Ingredient[] | null;
}

const Switcher = ({ instructions, ingredients }: SwitcherProps) => {
  const { currentSwitchOn, togglecurrentSwitchOn } = useDataStore();

  return (
    <div className="container-fluid mt-5">
      <div className="col-md-12 d-flex justify-content-between">
        <span
          className={`col-6 text-center py-3 ptr switcher ${
            currentSwitchOn === "ingredients" ? "show" : "text-dark fw-normal not-show"
          }`}
          onClick={() => togglecurrentSwitchOn("ingredients")}
        >
          Ingredients
        </span>
        <span
          className={`col-6 text-center py-3 ptr switcher ${
            currentSwitchOn === "instructions" ? "show" : "text-dark fw-normal not-show"
          }`}
          onClick={() => togglecurrentSwitchOn("instructions")}
        >
          Instructions
        </span>
      </div>
      <div className="container-fluid">
        {currentSwitchOn === "ingredients" && ingredients ? (
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
