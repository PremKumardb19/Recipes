import onion from "../assets/onion.jpg";
import butter from "../assets/butter.jpg";
import corianderIn from "../assets/corianderIn.jpg";
import mushroom from "../assets/mushroom.jpg";
import tomato from "../assets/tomato.jpg";

const images = [onion, butter, corianderIn, mushroom, tomato];

const IngredientsSection = ({ ingredients }) => {
  return (
    <div className="container my-5">
      <h1
        className="text-center mb-5 display-4 fw-bold"
        style={{
          color: "orangered",
        }}
      >
        Ingredients
      </h1>
      <div className="row justify-content-center g-4">
        {ingredients &&
          ingredients.map((ingredient, index) => (
            <div
              className="col-12 col-md-5 col-lg-4"
              key={ingredient.id}
              style={{ perspective: "1000px" }}
            >
              <div
                className="card h-100 shadow-lg"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.5s ease, box-shadow 0.5s ease",
                  animation: "fadeIn 1s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "rotateY(5deg) scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 30px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "rotateY(0deg) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 15px rgba(0, 0, 0, 0.1)";
                }}
              >
                <img
                  src={images[index % images.length]}
                  alt={ingredient.name}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    animation: "zoomIn 0.8s ease-in-out",
                  }}
                />
                <div className="card-body text-center">
                  <h3
                    className="card-title  fw-bold"
                    style={{ fontSize: "1.5rem", color: "orangered" }}
                  >
                    {ingredient.name}
                  </h3>
                  <p className="card-text text-secondary fw-medium mb-2">
                    Aisle: {ingredient.aisle}
                  </p>
                  <p className="card-text text-secondary fw-medium mb-2">
                    Consistency: {ingredient.consistency}
                  </p>
                  <p className="card-text text-secondary fw-medium">
                    Amount: {ingredient.amount} {ingredient.unit}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default IngredientsSection;
