import { useParams } from "react-router-dom";
import { diseaseForms } from "../data/DiseaseForms";

export default function Predict() {
  const { disease } = useParams();

  const fields = diseaseForms[disease as keyof typeof diseaseForms];

  return (
    <div>
      <h1>{disease} Prediction</h1>

      {fields.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>

          <input type={field.type} />
        </div>
      ))}
    </div>
  );
}
