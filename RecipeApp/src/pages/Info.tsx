import { useEffect,useState } from "react"
import Navbar from "../components/Navbar"
import { fetchData } from "../utils/GetterFns"
import {useParams} from "react-router-dom"
import InfoHero from "../components/InfoHero"
import Switcher from "../components/Switcher"
import SimilarSection from "../components/SimilarSections"

const Info = ({isLogged,setIsLogged}) => {
    const [details,setDetails]=useState(null)
    const [similar,setSimilar]=useState(null)
    const {id}=useParams()
    useEffect(()=>{
      const fetchDetails=async()=>{
        const data=await fetchData(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition-true&apiKey=${import.meta.env.VITE_API_KEY}`)
        const sim=await fetchData(`https://api.spoonacular.com/recipes/${id}/similar?number=8&limitLicense=true&apiKey=${import.meta.env.VITE_API_KEY}`)
        console.log("data recieved in info",data)
        console.log("Similar recipes",sim)
        console.log("")
        setDetails(data)
        setSimilar(sim)
      }
      fetchDetails()
      
       
    },[id])
   

  return (
    <div>
        <Navbar setIsLogged={setIsLogged}/>
        <InfoHero details={details}/>
        {details && <Switcher instructions={details.instructions} ingredients={details.extendedIngredients}/>}
        <SimilarSection similar={similar} />
    </div>
  )
}

export default Info