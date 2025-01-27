import Faq from "./Faq"

const Instructions = ({ instructions }) => {
  const parseHtmlInstructions = (htmlString:string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const listItems = doc.querySelectorAll("li");
    return Array.from(listItems).map((li) => li.textContent.trim());
  };

  const steps = Array.isArray(instructions.steps)
    ? instructions.steps
    : typeof instructions === "string" && instructions.includes("<")
    ? parseHtmlInstructions(instructions)
    : instructions.split("\n");

  const faqData = steps.map((step, index) => ({
    question: `Step ${index + 1}`,
    answer: typeof step === "string" ? step : step.step,
  }));

  return (
    <div className="container-fluid">
      <Faq data={faqData} title="Instructions"/>
    </div>
  );
};

export default Instructions;
