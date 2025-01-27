import cover1 from "../assets/c1.png";
import cover2 from "../assets/c2.png";
import cover3 from "../assets/c3.png";

const WorkingSection = () => {
  return (
    <div className="container text-center mb-5" id="working">
      <h1 className="text-center mt-5">Watch It Works</h1>
      <div className="d-flex flex-wrap justify-content-center mt-4 gap-4">
        <div
          className="card p-1 shadow-xl rounded"
          style={{ width: "18rem", border: "none" }}
        >
          <img src={cover1} alt="" height={200} className="card-img-top rounded" />
          <div className="card-body">
            <h3 className="card-title">Choose Your Meals</h3>
            <div className="card-content">100+ meals to choose from</div>
          </div>
        </div>
        <div
          className="card shadow-xl rounded"
          style={{ width: "18rem", border: "none" }}
        >
          <img src={cover2} alt="" height={200} className="card-img-top rounded" />
          <div className="card-body">
            <h3 className="card-title">Cook & Enjoy</h3>
            <div className="card-content">Freshly cooked meals delivered</div>
          </div>
        </div>
        <div
          className="card shadow-xl rounded"
          style={{ width: "18rem", border: "none" }}
        >
          <img src={cover3} alt="" height={200} className="card-img-top rounded" />
          <div className="card-body">
            <h3 className="card-title">Fast Delivery</h3>
            <div className="card-content">Delivered to your door in minutes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingSection;
