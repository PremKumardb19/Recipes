import React from "react";
import { Spinner } from "react-bootstrap";

const InfoHero = ({ details }) => {
  if (!details) {
    return (
      <div className="container-fluid d-flex justify-content-center align-items-center mt-3">
        <Spinner animation="border" variant="danger" />
        <span className="ms-2">Loading...</span>
      </div>
    );
  }

  return (
    <div
      className="container-fluid py-5 position-relative"
      style={{
        background: "linear-gradient(135deg, #fdfcfb, #e2d1c3)",
        overflow: "hidden",
      }}
    >
      <div
        className="row justify-content-center text-center mb-5 position-relative"
        style={{ zIndex: 2 }}
      >
        <div className="col-12">
          <h5
            className="fw-bold display-5 text-danger animate__animated animate__fadeInDown"
            style={{
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)",
            }}
          >
            {details.title || "Unknown Title"}
          </h5>
        </div>
      </div>

      <div className="row d-flex justify-content-center align-items-center position-relative">
        <div className="col-md-5 mb-4 mb-md-0">
          <div
            className="position-relative rounded overflow-hidden shadow-lg"
            style={{
              borderRadius: "20px",
              transition: "transform 0.5s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={details.image || "https://via.placeholder.com/350"}
              alt={details.title || "Image"}
              className="img-fluid rounded shadow"
              style={{
                height: "350px",
                objectFit: "cover",
                animation: "zoomIn 0.8s ease-in-out",
              }}
            />
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))",
              }}
            ></div>
          </div>
        </div>

        <div className="col-md-6">
          <div
            className="card border-0 shadow-lg bg-light animate__animated animate__fadeInUp"
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              animationDelay: "0.2s",
            }}
          >
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="fs-5 fw-bold text-muted">
                  ⏱ Cooking Time: {details.readyInMinutes || "N/A"} Minutes
                </span>
                <div className="d-flex gap-2">
                  {details.vegetarian ? (
                    <span className="badge bg-success text-white">Veggie</span>
                  ) : (
                    <span className="badge bg-warning text-white">Non Veg</span>
                  )}
                  {details.sustainable ? (
                    <span className="badge bg-primary text-white">Sustainable</span>
                  ) : (
                    <span className="badge bg-info text-white">Fragile</span>
                  )}
                  {details.veryPopular ? (
                    <span className="badge bg-warning text-white">Popular</span>
                  ) : (
                    <span className="badge bg-danger text-white">New</span>
                  )}
                </div>
              </div>

              <ul className="list-group list-group-flush">
                {details.dishTypes && (
                  <li className="list-group-item">
                    <strong>🍽 Dish Types:</strong> {details.dishTypes.join(", ")}
                  </li>
                )}
                {details.cuisines && (
                  <li className="list-group-item">
                    <strong>🌍 Cuisines:</strong>{" "}
                    {details.cuisines.length ? details.cuisines.join(", ") : "South Indian"}
                  </li>
                )}
                {details.diets && (
                  <li className="list-group-item">
                    <strong>🥗 Diets:</strong>{" "}
                    {details.diets.length ? details.diets.join(", ") : "Athletic"}
                  </li>
                )}
                {details.servings && (
                  <li className="list-group-item">
                    <strong>👨‍👩‍👧‍👦 Servings:</strong> {details.servings}
                  </li>
                )}
                {details.pricePerServing && (
                  <li className="list-group-item">
                    <strong>💵 Price:</strong> ${details.pricePerServing.toFixed(2)} / Serving
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="position-absolute top-0 start-50 translate-middle w-100"
        style={{
          zIndex: 1,
          opacity: 0.1,
          transform: "rotate(20deg)",
        }}
      >
        <img
          src={details.image || "https://via.placeholder.com/150"}
          alt="Floating Background"
          className="img-fluid"
          style={{ width: "150%" }}
        />
      </div>
    </div>
  );
};

export default InfoHero;
