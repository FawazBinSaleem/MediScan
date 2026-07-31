import { Activity, Droplets, HeartPulse, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Navbar.css";

const navigationLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Heart Disease",
    path: "/heart",
  },
  {
    label: "Diabetes",
    path: "/diabetes",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <nav className="navbar-content">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="navbar-brand"
          aria-label="Go to MediScan home page"
        >
          <div className="navbar-logo">
            <Activity size={21} strokeWidth={2.2} />
          </div>

          <div>
            <p className="navbar-title">MediScan</p>
            <p className="navbar-caption">Health risk prediction</p>
          </div>
        </NavLink>

        <div className="navbar-links">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "navbar-link navbar-link-active" : "navbar-link"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <NavLink to="/heart" className="navbar-screening-button">
          <HeartPulse size={17} />
          Start screening
        </NavLink>

        <button
          type="button"
          className="navbar-menu-button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-content">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "navbar-mobile-link navbar-mobile-link-active"
                    : "navbar-mobile-link"
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="navbar-mobile-actions">
              <NavLink
                to="/heart"
                onClick={closeMenu}
                className="navbar-mobile-action navbar-mobile-heart"
              >
                <HeartPulse size={17} />
                Heart
              </NavLink>

              <NavLink
                to="/diabetes"
                onClick={closeMenu}
                className="navbar-mobile-action navbar-mobile-diabetes"
              >
                <Droplets size={17} />
                Diabetes
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
