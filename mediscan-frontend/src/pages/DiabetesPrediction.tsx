import { useState } from "react";
import { ArrowLeft, Droplets, Info, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/DiabetesPrediction.css";

type DiabetesFormData = {
  pregnancies: string;
  glucose: string;
  bloodPressure: string;
  skinThickness: string;
  insulin: string;
  bmi: string;
  diabetesPedigreeFunction: string;
  age: string;
};

type GenderGateState =
  | "unanswered"
  | "female"
  | "male-blocked"
  | "continue-anyway";

const initialFormData: DiabetesFormData = {
  pregnancies: "",
  glucose: "",
  bloodPressure: "",
  skinThickness: "",
  insulin: "",
  bmi: "",
  diabetesPedigreeFunction: "",
  age: "",
};

export default function DiabetesPrediction() {
  const [gateState, setGateState] = useState<GenderGateState>("unanswered");

  const [formData, setFormData] = useState<DiabetesFormData>(initialFormData);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log("Diabetes form:", formData);
    console.log("Gender gate state:", gateState);
  }

  const showForm = gateState === "female" || gateState === "continue-anyway";

  return (
    <div className="diabetes-page page-enter">
      <section className="diabetes-header">
        <div className="diabetes-header-content">
          <Link to="/" className="diabetes-back-link">
            <ArrowLeft size={18} />
            Back to home
          </Link>

          <div className="diabetes-heading-row">
            <div>
              <p className="diabetes-eyebrow">Diabetes risk screening</p>

              <h1>Diabetes Prediction</h1>

              <p className="diabetes-description">
                Enter the measurements required by the trained diabetes model to
                estimate your risk.
              </p>
            </div>

            <div className="diabetes-illustration" aria-hidden="true">
              <Droplets size={52} strokeWidth={1.8} />
            </div>
          </div>
        </div>
      </section>

      <section className="diabetes-content">
        {gateState === "unanswered" && (
          <div className="gender-gate-card gate-enter">
            <div className="gender-gate-icon">
              <ShieldAlert size={28} />
            </div>

            <p className="gender-gate-eyebrow">Important model limitation</p>

            <h2>Before you continue</h2>

            <p className="gender-gate-notice">
              This diabetes prediction model was trained exclusively on female
              patient data and has not been validated for male patients.
              Predictions for male users should not be considered clinically
              reliable.
            </p>

            <div className="gender-question">
              <p>Are you female?</p>

              <div className="gender-actions">
                <button
                  type="button"
                  className="gender-button gender-button-yes"
                  onClick={() => setGateState("female")}
                >
                  Yes
                </button>

                <button
                  type="button"
                  className="gender-button gender-button-no"
                  onClick={() => setGateState("male-blocked")}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}

        {gateState === "male-blocked" && (
          <div className="gender-gate-card gate-enter">
            <div className="gender-gate-icon gender-gate-icon-warning">
              <Info size={28} />
            </div>

            <p className="gender-gate-eyebrow">Model compatibility notice</p>

            <h2>This model may not be reliable for you</h2>

            <p className="gender-gate-notice">
              Because the model was trained only on female patient data, its
              diabetes risk estimate has not been validated for male users.
            </p>

            <div className="blocked-actions">
              <Link to="/" className="gate-secondary-button">
                Return home
              </Link>

              <button
                type="button"
                className="gate-primary-button"
                onClick={() => setGateState("continue-anyway")}
              >
                Continue anyway
              </button>
            </div>
          </div>
        )}

        {showForm && (
          <form
            className="diabetes-form-card form-enter"
            onSubmit={handleSubmit}
          >
            {gateState === "continue-anyway" && (
              <div className="persistent-warning">
                <ShieldAlert size={18} />

                <p>
                  You chose to continue with a model that has not been validated
                  for male patients. Treat the result with additional caution.
                </p>
              </div>
            )}

            <div className="diabetes-form-heading">
              <div>
                <p className="diabetes-form-eyebrow">Health measurements</p>

                <h2>Enter your information</h2>
              </div>

              <span className="diabetes-field-count">8 fields</span>
            </div>

            <div className="diabetes-form-grid">
              <div className="form-group">
                <label htmlFor="pregnancies">
                  Pregnancies
                  <span className="required-mark">*</span>
                </label>

                <input
                  id="pregnancies"
                  name="pregnancies"
                  type="number"
                  min="0"
                  max="20"
                  step="1"
                  value={formData.pregnancies}
                  onChange={handleChange}
                  placeholder="e.g. 2"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="glucose">
                  Glucose
                  <span className="field-unit">mg/dl</span>
                  <span className="required-mark">*</span>
                </label>

                <input
                  id="glucose"
                  name="glucose"
                  type="number"
                  min="0"
                  max="300"
                  value={formData.glucose}
                  onChange={handleChange}
                  placeholder="e.g. 120"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="bloodPressure">
                  Blood Pressure
                  <span className="field-unit">mm Hg</span>
                  <span className="required-mark">*</span>
                </label>

                <input
                  id="bloodPressure"
                  name="bloodPressure"
                  type="number"
                  min="0"
                  max="200"
                  value={formData.bloodPressure}
                  onChange={handleChange}
                  placeholder="e.g. 72"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="skinThickness">
                  Skin Thickness
                  <span className="field-unit">mm</span>
                  <span className="required-mark">*</span>
                </label>

                <input
                  id="skinThickness"
                  name="skinThickness"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.skinThickness}
                  onChange={handleChange}
                  placeholder="e.g. 25"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="insulin">
                  Insulin
                  <span className="field-unit">mu U/ml</span>
                  <span className="required-mark">*</span>
                </label>

                <input
                  id="insulin"
                  name="insulin"
                  type="number"
                  min="0"
                  max="1000"
                  value={formData.insulin}
                  onChange={handleChange}
                  placeholder="e.g. 85"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="bmi">
                  BMI
                  <span className="required-mark">*</span>
                </label>

                <input
                  id="bmi"
                  name="bmi"
                  type="number"
                  min="0"
                  max="80"
                  step="0.1"
                  value={formData.bmi}
                  onChange={handleChange}
                  placeholder="e.g. 27.4"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="diabetesPedigreeFunction">
                  Diabetes Pedigree Function
                  <span className="required-mark">*</span>
                </label>

                <input
                  id="diabetesPedigreeFunction"
                  name="diabetesPedigreeFunction"
                  type="number"
                  min="0"
                  max="3"
                  step="0.001"
                  value={formData.diabetesPedigreeFunction}
                  onChange={handleChange}
                  placeholder="e.g. 0.627"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="age">
                  Age
                  <span className="required-mark">*</span>
                </label>

                <input
                  id="age"
                  name="age"
                  type="number"
                  min="1"
                  max="120"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="e.g. 33"
                  required
                />
              </div>
            </div>

            <div className="diabetes-form-footer">
              <div className="diabetes-form-note">
                <Info size={18} />

                <p>
                  Fields marked with <span className="required-mark">*</span>{" "}
                  are required because they are inputs used by the trained
                  prediction model.
                </p>
              </div>

              <button type="submit" className="diabetes-submit-button">
                <Droplets size={19} />
                Run Analysis
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}
