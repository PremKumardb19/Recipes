import { motion } from "framer-motion";
import logo from "../../assets/chefLogo.jpg";
import coriander from "../../assets/coriander.jpg";
import dish from "../../assets/food-cropped-final.png";
import { CertificationLogo, CertificationText } from "./styles";

const DeliverySection = () => {
  return (
    <div className="container-fluid mt-0 mb-5" id="delivery">
      <motion.img
        src={coriander}
        alt="Coriander"
        className="delivery-img top-0 start-0 m-0 p-0"
        id="delivery"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="dish-container container-fluid d-flex flex-column flex-md-row align-items-center mt-0">
        <motion.img
          src={dish}
          className="dish-img w-50 "
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />

        <div className="card-body text-center mt-5 w-50">
          <motion.h1
            className="card-title fs-1 fw-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            We Deliver Anywhere across the Globe
          </motion.h1>
          <motion.p
            className="para card-content mt-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Each fresh meal is perfectly sized for 1 person to enjoy in 1
            sitting. Our fully prepared meals are delivered fresh and ready to
            eat in 3 minutes.
          </motion.p>

          <motion.div
            className="certification mt-4 d-flex flex-row justify-content-center align-items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <CertificationText className="mt-2" >
              Certified By:
            </CertificationText>
            <CertificationLogo
              src={logo}
              alt="Certification Logo"
              className="ms-2"
              
            />
          </motion.div>

          <div className="btn-grp d-flex justify-content-center mt-2">
            <motion.button
              className="btn py-2 rounded shadow text-white me-sm-0 me-4"
              style={{ backgroundColor: "orangered" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Contact Us
            </motion.button>
            <motion.button
              className="btn btn-outline-success"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Visit Now
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverySection;
