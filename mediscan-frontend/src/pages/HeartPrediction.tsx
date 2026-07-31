import { HeartPulse } from "lucide-react";
import "../styles/PredictionPage.css";

export default function HeartPrediction() {
  return (
    <section className="prediction-page page-enter">
      <div className="prediction-icon prediction-icon-heart">
        <HeartPulse size={30} />
      </div>

      <h1 className="prediction-title">Heart Disease Prediction</h1>

      <p className="prediction-description">
        The heart disease screening form will be added here.
      </p>
    </section>
  );
}
