import { Link } from "react-router-dom";
import {
  FaChartBar,
  FaDollarSign,
  FaUsers,
  FaShieldAlt,
  FaFileAlt,
  FaCogs,
  FaBrain,
  FaChartLine,
  FaLaptopCode,
  FaComments,
} from "react-icons/fa";
import "../components/GlassLayout.css";

const Services = () => {
  const cards = [
    {
      title: "Business Consulting",
      subtitle: "Operations, finance, governance",
      description:
        "Build strong, repeatable systems—better controls, clearer metrics, and smoother execution across teams.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=70",
      to: "/consulting",
      points: [
        { icon: FaDollarSign, text: "Accounting & finance systems" },
        { icon: FaShieldAlt, text: "Audit, governance & SOPs" },
      ],
    },
    {
      title: "vCIO / vCFO Advisory",
      subtitle: "Leadership without full-time cost",
      description:
        "CIO/CFO-level thinking for planning, controls, reporting, and decision systems—without the overhead.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=70",
      to: "/vcio-vcfo",
      points: [
        { icon: FaBrain, text: "Technology roadmap & governance" },
        { icon: FaChartLine, text: "Financial reporting & forecasting" },
      ],
    },
    {
      title: "IT Development",
      subtitle: "Web apps, automation, AI",
      description:
        "Full‑stack engineering aligned to strategy—build fast, integrate smart, and scale confidently.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=70",
      to: "/it-development",
      points: [
        { icon: FaLaptopCode, text: "Web & internal tools" },
        { icon: FaComments, text: "AI chatbots & automation" },
      ],
    },
  ];

  return (
    <main className="bg-accent1 section-padding" style={{ position: "relative" }}>
      <div className="bg-radial-overlay" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />

      <div className="wrapper" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ maxWidth: "60rem", margin: "0 auto 3rem", textAlign: "center" }}>
          <div className="gradient-rounded-text-box" style={{ marginBottom: "1.5rem" }}>
            Our Services
          </div>

          <h1 className="heading-2 text-gradient" style={{ marginBottom: "1.25rem" }}>
            Services Built for Growth & Execution
          </h1>

          <p className="desc" style={{ margin: 0 }}>
            Choose a service track below—each one is designed to improve clarity, control, and delivery.
          </p>
        </div>

        {/* Cards grid (same style used in VCIOVCFO/Consulting) */}
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
          {cards.map((card) => (
            <article key={card.title} className="service-showcase-card">
              <div className="service-showcase-media" style={{ paddingTop: "32%" }}>
                <img src={card.image} alt={card.title} className="service-showcase-img" />
                <div className="service-showcase-overlay" />
              </div>

              <div className="service-showcase-body">
                <h3
                  className="service-showcase-title"
                  style={{ fontSize: "25px", fontWeight: 400, lineHeight: 1.2 }}
                >
                  {card.title}
                </h3>

                <p className="service-showcase-subtitle">{card.subtitle}</p>

                <p className="desc" style={{ marginTop: "0.75rem" }}>
                  {card.description}
                </p>

                {/* Key points */}
                <div style={{ marginTop: "1rem", display: "grid", gap: "0.55rem" }}>
                  {card.points.map((p) => (
                    <KeyPoint key={p.text} icon={p.icon} text={p.text} />
                  ))}
                </div>

                <div style={{ marginTop: "1.1rem" }}>
                  <Link to={card.to} className="service-showcase-cta">
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Optional: simple note */}
        <div style={{ maxWidth: "60rem", margin: "2.25rem auto 0", textAlign: "center" }}>
          <p className="desc" style={{ margin: 0 }}>
            Want a custom package? Combine services into a practical roadmap with execution support.
          </p>
        </div>
      </div>
    </main>
  );
};

const KeyPoint = ({ icon: Icon, text }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
      <span className="service-showcase-iconbox" style={{ width: 30, height: 30 }}>
        <Icon size={14} />
      </span>
      <span style={{ fontSize: "0.92rem", fontWeight: 400, color: "var(--Zenrax-muted)" }}>
        {text}
      </span>
    </div>
  );
};

export default Services;
