import { Link } from "react-router-dom";
import {
  FaBrain,
  FaShieldAlt,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa";
import "../components/GlassLayout.css";

const VCIOVCFO = () => {
  return (
    <main
      className="section-padding"
      style={{
        position: "relative",
        background: "#fafbff",
        minHeight: "100vh",
      }}
    >
      <div className="wrapper" style={{ position: "relative", zIndex: 1 }}>
        {/* HEADER SECTION - Centered Stack */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "3.5rem",
          }}
        >
          <div
            className="gradient-rounded-text-box"
            style={{
              margin: "0 0 1.25rem 0",
              background: "rgba(69, 91, 200, 0.08)",
              color: "#455bc8",
              border: "1px solid rgba(69, 91, 200, 0.15)",
              padding: "0.4rem 1.25rem",
              borderRadius: "99px",
              fontSize: "0.8rem",
              fontWeight: 600,
              width: "fit-content",
            }}
          >
            vCIO / vCFO
          </div>

          <h1
            className="heading-2 text-gradient"
            style={{ marginBottom: "1.25rem" }}
          >
            Executive Leadership Without Full-Time Cost
          </h1>

          <p
            className="desc"
            style={{ maxWidth: "42rem", margin: "0 auto", color: "#475569" }}
          >
            Senior advisory support for technology and finance—get CIO/CFO-level
            thinking, governance, reporting, and control systems without the
            overhead of full-time hires.
          </p>
        </div>

        {/* 2-CARD GRID (Centered) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            alignItems: "stretch",
            maxWidth: "60rem", // Narrower max-width since there are only 2 cards
            margin: "0 auto",
          }}
        >
          {/* vCIO Card */}
          <article className="service-showcase-card">
            <div
              className="service-showcase-media"
              style={{ paddingTop: "45%" }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=70"
                alt="vCIO Advisory"
                className="service-showcase-img"
              />
              <div className="service-showcase-overlay" />
            </div>
            <div
              className="service-showcase-body"
              style={{ padding: "1.75rem" }}
            >
              <h3
                className="service-showcase-title"
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#111827",
                }}
              >
                vCIO Advisory
              </h3>
              <p
                className="service-showcase-subtitle"
                style={{
                  color: "#455bc8",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  margin: "0.5rem 0",
                }}
              >
                Technology Leadership Without Full-Time Overhead
              </p>
              <p
                className="desc"
                style={{ fontSize: "0.9rem", color: "#475569" }}
              >
                Roadmaps, governance, risk management, and IT delivery systems
                that drive growth without chaos.
              </p>

              {/* KEY POINTS */}
              <div style={{ margin: "1.25rem 0" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                    fontSize: "0.88rem",
                    color: "#475569",
                  }}
                >
                  <div
                    className="service-showcase-iconbox"
                    style={{
                      width: 28,
                      height: 28,
                      background: "rgba(69, 91, 200, 0.08)",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaBrain size={14} style={{ color: "#455bc8" }} />
                  </div>
                  <span>Technology Roadmaps & Planning</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontSize: "0.88rem",
                    color: "#475569",
                  }}
                >
                  <div
                    className="service-showcase-iconbox"
                    style={{
                      width: 28,
                      height: 28,
                      background: "rgba(69, 91, 200, 0.08)",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaShieldAlt size={14} style={{ color: "#455bc8" }} />
                  </div>
                  <span>Security & Governance</span>
                </div>
              </div>

              <div style={{ marginTop: "auto" }}>
                <Link
                  to="/services/vcio-vcfo/vcio"
                  className="service-showcase-cta"
                  style={{ color: "#455bc8", fontWeight: 700 }}
                >
                  Read more →
                </Link>
              </div>
            </div>
          </article>

          {/* vCFO Card */}
          <article className="service-showcase-card">
            <div
              className="service-showcase-media"
              style={{ paddingTop: "45%" }}
            >
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1400&q=70"
                alt="vCFO Advisory"
                className="service-showcase-img"
              />
              <div className="service-showcase-overlay" />
            </div>
            <div
              className="service-showcase-body"
              style={{ padding: "1.75rem" }}
            >
              <h3
                className="service-showcase-title"
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#111827",
                }}
              >
                vCFO Advisory
              </h3>
              <p
                className="service-showcase-subtitle"
                style={{
                  color: "#455bc8",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  margin: "0.5rem 0",
                }}
              >
                Finance Leadership & Disciplined Growth
              </p>
              <p
                className="desc"
                style={{ fontSize: "0.9rem", color: "#475569" }}
              >
                Cash flow control, reporting systems, budgeting, and investor
                readiness without full-time cost.
              </p>

              {/* KEY POINTS */}
              <div style={{ margin: "1.25rem 0" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                    fontSize: "0.88rem",
                    color: "#475569",
                  }}
                >
                  <div
                    className="service-showcase-iconbox"
                    style={{
                      width: 28,
                      height: 28,
                      background: "rgba(69, 91, 200, 0.08)",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaDollarSign size={14} style={{ color: "#455bc8" }} />
                  </div>
                  <span>Cash Flow & Financial Controls</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontSize: "0.88rem",
                    color: "#475569",
                  }}
                >
                  <div
                    className="service-showcase-iconbox"
                    style={{
                      width: 28,
                      height: 28,
                      background: "rgba(69, 91, 200, 0.08)",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaChartLine size={14} style={{ color: "#455bc8" }} />
                  </div>
                  <span>Reporting & Forecasting</span>
                </div>
              </div>

              <div style={{ marginTop: "auto" }}>
                <Link
                  to="/services/vcio-vcfo/vcfo"
                  className="service-showcase-cta"
                  style={{ color: "#455bc8", fontWeight: 700 }}
                >
                  Read more →
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default VCIOVCFO;
