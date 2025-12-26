import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./GlassLayout.css";
import logo from "../assets/logo.png";

const LINKS = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Blogs", "/blogs"],
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ===== DESKTOP NAVBAR (like phpdhires.com) ===== */}
      <header className="navbar-root-desktop">
        <div className="navbar-shell">
          <div className="navbar-inner">
            {/* logo left */}
            <NavLink to="/" className="nav-logo">
              <img src={logo} alt="PHPD" className="logo-img" />
            </NavLink>

            {/* links center */}
            <nav className="nav-center-links">
              {LINKS.map(([label, to]) => (
                <NavLink key={to} to={to} className="nav-link">
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* CTA right */}
            <NavLink to="/contact" className="primary-btn nav-cta-desktop">
              Get in Touch
            </NavLink>
          </div>
        </div>
      </header>

      {/* ===== MOBILE NAVBAR (single rounded card that drops) ===== */}
      <header className="navbar-root-mobile">
        <div className="mobile-nav-card">
          {/* top bar looks like a pill */}
          <div className="mobile-nav-bar">
            <img src={logo} alt="PHPD" className="logo-img" />

            <button
              className={`hamburger ${mobileOpen ? "active" : ""}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>

          <div className="mobile-header-divider" />

          {mobileOpen && (
            <div className="mobile-nav-body">
              <nav className="mobile-menu-list">
                {LINKS.map(([label, to]) => (
                  <NavLink
                    key={to}
                    to={to}
                    className="mobile-menu-item"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </NavLink>
                ))}

                <NavLink
                  to="/contact"
                  className="mobile-menu-item mobile-contact-row"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </NavLink>
              </nav>

              <NavLink
                to="/contact"
                className="primary-btn mobile-main-cta"
                onClick={() => setMobileOpen(false)}
              >
                Get in Touch
              </NavLink>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
