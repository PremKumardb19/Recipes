import { motion } from "framer-motion";

const WhySection = () => {
  return (
    <div
      className="container-fluid mb-5 py-5"
      style={{
        backgroundColor: "black",
      }}
      id="why"
    >
      <div className="container text-center">
        <h2 className="text-white fs-1 fw-bold mb-4">Why Gusto Meals</h2>
        <div className="row">
          {[
            { icon: "fa-clock", text: "Easy & Convenient" },
            { icon: "fa-apple-alt", text: "Nutritious & Healthy" },
            { icon: "fa-dollar-sign", text: "Affordable Meals" },
            { icon: "fa-cogs", text: "Customizable Plans" },
            { icon: "fa-truck", text: "Fast Delivery" },
            { icon: "fa-smile", text: "Great Taste" },
          ].map((item, index) => (
            <motion.div
              className="col-md-4 mb-4"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
                ease: "easeOut",
              }}
              viewport={{ amount: 0.2 }}
            >
              <div
                className="d-flex flex-column align-items-center text-center"
                style={{ gap: "10px" }}
              >
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    height: "70px",
                    width: "70px",
                    backgroundColor: "white",
                    color: "orangered",
                  }}
                >
                  <i className={`fa ${item.icon} fs-4`}></i>
                </div>
                <p className="text-white fs-5">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhySection;
