import { useState, useEffect } from "react";
import { fetchData } from "../../utils/GetterFns";
import { useNavigate } from "react-router-dom";
import Cards from "../Cards";
import Spinner from "react-bootstrap/Spinner";
import { useDataStore } from "../../store/DataStore";
import { SearchContainer,SearchBarContainer, SearchIcon,SearchInput } from "./styles";

// interface Result {
//   id: string;
//   title: string;
//   image: string;
// }

interface Recipe {
  id: number;
  title: string;
  imageUrl: string;
}

const SearchBar = () => {
  const {search,setSearch,results,setResults,loading,setLoading}=useDataStore()
  const navigate = useNavigate();

  const fetchResults = async () => {
    try {
      setLoading(true);
      const data = await fetchData(
        `https://api.spoonacular.com/recipes/complexSearch?query=${search}&number=20&apiKey=${import.meta.env.VITE_API_KEY}`
      );
      const mappedResults = data.results.map((recipe: Recipe) => ({
        id: recipe.id.toString(),
        title: recipe.title,
        image: recipe.imageUrl,
      }));
      setResults(mappedResults);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchRandomRecipes = async () => {
      try {
        setLoading(true);
        const data = await fetchData(
          `https://api.spoonacular.com/recipes/random?number=20&apiKey=${import.meta.env.VITE_API_KEY}`
        );
        const mappedResults = data.recipes.map((recipe: Recipe) => ({
          id: recipe.id.toString(),
          title: recipe.title,
          image: recipe.imageUrl,
        }));
        setResults(mappedResults);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRandomRecipes();
  }, []);

  const redirectToInfoPage = (id: string) => {
    navigate(`/info/${id}`);
  };

  return (
    <SearchContainer
      className="container-fluid"
      
    >
      <SearchBarContainer
        
      >
        <SearchIcon
          className="fa fa-search"
          
          onClick={fetchResults}
        />
        <SearchInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? fetchResults() : null)}
          className="form-control"
         
          onFocus={(e) => (e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)")}
          onBlur={(e) => (e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)")}
          placeholder="Search for recipes..."
        />
      </SearchBarContainer>
      {loading && (
        <div className="container-fluid d-flex justify-content-center align-items-center mt-3">
          <Spinner animation="border" variant="danger" />
          <span className="ms-2">Loading...</span>
        </div>
      )}
      {!loading && <Cards results={results} redirectToInfoPage={redirectToInfoPage} />}
    </SearchContainer>
  );
};

export default SearchBar;
