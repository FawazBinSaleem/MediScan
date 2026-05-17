import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>MediScan AI</h1>
      <button onClick={() => navigate("/predict/diabetes")}>
        Start Prediction
      </button>
    </div>
  );
}
