import { useState, useEffect } from "react";
import Cards from "../Cards";
import { fetchData } from "../../utils/GetterFns";
import { Link, useNavigate } from "react-router-dom";
import { useDataStore } from "../../store/DataStore";
import { FavMealsButton } from "./styles";

const FavMeals = () => {
  const {loading,setLoading,TopPicks:results,setTopPicks:setResults}=useDataStore()
  const navigate = useNavigate();

  const redirectToInfoPage = (id: any) => {
    navigate(`/info/${id}`);
  };

  useEffect(() => {
    const fetchRandomRecipes = async () => {
      try {
        setLoading(true);
        const data = await fetchData(
          `https://api.spoonacular.com/recipes/random?number=4&apiKey=${import.meta.env.VITE_API_KEY}`
        );
        setResults(data.recipes || []);
        console.log("top recipes",data.recipes);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomRecipes();
  }, []);

  return (
    <div className="contiainer-fluid w-100 px-0 mx-0 py-4 mt-2" id="fav">
    <h1 className="fs-1 fw-bold text-center mt-0 mb-3 d-flex flex-column justify-content-center">Top Picks</h1>
      {loading ? (
        <p className="text-center mt-5 fs-5">Loading...</p>
      ) : results.length > 0 ? (
        <>
         <Cards results={results} redirectToInfoPage={redirectToInfoPage} />
        <div className="d-flex justify-content-center mt-3">
        <FavMealsButton className="rounded px-3 py-3 text-white" ><Link to="/explore" className="text-decoration-none text-white">View Menu</Link></FavMealsButton>
        </div>
        </>
      ) : (
        <p className="text-center mt-5 fs-5">No results found</p>
      )}
    </div>
  );
};

export default FavMeals;
