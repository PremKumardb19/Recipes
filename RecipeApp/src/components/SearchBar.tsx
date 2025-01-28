import { useState, useEffect } from "react";
import { fetchData } from "../utils/GetterFns";
import { useNavigate } from "react-router-dom";
import Cards from "./Cards";
import Spinner from "react-bootstrap/Spinner";

interface Result {
  id: string;
  title: string;
  image: string;
}

interface Recipe {
  id: number;
  title: string;
  imageUrl: string;
}

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Result[] | null>(null);
  const [loading, setLoading] = useState(false);
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
    <div
      className="container-fluid"
      style={{
        background: "linear-gradient(to bottom right, #ffffff, #f7f7f7)",
        minHeight: "100vh",
        paddingTop: "30px",
        paddingBottom: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "400px",
          maxWidth: "90%",
        }}
      >
        <i
          className="fa fa-search"
          style={{
            position: "absolute",
            top: "50%",
            left: "15px",
            transform: "translateY(-50%)",
            color: "#ff6347",
            fontSize: "20px",
          }}
          onClick={fetchResults}
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? fetchResults() : null)}
          className="form-control"
          style={{
            backgroundColor: "#ffffff",
            color: "#333",
            border: "1px solid #ff6347",
            borderRadius: "25px",
            padding: "12px 45px",
            fontSize: "16px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s",
            width: "100%",
          }}
          onFocus={(e) => (e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)")}
          onBlur={(e) => (e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)")}
          placeholder="Search for recipes..."
        />
      </div>
      {loading && (
        <div className="container-fluid d-flex justify-content-center align-items-center mt-3">
          <Spinner animation="border" variant="danger" />
          <span className="ms-2">Loading...</span>
        </div>
      )}
      {!loading && <Cards results={results} redirectToInfoPage={redirectToInfoPage} />}
    </div>
  );
};

export default SearchBar;
