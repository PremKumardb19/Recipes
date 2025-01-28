import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { fetchData } from "../utils/GetterFns";
import { useParams } from "react-router-dom";
import InfoHero from "../components/InfoHero";
import Switcher from "../components/Switcher";
import SimilarSection from "../components/SimilarSections";

interface Ingredient {
  name: string;
  amount: number;
  aisle: string;
  consistency: string;
  unit: string;
}

interface RecipeDetails {
  instructions: string;
  extendedIngredients: Ingredient[];
}

const Info = ({ isLogged, setIsLogged }: { isLogged: boolean; setIsLogged: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [details, setDetails] = useState<RecipeDetails | null>(null);
  const [similar, setSimilar] = useState<any | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetchData(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition-true&apiKey=${import.meta.env.VITE_API_KEY}`
      );
      const sim = await fetchData(
        `https://api.spoonacular.com/recipes/${id}/similar?number=8&limitLicense=true&apiKey=${import.meta.env.VITE_API_KEY}`
      );

      // Transform the extendedIngredients to match the Ingredient type
      const transformedIngredients = data.extendedIngredients.map((ingredient: any) => ({
        name: ingredient.name,
        amount: ingredient.amount,
        aisle: ingredient.aisle || '',
        consistency: ingredient.consistency || '',
        unit: ingredient.unit || '',
      }));

      setDetails({
        ...data,
        extendedIngredients: transformedIngredients,
      });

      setSimilar(sim);
    };
    fetchDetails();
  }, [id]);

  return (
    <div>
      <Navbar setIsLogged={setIsLogged} />
      <InfoHero details={details} />
      {details && <Switcher instructions={details.instructions} ingredients={details.extendedIngredients} />}
      <SimilarSection similar={similar} />
    </div>
  );
};

export default Info;
