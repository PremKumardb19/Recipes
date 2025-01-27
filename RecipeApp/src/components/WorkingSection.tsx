import { motion } from "framer-motion";
import cover1 from "../assets/c1.png";
import cover2 from "../assets/c2.png";
import cover3 from "../assets/c3.png";

const WorkingSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container text-center mb-5" id="working">
      <h1 className="text-center mt-5">Watch It Works</h1>
      <motion.div
        className="d-flex flex-wrap justify-content-center mt-4 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {[
          {
            img: cover1,
            title: "Choose Your Meals",
            content: "100+ meals to choose from",
          },
          {
            img: cover2,
            title: "Cook & Enjoy",
            content: "Freshly cooked meals delivered",
          },
          {
            img: cover3,
            title: "Fast Delivery",
            content: "Delivered to your door in minutes",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="card p-1 shadow-xl rounded"
            style={{ width: "18rem", border: "none" }}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0px 10px 15px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={item.img}
              alt=""
              height={200}
              className="card-img-top rounded"
            />
            <div className="card-body">
              <h3 className="card-title">{item.title}</h3>
              <div className="card-content">{item.content}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WorkingSection;
