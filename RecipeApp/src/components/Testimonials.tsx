import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="container-fluid mb-5 pb-5" style={{ backgroundColor: "black" }} id="testimonials">
      <div className="mx-auto w-70">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 inner-container" style={{ height: "100%" }}>
            <h2 className="section-title">
              What Our Client Say <span style={{ color: "orangered" }}>?</span>
            </h2>
            <div className="mb-4">
              <p className="text-white">
                We provide you with complete meal prep — which includes the prepackaged necessary ingredients for a divine dinner, as well as an easy-to-follow recipe guide in beautiful.
              </p>
            </div>
            <div className="row text-center">
              <div className="col-4">
                <motion.p
                  className="stats fs-3 fw-medium mb-0"
                  style={{ color: "orangered" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  15k+
                </motion.p>
                <p>Happy Customers</p>
              </div>
              <div className="col-4">
                <motion.p
                  className="stats fs-3 fw-medium mb-0"
                  style={{ color: "orangered" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  17+
                </motion.p>
                <p>Award Wins</p>
              </div>
              <div className="col-4">
                <motion.p
                  className="stats fs-3 fw-medium mb-0"
                  style={{ color: "orangered" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  30+
                </motion.p>
                <p>Food Menu</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="carousel-wrapper mt-5">
              <div
                id="testimonialCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="5000"
              >
                <div className="carousel-inner d-flex align-items-center pb-2">
                  <div className="carousel-item active">
                    <div className="row g-4">
                      <div className="col-12 col-md-6">
                        <div className="testimonial card px-4 p-5" style={{ height: "320px" }}>
                          <div className="d-flex align-items-center mb-3">
                            <img
                              src="https://picsum.photos/100"
                              className="rounded-circle me-3"
                              alt="Client"
                            />
                            <div>
                              <h5 className="mb-0">Yoni Zenwirth</h5>
                              <p className="rating fw-bold text-dark">
                                4.9 <span style={{ color: "orangered" }}>★</span>
                              </p>
                            </div>
                          </div>
                          <p>
                            "Your recipes are quick and easy to follow... Thanks for giving my family
                            the gift of a relaxed Mom and delicious food!"
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="testimonial card px-4 p-5" style={{ height: "320px" }}>
                          <div className="d-flex align-items-center mb-3">
                            <img
                              src="https://picsum.photos/101"
                              className="rounded-circle me-3"
                              alt="Client"
                            />
                            <div>
                              <h5 className="mb-0">Miriam Tatz</h5>
                              <p className="rating fw-bold text-dark">
                                4.8 <span style={{ color: "orangered" }}>★</span>
                              </p>
                            </div>
                          </div>
                          <p>"Wow! The chef meals hit home. It's a pleasure to face the pressure of what to shop."</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row g-4">
                      <div className="col-12 col-md-6">
                        <div className="testimonial card px-4 p-5" style={{ height: "320px" }}>
                          <div className="d-flex align-items-center mb-3">
                            <img
                              src="https://picsum.photos/102"
                              className="rounded-circle me-3"
                              alt="Client"
                            />
                            <div>
                              <h5 className="mb-0">John Doe</h5>
                              <p className="rating fw-bold text-dark">
                                4.7 <span style={{ color: "orangered" }}>★</span>
                              </p>
                            </div>
                          </div>
                          <p>"The meals are super delicious and easy to prepare. My family loves it!"</p>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="testimonial card px-4 p-5" style={{ height: "320px" }}>
                          <div className="d-flex align-items-center mb-3">
                            <img
                              src="https://picsum.photos/103"
                              className="rounded-circle me-3"
                              alt="Client"
                            />
                            <div>
                              <h5 className="mb-0">Jane Smith</h5>
                              <p className="rating fw-bold text-dark">
                                4.6 <span style={{ color: "orangered" }}>★</span>
                              </p>
                            </div>
                          </div>
                          <p>"Highly recommend these meals. Perfect for my busy schedule!"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <button
                    className="btn btn-dark me-2"
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    data-bs-slide="prev"
                  >
                    <i className="fas fa-arrow-left" style={{ color: "orangered", fontSize: "20px" }}></i>
                  </button>
                  <button
                    className="btn btn-dark"
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    data-bs-slide="next"
                  >
                    <i className="fas fa-arrow-right" style={{ color: "orangered", fontSize: "20px" }}></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
