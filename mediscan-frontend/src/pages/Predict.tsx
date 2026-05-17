import { useParams } from "react-router-dom";

export default function Predict() {
  const { disease } = useParams();

  return (
    <div>
      <h1>Predict: {disease}</h1>
    </div>
  );
}
