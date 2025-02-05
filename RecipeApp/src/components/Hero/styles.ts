import styled from "styled-components"

export const HeroDiv=styled.div`
  
     height: 100vh;
     overflow: hidden
   
`

export const HeroVideo=styled.video`
    object-fit: cover;
    z-index: -1;
`

export const HeroTitle=styled.h1`
    font-size: 3rem;
`

export const HeroDescription=styled.p`
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
`

export const HeroButton=styled.button`
    background-color: orangered;

    &:hover{
      background-color:orangered;
    }
`