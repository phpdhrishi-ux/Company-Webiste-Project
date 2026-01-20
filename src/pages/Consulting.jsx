import { Link } from "react-router-dom";
import {
  FaDollarSign,
  FaUsers,
  FaShieldAlt,
  FaFileAlt,
  FaChartBar,
  FaCheckCircle,
  FaClipboardList,
  FaCogs,
  FaGavel,
  FaBalanceScale,
} from "react-icons/fa";
import "../components/GlassLayout.css";

const Consulting = () => {
  const cards = [
    {
      title: "Business Operations",
      subtitle: "Process & execution",
      description:
        "Optimize workflows, reduce bottlenecks, and improve delivery with scalable operating frameworks.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=70",
      to: "/services/business-consulting/business-operations",
      points: [
        { icon: FaCogs, text: "Workflow optimization" },
        { icon: FaGavel, text: "Operational discipline" },
      ],
    },
    {
      title: "Accounting & Finance",
      subtitle: "Clarity, control, profitability",
      description:
        "Strong financial discipline is the foundation of sustainable growth—planning, reporting, controls, and audit readiness.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=70",
      to: "/services/business-consulting/accounting-finance",
      points: [
        { icon: FaDollarSign, text: "Cash flow & working capital" },
        { icon: FaChartBar, text: "Budgeting & forecasting" },
      ],
    },
    {
      title: "HRM",
      subtitle: "Talent, performance, culture",
      description:
        "HR systems that scale with your growth—structured hiring, role clarity, performance tracking, and accountability.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=70",
      to: "/services/business-consulting/hrm",
      points: [
        { icon: FaUsers, text: "Talent acquisition" },
        { icon: FaCheckCircle, text: "Performance management" },
      ],
    },
    {
      title: "Internal Audit & Governance",
      subtitle: "Risk, compliance, discipline",
      description:
        "Strengthen governance and controls with risk reviews, audit support, and compliance-ready documentation.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=70",
      to: "/services/business-consulting/internal-audit-governance",
      points: [
        { icon: FaShieldAlt, text: "Controls & risk assessment" },
        { icon: FaBalanceScale, text: "Governance & compliance" },
      ],
    },
    {
      title: "SOP Drafting & Documentation",
      subtitle: "Standardize operations",
      description:
        "Document SOPs that reduce dependency, improve consistency, and make execution measurable and repeatable.",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=70",
      to: "/services/business-consulting/sop-drafting-documentation",
      points: [
        { icon: FaFileAlt, text: "SOPs & policies" },
        { icon: FaClipboardList, text: "Process documentation" },
      ],
    },
  ];

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
            Business Consulting
          </div>

          <h1
            className="heading-2 text-gradient"
            style={{ marginBottom: "1.25rem" }}
          >
            Build Strong Foundations for Growth
          </h1>

          <p
            className="desc"
            style={{ maxWidth: "42rem", margin: "0 auto", color: "#475569" }}
          >
            Our business consulting services help organizations build strong
            foundations, improve governance, enhance efficiency, and enable
            data-driven decision-making across every stage of growth.
          </p>
        </div>

        {/* 5 cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            alignItems: "stretch",
            maxWidth: "80rem",
            margin: "0 auto",
          }}
        >
          {cards.map((card) => (
            <article key={card.title} className="service-showcase-card">
              <div
                className="service-showcase-media"
                style={{ paddingTop: "40%" }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="service-showcase-img"
                />
                <div className="service-showcase-overlay" />
              </div>

              <div className="service-showcase-body">
                <h3
                  className="service-showcase-title"
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#111827",
                  }}
                >
                  {card.title}
                </h3>

                <p
                  className="service-showcase-subtitle"
                  style={{ color: "#455bc8", fontWeight: 600 }}
                >
                  {card.subtitle}
                </p>

                <p
                  className="desc"
                  style={{
                    marginTop: "0.75rem",
                    fontSize: "0.9rem",
                    color: "#475569",
                  }}
                >
                  {card.description}
                </p>

                {/* Key points */}
                <div
                  style={{ marginTop: "1rem", display: "grid", gap: "0.55rem" }}
                >
                  {card.points.map((p) => (
                    <KeyPoint key={p.text} icon={p.icon} text={p.text} />
                  ))}
                </div>

                <div style={{ marginTop: "1.1rem" }}>
                  <Link
                    to={card.to}
                    className="service-showcase-cta"
                    style={{ color: "#455bc8", fontWeight: 700 }}
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

const KeyPoint = ({ icon: Icon, text }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
      <span
        className="service-showcase-iconbox"
        style={{
          width: 30,
          height: 30,
          background: "rgba(69, 91, 200, 0.08)",
          color: "#455bc8",
          borderRadius: "8px",
        }}
      >
        <Icon size={14} />
      </span>
      <span style={{ fontSize: "0.88rem", fontWeight: 400, color: "#475569" }}>
        {text}
      </span>
    </div>
  );
};

export default Consulting;
