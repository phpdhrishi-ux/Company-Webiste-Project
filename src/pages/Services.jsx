import { useState } from "react";
import "../components/GlassLayout.css";

const SERVICES = [
  {
    key: "Growth Consulting",
    label: "Growth Consulting",
    body:
      "Strategy, positioning, offers, and operating cadence tailored to your market.",
    intro:
      "Deep, practical strategy for founders who want clear offers, pricing, funnels, and execution rhythm.",
    items: [
      "Go-to-market and positioning sprints",
      "Offer and pricing architecture",
      "Sales, ops, and delivery workflows",
      "Metrics cadence and review rituals",
      "Playbooks for repeatable execution",
      "Founder decision support and sparring",
    ],
  },
  {
    key: "vCIO",
    label: "Virtual CIO (vCIO)",
    body:
      "Architecture, tools, security, and automation decisions with an owner.",
    intro:
      "Technology leadership without a full‑time hire, tightly aligned to revenue, risk, and operations.",
    items: [
      "IT roadmap and stack selection",
      "Security, compliance, and access design",
      "Automation & integration strategy",
      "Vendor and tooling evaluation",
      "Data and reporting architecture",
      "Tech due‑diligence for new initiatives",
    ],
  },
  {
    key: "vCFO",
    label: "Virtual CFO (vCFO)",
    body:
      "Numbers that speak clearly: forecasts, dashboards, and board‑ready reporting.",
    intro:
      "Financial visibility so you always know cash, runway, and unit economics before making calls.",
    items: [
      "Forecasting and scenario planning",
      "Budget vs actuals tracking",
      "Management dashboards and KPIs",
      "Profitability and unit economics analysis",
      "Board and investor‑ready reporting",
      "Finance process design and clean‑up",
    ],
  },
  {
    key: "Product & Delivery",
    label: "Product & Delivery",
    body:
      "Product discovery, roadmapping, and execution for internal and external apps.",
    intro:
      "Product thinking plus disciplined execution for internal tools and customer‑facing platforms.",
    items: [
      "Product discovery and requirements",
      "Roadmaps tied to business outcomes",
      "Backlog, sprint, and release planning",
      "Design, build, and QA coordination",
      "Platform and API design guidance",
      "Launch and adoption playbooks",
    ],
  },
  {
    key: "Custom Software",
    label: "Custom Software",
    body:
      "Admin panels, internal tools, and workflow automation deeply aligned with ops.",
    intro:
      "Internal tools, portals, and workflows engineered around how your team actually operates.",
    items: [
      "Admin dashboards and control panels",
      "Workflow and approvals automation",
      "Integrations with existing SaaS tools",
      "Role‑based access and audit trails",
      "Performance and reliability tuning",
      "Ongoing enhancements and support",
    ],
  },
  {
    key: "Advisory Pods",
    label: "Advisory Pods",
    body:
      "Hybrid packages combining strategy + execution with weekly accountability.",
    intro:
      "Cross‑functional pods that blend strategy, finance, and engineering with weekly accountability.",
    items: [
      "Fixed‑scope, outcome‑based pods",
      "Weekly working sessions and reviews",
      "Joint roadmaps across functions",
      "Shared dashboards and scorecards",
      "Experiment design and measurement",
      "Leadership enablement and coaching",
    ],
  },
];

const Services = () => {
  const [activeKey, setActiveKey] = useState(null);

  const activeService = SERVICES.find((s) => s.key === activeKey) || null;

  const closeModal = () => setActiveKey(null);

  return (
    <main
      className="bg-accent1 section-padding"
      style={{ position: "relative" }}
    >
      <div
        className="bg-radial-overlay"
        style={{ position: "absolute", inset: 0, opacity: 0.6 }}
      />

      <div className="wrapper" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="gradient-rounded-text-box"
          style={{ marginBottom: "1.5rem" }}
        >
          Our Services
        </div>
        <h1
          className="heading-2 text-gradient"
          style={{ marginBottom: "1.5rem" }}
        >
          Transformative Digital & Advisory Services
        </h1>
        <p
          className="desc"
          style={{ maxWidth: "42rem", marginBottom: "2.5rem" }}
        >
          Pick individual services or combine them into a growth pod tailored to
          your stage: consulting, vCIO, vCFO, and engineering.
        </p>

        {/* Cards grid generated from SERVICES array */}
        <div className="grid-3">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.key}
              label={service.label}
              body={service.body}
              onLearnMore={() => setActiveKey(service.key)}
            />
          ))}
        </div>
      </div>

      {/* Glassmorphism modal popup (responsive) */}
      {activeService && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            background:
              "linear-gradient(180deg, rgba(15,23,42,0.35), rgba(15,23,42,0.55))",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="services-modal"
          >
            {/* Close icon */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="services-modal-close"
            >
              ×
            </button>

            {/* Top pill + heading */}
            <div style={{ marginBottom: "1.75rem" }}>
              <div
                className="gradient-rounded-text-box"
                style={{ marginBottom: "1.5rem" }}
              >
                Industries
              </div>

              <h2
                className="heading-2 text-gradient"
                style={{ marginBottom: "1rem" }}
              >
                Comprehensive Digital Services
              </h2>

              <p
                className="desc"
                style={{
                  margin: 0,
                  maxWidth: "48rem",
                }}
              >
                {activeService.intro}
              </p>
            </div>

            <h3
              className="heading-3"
              style={{
                textAlign: "center",
                marginBottom: "1.5rem",
              }}
            >
              What We Offer
            </h3>

            {/* Inner detail cards */}
            <div
              className="services-modal-grid"
            >
              {activeService.items.map((item) => (
                <div key={item} className="card">
                  <p
                    className="desc"
                    style={{ fontSize: "0.9rem", margin: 0 }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Back button */}
            <div style={{ textAlign: "center" }}>
              <button
                type="button"
                onClick={closeModal}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.75rem 1.9rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(124,58,237,0.4)",
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.06), rgba(255,255,255,0.95))",
                  color: "#4c1d95",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  cursor: "pointer",
                  boxShadow: "0 10px 25px rgba(124,58,237,0.25)",
                  transition:
                    "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 14px 32px rgba(124,58,237,0.35)";
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, rgba(124,58,237,0.12), #ffffff)";
                  e.currentTarget.style.borderColor = "#7c3aed";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(124,58,237,0.25)";
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, rgba(124,58,237,0.06), rgba(255,255,255,0.95))";
                  e.currentTarget.style.borderColor =
                    "rgba(124,58,237,0.4)";
                }}
              >
                Back to Services
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

const ServiceCard = ({ label, body, onLearnMore }) => (
  <div className="card">
    <h3 className="heading-3" style={{ marginBottom: "0.75rem" }}>
      {label}
    </h3>
    <p className="desc" style={{ marginBottom: "1.5rem" }}>
      {body}
    </p>
    <button
      type="button"
      onClick={onLearnMore}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.35rem",
        border: "none",
        background: "transparent",
        color: "#4b5563",
        fontSize: "0.9rem",
        fontWeight: 500,
        cursor: "pointer",
        padding: 0,
      }}
    >
      Learn More
      <span style={{ fontSize: "1rem", transform: "translateY(1px)" }}>
        &raquo;
      </span>
    </button>
  </div>
);

export default Services;
