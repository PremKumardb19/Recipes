import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"


const Explore = ({isLogged,setIsLogged}) => {
  console.log("Explore rendered")
  return (
    <div>
        <Navbar setIsLogged={setIsLogged}/>
        <SearchBar/>
    </div>
  )
}

export default Explore