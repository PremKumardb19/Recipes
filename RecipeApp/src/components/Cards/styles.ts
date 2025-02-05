import styled from "styled-components"

export const SearchDiv=styled.div`
   margin-top: 20px;
   color: #ff6347;
`

export const SearchIcon=styled.i`
   font-size: 30px ;
`

export const CardItem=styled.div`
    
                max-width: 280px;
                border-radius: 20px;
                overflow: hidden;
                background-color: #ffffff;
                color: #333;
                box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s, box-shadow 0.3s;
                cursor: pointer;
 
`

export const CardImg=styled.img`
  
                  width: 100%;
                  height: 180px;
                  object-fit: cover;
                  border-bottom: 5px solid #ff6347;
                
`

export const CardBody=styled.div`
 padding: 15px 20px;
`

export const CardTitle=styled.h5`

                    font-wize: 18px;
                    font-weight: bold;
                    margin: 0 0 10px;
                    color: #ff6347;
     
`

export const CardLine=styled.div`

                    background: linear-gradient(90deg, #ff6347, #ffa07a);
                    height: 5px;
                    width: 50px;
                    margin: 10px auto;
                
`