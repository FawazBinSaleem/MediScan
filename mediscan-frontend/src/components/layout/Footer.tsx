import { Activity } from "lucide-react";
import { NavLink } from "react-router-dom";
import "../../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-about">
            <NavLink to="/" className="footer-brand">
              <Activity size={20} />
              <span>MediScan</span>
            </NavLink>

            <p className="footer-description">
              AI-assisted health risk predictions designed to present model
              results clearly and understandably.
            </p>
            <p className="footer-description">
              Made with ❤️ by Fawaz and Maaz.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
