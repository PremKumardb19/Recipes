import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  data: FAQItem[];
  title: string;
}

const FAQ: React.FC<FAQProps> = ({ data, title }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="container my-5"
      style={{
        width: "100%",
        maxWidth: "700px",
        margin: "auto",
      }}
    >
      <h1 className="text-center mb-4 display-4 fw-bold">{title}</h1>
      <div className="accordion" id="faqAccordion">
        {data.map((item, index) => (
          <div
            key={index}
            className="accordion-item"
            style={{
              borderRadius: "12px",
              marginBottom: "10px",
              overflow: "hidden",
            }}
          >
            <h2
              className="accordion-header p-3"
              id={`heading${index}`}
              style={{
                backgroundColor: openIndex === index ? "black" : "gainsboro",
                color: openIndex === index ? "#ffffff" : "#000000",
                border: "none",
              }}
            >
              <button
                className={`w-100 d-flex justify-content-between align-items-baseline ${
                  openIndex === index ? "" : "collapsed"
                } fw-bold`}
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index ? "true" : "false"}
                aria-controls={`collapse${index}`}
                style={{
                  backgroundColor: openIndex === index ? "black" : "gainsboro",
                  color: openIndex === index ? "#ffffff" : "#000000",
                  border: "none",
                }}
              >
                <span className="me-2">{String(index + 1).padStart(2, "0")}.</span>
                {item.question}
                <i
                  className={`fas ${openIndex === index ? "fa-minus" : "fa-plus"}`}
                  style={{ fontSize: "1.25rem" }}
                ></i>
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}
              aria-labelledby={`heading${index}`}
            >
              <div
                className="accordion-body d-flex justify-content-center w-100"
                style={{
                  backgroundColor: "black",
                  color: "#ffffff",
                }}
              >
                <p
                  className="mb-0 fw-normal"
                  style={{
                    width: "80%",
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
