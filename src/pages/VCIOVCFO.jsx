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
    <main className="bg-accent1 section-padding" style={{ position: "relative" }}>
      <div className="bg-radial-overlay" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />

      <div className="wrapper" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ maxWidth: "60rem", margin: "0 auto 3rem", textAlign: "center" }}>
          <div className="gradient-rounded-text-box" style={{ marginBottom: "1.5rem" }}>
            vCIO / vCFO
          </div>
          <h1 className="heading-2 text-gradient" style={{ marginBottom: "1.25rem" }}>
            Executive Leadership Without Full-Time Cost
          </h1>
          <p className="desc" style={{ margin: 0 }}>
            Senior advisory support for technology and finance—get CIO/CFO-level thinking, governance, reporting, and
            control systems without the overhead of full-time hires.
          </p>
        </div>

        {/* HOME STYLE 3-CARD GRID + Key Points */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
            alignItems: "stretch",
            maxWidth: "80rem",
            margin: "0 auto",
          }}
        >
          {/* vCIO Card */}
          <article className="service-showcase-card">
            <div className="service-showcase-media" style={{ paddingTop: "32%" }}>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=70" 
                alt="vCIO Advisory" 
                className="service-showcase-img" 
              />
              <div className="service-showcase-overlay" />
            </div>
            <div className="service-showcase-body">
              <h3 className="service-showcase-title" style={{ fontSize: "1.4rem", fontWeight: 500 }}>
                vCIO Advisory
              </h3>
              <p className="service-showcase-subtitle">
                Technology Leadership Without Full-Time Overhead
              </p>
              <p className="desc">
                Roadmaps, governance, risk management, and IT delivery systems that drive growth without chaos.
              </p>
              
              {/* KEY POINTS */}
              <div style={{ margin: "1rem 0" }}>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "0.5rem", 
                  marginBottom: "0.5rem",
                  fontSize: "0.9rem"
                }}>
                  <FaBrain size={14} style={{ color: "#7c3aed" }} />
                  <span>Technology Roadmaps & Planning</span>
                </div>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "0.5rem",
                  fontSize: "0.9rem"
                }}>
                  <FaShieldAlt size={14} style={{ color: "#7c3aed" }} />
                  <span>Security & Governance</span>
                </div>
              </div>

              <Link to="/services/vcio-vcfo/vcio" className="service-showcase-cta">
                Read more →
              </Link>
            </div>
          </article>

          {/* vCFO Card */}
          <article className="service-showcase-card">
            <div className="service-showcase-media" style={{ paddingTop: "32%" }}>
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1400&q=70" 
                alt="vCFO Advisory" 
                className="service-showcase-img" 
              />
              <div className="service-showcase-overlay" />
            </div>
            <div className="service-showcase-body">
              <h3 className="service-showcase-title" style={{ fontSize: "1.4rem", fontWeight: 500 }}>
                vCFO Advisory
              </h3>
              <p className="service-showcase-subtitle">
                Finance Leadership & Disciplined Growth
              </p>
              <p className="desc">
                Cash flow control, reporting systems, budgeting, and investor readiness without full-time cost.
              </p>
              
              {/* KEY POINTS */}
              <div style={{ margin: "1rem 0" }}>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "0.5rem", 
                  marginBottom: "0.5rem",
                  fontSize: "0.9rem"
                }}>
                  <FaDollarSign size={14} style={{ color: "#7c3aed" }} />
                  <span>Cash Flow & Financial Controls</span>
                </div>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "0.5rem",
                  fontSize: "0.9rem"
                }}>
                  <FaChartLine size={14} style={{ color: "#7c3aed" }} />
                  <span>Reporting & Forecasting</span>
                </div>
              </div>

              <Link to="/services/vcio-vcfo/vcfo" className="service-showcase-cta">
                Read more →
              </Link>
            </div>
          </article>

          {/* Spacer for 3-column layout */}
          <div />
        </div>
      </div>
    </main>
  );
};

export default VCIOVCFO;
