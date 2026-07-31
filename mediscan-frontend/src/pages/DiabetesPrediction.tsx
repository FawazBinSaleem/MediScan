import { Droplets } from "lucide-react";
import "../styles/PredictionPage.css";

export default function DiabetesPrediction() {
  return (
    <section className="prediction-page page-enter">
      <div className="prediction-icon prediction-icon-diabetes">
        <Droplets size={30} />
      </div>

      <h1 className="prediction-title">Diabetes Prediction</h1>

      <p className="prediction-description">
        The diabetes screening form will be added here.
      </p>
    </section>
  );
}
