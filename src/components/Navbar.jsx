// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import "./GlassLayout.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        paddingTop: "0.9rem",
        paddingBottom: "0.9rem",
        background: "transparent",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="wrapper" style={{ position: "relative" }}>
        {/* Floating solid pill */}
        <div
          style={{
            position: "relative",
            borderRadius: "9999px",
            padding: "0.6rem 1.3rem",
            overflow: "hidden",
            marginInline: "auto",
            background: "#ffffff",
            boxShadow:
              "0 22px 45px rgba(15,23,42,0.35), 0 0 0 1px rgba(148,163,184,0.35)",
            border: "1px solid rgba(255,255,255,0.9)",
          }}
        >
          {/* Nav content */}
          <div
            className="flex items-center justify-between"
            style={{
              position: "relative",
              zIndex: 1,
              gap: "1.25rem",
            }}
          >
            {/* Logo */}
            <a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                paddingLeft: "0.25rem",
                transition:
                  "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(124,58,237,0.45)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={logo}
                alt="PHPD"
                style={{ height: "2.1rem", objectFit: "contain" }}
              />
            </a>

            {/* Links */}
            <nav
              className="flex items-center gap-6"
              style={{ fontSize: "0.9rem", fontWeight: 500 }}
            >
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Portfolio", "/portfolio"],
                ["Blogs" , "/blogs"],
                ["Contact", "/contact"],
              ].map(([label, to]) => (
                <NavLink
                  key={to}
                  to={to}
                  style={({ isActive }) => ({
                    color: isActive ? "#7c3aed" : "#111827",
                    textDecoration: "none",
                    padding: "0.4rem 0.65rem",
                    borderRadius: "9999px",
                    transition:
                      "color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
                    backgroundColor: isActive
                      ? "rgba(124,58,237,0.08)"
                      : "transparent",
                    boxShadow: isActive
                      ? "0 4px 18px rgba(124,58,237,0.35)"
                      : "none",
                  })}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#7c3aed";
                    e.currentTarget.style.backgroundColor =
                      "rgba(124,58,237,0.08)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 16px rgba(124,58,237,0.35)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "";
                    e.currentTarget.style.backgroundColor = "";
                    e.currentTarget.style.color = "";
                  }}
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <a
              href="/contact"
              className="primary-btn"
              style={{
                padding: "0.75rem 1.6rem",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "0.9rem",
                transition:
                  "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s",
                boxShadow: "0 10px 30px rgba(124,58,237,0.55)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-2px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 16px 40px rgba(124,58,237,0.8)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(124,58,237,0.55)";
              }}
            >
              Connect with Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
