import { useNavigate } from "react-router-dom";
import cappucino from "../../assets/cappucino.jpg";
import burger from "../../assets/burger.jpg";
import chicken65 from "../../assets/chicken65.jpg";
import coffee from "../../assets/coffee.jpg";
import icecream from "../../assets/icecream.jpg";
import pizza from "../../assets/pizza.jpg";
import tamilfood from "../../assets/tamilfood.jpg";
import Spinner from "react-bootstrap/Spinner";
import { CardBody, CardImg, CardItem, CardLine, CardTitle, SearchDiv, SearchIcon } from "./styles";
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
  if(results)
  console.log("in cards",results.length)
  return (
    <>
      {!results ? (
        <div className="container-fluid d-flex justify-content-center align-items-center mt-3">
          <Spinner animation="border" variant="danger" />
          <span className="ms-2">Loading...</span>
        </div>
      ) : results.length === 0 ? (
        <SearchDiv>
          <SearchIcon className="fa fa-search"  /> No results found.
        </SearchDiv>
      ) : (
        <div className="row justify-content-center mt-4">
          {results.map((result, index) => (
            <CardItem
              className="card mx-3 mb-4"
              key={result.id}
              
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
              <CardImg
                src={
                  result.image ? result.image
                    : images[index % images.length]
                }
                alt={result.title}
                
              />
              <CardBody className="card-body" >
                <CardTitle
                  className="card-title text-center"
                  
                >
                  {result.title.length < 40
                    ? result.title
                    : result.title.substring(0, 35) + "..."}
                </CardTitle>
                <CardLine
                 
                ></CardLine>
              </CardBody>
            </CardItem>
          ))}
        </div>
      )}
    </>
  );
};

export default Cards;