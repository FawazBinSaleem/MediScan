import { useState } from "react";
import { HeartPulse, ArrowLeft, Info } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/HeartPrediction.css";

type HeartFormData = {
  age: string;
  sex: string;
  cp: string;
  trestbps: string;
  chol: string;
  fbs: string;
  restecg: string;
  thalch: string;
  exang: string;
  oldpeak: string;
  slope: string;
  ca: string;
  thal: string;
};

const initialFormData: HeartFormData = {
  age: "",
  sex: "",
  cp: "",
  trestbps: "",
  chol: "",
  fbs: "",
  restecg: "",
  thalch: "",
  exang: "",
  oldpeak: "",
  slope: "",
  ca: "",
  thal: "",
};

export default function HeartPrediction() {
  const [formData, setFormData] = useState<HeartFormData>(initialFormData);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log("Heart form:", formData);
  }

  return (
    <div className="heart-page page-enter">
      <section className="heart-header">
        <div className="heart-header-content">
          <Link to="/" className="heart-back-link">
            <ArrowLeft size={18} />
            Back to home
          </Link>

          <div className="heart-heading-row">
            <div>
              <p className="heart-eyebrow">Cardiovascular screening</p>

              <h1>Heart Disease Prediction</h1>

              <p className="heart-description">
                Enter the health measurements required by the trained heart
                disease model. MediScan will use these values to estimate your
                risk.
              </p>
            </div>

            <div className="heart-illustration" aria-hidden="true">
              <HeartPulse size={52} strokeWidth={1.8} />

              <div className="heart-pulse-line">
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="heart-form-section">
        <form className="heart-form-card" onSubmit={handleSubmit}>
          <div className="heart-form-heading">
            <div>
              <p className="heart-form-eyebrow">Patient information</p>
              <h2>Health measurements</h2>
            </div>

            <span className="heart-field-count">13 fields</span>
          </div>

          <div className="heart-form-grid">
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
                placeholder="e.g. 52"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="sex">
                Sex
                <span className="required-mark">*</span>
              </label>

              <select
                id="sex"
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                required
              >
                <option value="">Select sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="cp">
                Chest Pain Type
                <span className="required-mark">*</span>
              </label>

              <select
                id="cp"
                name="cp"
                value={formData.cp}
                onChange={handleChange}
                required
              >
                <option value="">Select chest pain type</option>
                <option value="Typical Angina">Typical Angina</option>
                <option value="Atypical Angina">Atypical Angina</option>
                <option value="Non-anginal Pain">Non-anginal Pain</option>
                <option value="Asymptomatic">Asymptomatic</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="trestbps">
                Resting Blood Pressure
                <span className="field-unit">mmHg</span>
                <span className="required-mark">*</span>
              </label>

              <input
                id="trestbps"
                name="trestbps"
                type="number"
                min="50"
                max="250"
                value={formData.trestbps}
                onChange={handleChange}
                placeholder="e.g. 130"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="chol">
                Cholesterol
                <span className="field-unit">mg/dl</span>
                <span className="required-mark">*</span>
              </label>

              <input
                id="chol"
                name="chol"
                type="number"
                min="50"
                max="700"
                value={formData.chol}
                onChange={handleChange}
                placeholder="e.g. 245"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="fbs">
                Fasting Blood Sugar &gt; 120 mg/dl
                <span className="required-mark">*</span>
              </label>

              <select
                id="fbs"
                name="fbs"
                value={formData.fbs}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="restecg">
                Resting ECG Results
                <span className="required-mark">*</span>
              </label>

              <select
                id="restecg"
                name="restecg"
                value={formData.restecg}
                onChange={handleChange}
                required
              >
                <option value="">Select ECG result</option>
                <option value="Normal">Normal</option>
                <option value="ST-T Wave Abnormality">
                  ST-T Wave Abnormality
                </option>
                <option value="Left Ventricular Hypertrophy">
                  Left Ventricular Hypertrophy
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="thalch">
                Max Heart Rate Achieved
                <span className="required-mark">*</span>
              </label>

              <input
                id="thalch"
                name="thalch"
                type="number"
                min="40"
                max="250"
                value={formData.thalch}
                onChange={handleChange}
                placeholder="e.g. 162"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="exang">
                Exercise-Induced Angina
                <span className="required-mark">*</span>
              </label>

              <select
                id="exang"
                name="exang"
                value={formData.exang}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="oldpeak" className="label-with-info">
                <span>
                  ST Depression Induced by Exercise
                  <span className="required-mark">*</span>
                </span>

                <span className="info-wrapper">
                  <Info size={15} />
                  <span className="info-tooltip">
                    A measurement of ECG changes during exercise, often called
                    Oldpeak.
                  </span>
                </span>
              </label>

              <input
                id="oldpeak"
                name="oldpeak"
                type="number"
                min="0"
                max="10"
                step="0.1"
                value={formData.oldpeak}
                onChange={handleChange}
                placeholder="e.g. 1.4"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="slope" className="label-with-info">
                <span>
                  Slope of Peak Exercise ST Segment
                  <span className="required-mark">*</span>
                </span>

                <span className="info-wrapper">
                  <Info size={15} />
                  <span className="info-tooltip">
                    Describes the direction of the ST segment on an ECG during
                    peak exercise.
                  </span>
                </span>
              </label>

              <select
                id="slope"
                name="slope"
                value={formData.slope}
                onChange={handleChange}
                required
              >
                <option value="">Select slope</option>
                <option value="Upsloping">Upsloping</option>
                <option value="Flat">Flat</option>
                <option value="Downsloping">Downsloping</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="ca" className="label-with-info">
                <span>
                  Major Vessels Colored by Fluoroscopy
                  <span className="required-mark">*</span>
                </span>

                <span className="info-wrapper">
                  <Info size={15} />
                  <span className="info-tooltip">
                    The number of major blood vessels visible during a
                    fluoroscopy-based cardiac test.
                  </span>
                </span>
              </label>

              <select
                id="ca"
                name="ca"
                value={formData.ca}
                onChange={handleChange}
                required
              >
                <option value="">Select number</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="thal" className="label-with-info">
                <span>
                  Thalassemia
                  <span className="required-mark">*</span>
                </span>

                <span className="info-wrapper">
                  <Info size={15} />
                  <span className="info-tooltip">
                    A blood-related cardiac evaluation result used by the heart
                    disease model.
                  </span>
                </span>
              </label>

              <select
                id="thal"
                name="thal"
                value={formData.thal}
                onChange={handleChange}
                required
              >
                <option value="">Select result</option>
                <option value="Normal">Normal</option>
                <option value="Fixed Defect">Fixed Defect</option>
                <option value="Reversible Defect">Reversible Defect</option>
              </select>
            </div>
          </div>

          <div className="heart-form-footer">
            <div className="heart-form-note">
              <Info size={18} />

              <p>
                Fields marked with <span className="required-mark">*</span> are
                required because they are inputs used by the trained prediction
                model.
              </p>
            </div>

            <button type="submit" className="heart-submit-button">
              <HeartPulse size={19} />
              Run Analysis
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
