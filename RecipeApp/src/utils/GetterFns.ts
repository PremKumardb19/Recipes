import axios from "axios"

export const fetchData = async (endPoint:string) => {
    try{
        const data = await axios.get(endPoint);
        console.log("data sent from utils",data)
        return data.data
    }catch(err){
        throw new Error("Error Ocuured while fetching data")
    }
        

        
};