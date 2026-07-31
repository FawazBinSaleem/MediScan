import {
  Activity,
  ArrowRight,
  BrainCircuit,
  Droplets,
  HeartPulse,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const steps = [
  {
    icon: Activity,
    title: "Enter your health data",
    description:
      "Provide only the measurements required by the selected prediction model.",
  },
  {
    icon: BrainCircuit,
    title: "Run the AI analysis",
    description:
      "Your information is sent to the trained model through the MediScan API.",
  },
  {
    icon: ShieldCheck,
    title: "Understand your risk",
    description:
      "Receive a clear percentage-based result with a simple risk level.",
  },
];

export default function Home() {
  return (
    <div className="home page-enter">
      <section className="hero">
        <div className="hero-decoration hero-decoration-left" />
        <div className="hero-decoration hero-decoration-right" />

        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            AI-powered health insights
          </div>

          <h1 className="hero-title">
            Know your risk,
            <span> before it knows you.</span>
          </h1>

          <p className="hero-description">
            MediScan uses trained machine-learning models to estimate heart
            disease and diabetes risk from the health measurements that matter
            most.
          </p>

          <div className="hero-actions">
            <a href="#screenings" className="primary-button">
              Start health check
              <ArrowRight size={18} />
            </a>

            <a href="#how-it-works" className="secondary-button">
              How it works
            </a>
          </div>

          <div className="hero-note">
            <ShieldCheck size={18} />
            Educational predictions presented clearly and responsibly.
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-card">
            <div className="hero-visual-header">
              <div>
                <p className="hero-visual-label">Health overview</p>
                <h2>Prediction preview</h2>
              </div>

              <div className="hero-visual-logo">
                <Activity size={22} />
              </div>
            </div>

            <div className="preview-meter">
              <div className="preview-ring">
                <span>72%</span>
              </div>

              <div>
                <p className="preview-risk-label">Estimated risk</p>
                <p className="preview-risk-value">Moderate</p>
              </div>
            </div>

            <div className="preview-bars">
              <div className="preview-bar-row">
                <span>Glucose</span>
                <div className="preview-bar-track">
                  <div className="preview-bar-fill preview-bar-fill-large" />
                </div>
              </div>

              <div className="preview-bar-row">
                <span>Age</span>
                <div className="preview-bar-track">
                  <div className="preview-bar-fill preview-bar-fill-medium" />
                </div>
              </div>

              <div className="preview-bar-row">
                <span>BMI</span>
                <div className="preview-bar-track">
                  <div className="preview-bar-fill preview-bar-fill-small" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="screenings" className="screenings-section">
        <div className="section-heading">
          <p className="section-eyebrow">Choose a screening</p>
          <h2>Start with the health model that fits your needs.</h2>
          <p>
            Each screening asks only for the exact information used by its
            trained machine-learning model.
          </p>
        </div>

        <div className="screening-grid">
          <Link to="/heart" className="screening-card screening-card-heart">
            <div className="screening-card-top">
              <div className="screening-icon screening-icon-heart">
                <HeartPulse size={31} />
              </div>

              <span className="screening-tag screening-tag-heart">
                Cardiology
              </span>
            </div>

            <div>
              <h3>Heart Disease Prediction</h3>
              <p>
                Estimate cardiovascular risk using blood pressure, cholesterol,
                ECG results, exercise measurements, and other model inputs.
              </p>
            </div>

            <span className="screening-card-link">
              Start heart screening
              <ArrowRight size={18} />
            </span>
          </Link>

          <Link
            to="/diabetes"
            className="screening-card screening-card-diabetes"
          >
            <div className="screening-card-top">
              <div className="screening-icon screening-icon-diabetes">
                <Droplets size={31} />
              </div>

              <span className="screening-tag screening-tag-diabetes">
                Metabolic health
              </span>
            </div>

            <div>
              <h3>Diabetes Prediction</h3>
              <p>
                Assess diabetes risk using glucose, insulin, BMI, age, and the
                other measurements required by the model.
              </p>
            </div>

            <span className="screening-card-link">
              Start diabetes screening
              <ArrowRight size={18} />
            </span>
          </Link>
        </div>
      </section>

      <section id="how-it-works" className="how-section">
        <div className="section-heading section-heading-centered">
          <p className="section-eyebrow">How MediScan works</p>
          <h2>From health measurements to a clear result.</h2>
          <p>
            The experience is designed to remain simple while the model handles
            the complex prediction process behind the scenes.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="step-card"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="step-number">{index + 1}</div>

              <div className="step-icon">
                <Icon size={24} />
              </div>

              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="trust-section">
        <div className="trust-card">
          <div className="trust-icon">
            <ShieldCheck size={29} />
          </div>

          <div>
            <p className="trust-eyebrow">Built with transparency in mind</p>
            <h2>
              Helpful health insight, without pretending to be a diagnosis.
            </h2>
            <p>
              MediScan is a portfolio and educational tool. Results should be
              treated as risk estimates and discussed with a qualified
              healthcare professional when appropriate.
            </p>
          </div>

          <Link to="/heart" className="trust-link">
            Begin screening
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
