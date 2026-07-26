import { useParams } from "react-router-dom";
import { diseaseForms } from "../data/DiseaseForms";
import { useState } from "react";

export default function Predict() {
  const { disease } = useParams();

  const [formData, setFormData] = useState<Record<string, string>>({});

  const fields = diseaseForms[disease as keyof typeof diseaseForms];

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log(formData);
  }

  return (
    <div>
      <h1>{disease} Prediction</h1>

      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name}>
            <label>{field.label}</label>

            <input
              type={field.type}
              value={formData[field.name] || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [field.name]: e.target.value,
                })
              }
            />
          </div>
        ))}

        <button type="submit">Predict</button>
      </form>

      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}
