import { useNavigate } from "react-router-dom";
import Cards from "../Cards";
import Spinner from "react-bootstrap/Spinner";
import { SimilarSectionHeading } from "./styles";

interface Result {
  id: string;
  title: string;
  image: string;
}

interface SimilarSectionProps {
  similar: { id: number; title: string; imageUrl: string }[] | null;
}

const SimilarSection = ({ similar }: SimilarSectionProps) => {
  if (similar === null) {
    return <></>;
  }

  const navigate = useNavigate();
  const redirectToInfoPage = (id: string) => {
    navigate(`/info/${id}`);
  };

  const mappedSimilar = similar.map((item) => ({
    id: item.id.toString(),
    title: item.title,
    image: item.imageUrl,
  }));

  console.log("Similar section rendered", mappedSimilar);

  return (
    <div className="container-fluid mt-4">
      <div className="cards-container">
        <SimilarSectionHeading className="fs-2 fw-bold card-title text-center" >
          Similar Recipes
        </SimilarSectionHeading>
        {mappedSimilar.length > 0 && <Cards results={mappedSimilar} redirectToInfoPage={redirectToInfoPage} />}
      </div>
    </div>
  );
};

export default SimilarSection;
