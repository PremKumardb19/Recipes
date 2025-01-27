import logo from "../assets/chefLogo.jpg";
import coriander from "../assets/coriander.jpg";
import dish from "../assets/food-cropped-final.png"
const DeliverySection = () => {
  return (
    <div className="container-fluid mt-0 mb-5" id="delivery">
         <img
        src={coriander}
        alt="Coriander"
        className="delivery-img top-0 start-0 m-0 p-0"
        
        id="delivery"
      />
    
    
    <div className="container-fluid d-flex flex-column flex-md-row align-items-center mt-0">
     <img src={dish} className="w-50" style={{height:"600px",width:"50px"}}/>
      <div className="card-body text-center mt-5 w-50">
        <h1 className="card-title fs-1 fw-bold">We Deliver Anywhere across the Globe</h1>
        <p className="card-content mt-3">
          Each fresh meal is perfectly sized for 1 person to enjoy in 1 sitting.
          Our fully prepared meals are delivered fresh and ready to eat in 3 minutes.
        </p>
        <div className="certification mt-4 d-flex flex-row justify-content-center align-items-center">
          <p className="mt-2" style={{ fontFamily: "cursive" }} >Certified By:</p>
          <img
            src={logo}
            alt="Certification Logo"
            className="ms-2"
            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
          />
        </div>
        <div className="btn-grp d-flex justify-content-center mt-2">
          <button className="btn py-2 rounded shadow text-white me-4" style={{backgroundColor:"orangered"}}>Contact Us</button>
          <button className="btn btn-outline-success">Visit Now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DeliverySection;
