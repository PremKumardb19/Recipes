import img from "../assets/pan2.png";
import video from "../assets/bgvideo.mp4"; 
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero position-relative d-flex align-items-center justify-content-center text-center text-white" id="hero" style={{ height: "100vh", overflow: "hidden" }}>

      <video autoPlay loop muted className="position-absolute w-100 h-100" style={{ objectFit: "cover", zIndex: "-1" }}>
        <source src={video} type="video/mp4" />
      </video>
      <div className="position-relative">
        <h1 className="fw-bold mb-4" style={{ fontSize: "3rem" }}>
          A Chef in Every Tasty Meal Box
        </h1>
        <p className="hero-text mb-4" style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
          This indicates the design structure of our cookings and so on. This indicates the design structure of our cookings and so on.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <button className="btn text-white px-4" style={{ backgroundColor: "orangered" }}>
            <Link to="/explore" className="text-decoration-none text-white">Explore</Link>
          </button>
          <button className="btn btn-outline-light px-4">Visit Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
