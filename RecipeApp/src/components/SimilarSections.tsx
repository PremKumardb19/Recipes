import { useNavigate } from "react-router-dom";
import Cards from "./Cards"
import Spinner from "react-bootstrap/Spinner"
const SimilarSection=({similar})=>{
  if(similar===null){
    return (<></>
      )
      
  }
    const navigate=useNavigate()
    const redirectToInfoPage = (id) => {
        navigate(`/info/${id}`);
      };
      console.log("SIMIlar section rendreec",similar)
   return (
      <div className="container-fluid mt-4">
          <div className="cards-container">
            <h1 className="fs-2 fw-bold card-title text-center"
            style={{
              color:"orangered"
            }} >Similar Recipes</h1>
              {similar && <Cards results={similar}  redirectToInfoPage={redirectToInfoPage}/>}
          </div>
      </div>
   )
}

export default SimilarSection