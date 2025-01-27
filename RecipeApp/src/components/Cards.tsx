import { useNavigate } from "react-router-dom";
import cappucino from "../assets/cappucino.jpg";
import burger from "../assets/burger.jpg";
import chicken65 from "../assets/chicken65.jpg";
import coffee from "../assets/coffee.jpg";
import icecream from "../assets/icecream.jpg";
import pizza from "../assets/pizza.jpg";
import tamilfood from "../assets/tamilfood.jpg";
import Spinner from "react-bootstrap/Spinner";

interface Result {
  id: string;
  title: string;
  extendedIngredients?: string[];
  image: string;
}

interface CardsProps {
  results: Result[] | null;
  redirectToInfoPage: (id: string) => void;
}

const Cards: React.FC<CardsProps> = ({ results, redirectToInfoPage }) => {
  const images = [chicken65, cappucino, burger, coffee, pizza, tamilfood, icecream];

  return (
    <>
      {!results ? (
        <div className="container-fluid d-flex justify-content-center align-items-center mt-3">
          <Spinner animation="border" variant="danger" />
          <span className="ms-2">Loading...</span>
        </div>
      ) : results.length === 0 ? (
        <div style={{ marginTop: "20px", color: "#ff6347" }}>
          <i className="fa fa-search" style={{ fontSize: "30px" }} /> No results found.
        </div>
      ) : (
        <div className="row justify-content-center mt-4">
          {results.map((result, index) => (
            <div
              className="card mx-3 mb-4"
              key={result.id}
              style={{
                maxWidth: "280px",
                borderRadius: "20px",
                overflow: "hidden",
                backgroundColor: "#ffffff",
                color: "#333",
                boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onClick={() => redirectToInfoPage(result.id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 12px 25px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 8px 15px rgba(0, 0, 0, 0.1)";
              }}
            >
              <img
                src={
                  result.extendedIngredients ||
                  results.length === 4 ||
                  results.length === 20
                    ? result.image
                    : images[index % images.length]
                }
                alt={result.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderBottom: "5px solid #ff6347",
                }}
              />
              <div className="card-body" style={{ padding: "15px 20px" }}>
                <h5
                  className="card-title text-center"
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    margin: "0 0 10px",
                    color: "#ff6347",
                  }}
                >
                  {result.title.length < 40
                    ? result.title
                    : result.title.substring(0, 35) + "..."}
                </h5>
                <div
                  style={{
                    background: "linear-gradient(90deg, #ff6347, #ffa07a)",
                    height: "5px",
                    width: "50px",
                    margin: "10px auto",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Cards;
