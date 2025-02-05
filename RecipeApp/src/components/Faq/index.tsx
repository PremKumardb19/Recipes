import React, { useState } from "react";
import { useDataStore } from "../../store/DataStore";
import { AccordionBody, AccordionButton, AccordionHeader, AccordionItem, AccordionPara, FAQContainer, IconStyle } from "./styles";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  data: FAQItem[];
  title: string;
}

const FAQ: React.FC<FAQProps> = ({ data, title }) => {
  const {openIndex,toggleFAQ}=useDataStore()

  return (
    <FAQContainer
      className="container my-5"
      
    >
      <h1 className="text-center mb-4 display-4 fw-bold">{title}</h1>
      <div className="accordion" id="faqAccordion">
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            className="accordion-item"
            
          >
            <AccordionHeader
              className="accordion-header p-3"
              id={`heading${index}`}
              isOpen={openIndex===index}
            >
              <AccordionButton
                className={`w-100 d-flex justify-content-between align-items-baseline ${
                  openIndex === index ? "" : "collapsed"
                } fw-bold`}
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index ? "true" : "false"}
                aria-controls={`collapse${index}`}
                isOpen={openIndex===index}
              >
                <span className="me-2">{String(index + 1).padStart(2, "0")}.</span>
                {item.question}
                <IconStyle
                  className={`fas ${openIndex === index ? "fa-minus" : "fa-plus"}`}
                  
                ></IconStyle>
              </AccordionButton>
            </AccordionHeader>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}
              aria-labelledby={`heading${index}`}
            >
              <AccordionBody
                className="accordion-body d-flex justify-content-center w-100"
               
              >
                <AccordionPara
                  className="mb-0 fw-normal"
                  
                >
                  {item.answer}
                </AccordionPara>
              </AccordionBody>
            </div>
          </AccordionItem>
        ))}
      </div>
    </FAQContainer>
  );
};

export default FAQ;
