import styled from "styled-components"

export const FAQContainer=styled.div`

        width: 100%;
        max-width: 700px;
        margin: auto;

`

export const AccordionItem=styled.div`

              border-radius: 12px;
              margin-bottom: 10px;
              overflow: hidden;

`

export const AccordionHeader = styled.h2<{ isOpen: boolean }>`
  padding: 12px;
  background-color: ${({ isOpen }) => (isOpen ? "black" : "gainsboro")};
  color: ${({ isOpen }) => (isOpen ? "#ffffff" : "#000000")};
  border: none;
`

export const AccordionButton = styled.button<{ isOpen: boolean }>`
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  font-weight: bold;
  background-color: ${({ isOpen }) => (isOpen ? "black" : "gainsboro")};
  color: ${({ isOpen }) => (isOpen ? "#ffffff" : "#000000")};
  border: none;

`

export const IconStyle=styled.i`
 font-size: 1.25rem;
`

export const AccordionBody=styled.div`
  background-color: black;
  color: #ffffff;
`

export const AccordionPara=styled.p`
    width: 80%;
`