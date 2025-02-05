import { Link } from "react-router-dom";
import video from "../../assets/bgvideo.mp4"
import {HeroDiv,HeroVideo,HeroTitle, HeroDescription, HeroButton} from "./styles"
const Hero = () => {
  return (
    <HeroDiv className="container-fluid hero position-relative d-flex align-items-center justify-content-center text-center text-white" id="hero" >
      <HeroVideo autoPlay loop muted className="position-absolute w-100 h-100" >
        <source src={video} type="video/mp4" />
      </HeroVideo>
      <div className="position-relative">
        <HeroTitle className="fw-bold mb-4" >
          A Chef in Every Tasty Meal Box
        </HeroTitle>
        <HeroDescription className="hero-text mb-4" >
          This indicates the design structure of our cookings and so on. This indicates the design structure of our cookings and so on.
        </HeroDescription>
        <div className="d-flex justify-content-center gap-3">
          <HeroButton className="btn text-white px-4" >
            <Link to="/explore" className="text-decoration-none text-white">Explore</Link>
          </HeroButton>
          <button className="btn btn-outline-light px-4">Visit Now</button>
        </div>
      </div>
    </HeroDiv>
  );
};

export default Hero;
