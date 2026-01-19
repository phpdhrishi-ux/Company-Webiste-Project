import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaShoppingCart,
  FaMobileAlt,
  FaApple,
  FaReact,
  FaRobot,
  FaComments,
  FaCogs,
  FaLaptopCode,
  FaChartLine,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";
import "../components/GlassLayout.css";

const ITDevelopment = () => {
  const cards = [
    {
      title: "Digital Solutions",
      subtitle: "Web, mobile, automation",
      description:
        "Practical digital solutions built around your business goals—fast delivery, clean UX, and scalable foundations.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=70",
      to: "/services/it-development/digital-solutions",
      points: [
        { icon: FaLaptopCode, text: "Internal tools & dashboards" },
        { icon: FaChartLine, text: "Integrations & workflows" },
      ],
    },
    {
      title: "Custom Software",
      subtitle: "Systems made for you",
      description:
        "Custom software to streamline operations, reduce manual work, and support growth with reliable architecture.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=70",
      to: "/services/it-development/custom-software-development",
      points: [
        { icon: FaCogs, text: "Automation & APIs" },
        { icon: FaShieldAlt, text: "Secure, scalable builds" },
      ],
    },
    {
      title: "Web App Development",
      subtitle: "Websites to web apps",
      description:
        "Responsive websites and modern web apps that load fast, look premium, and convert visitors into customers.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=70",
      to: "/services/it-development/web-app-development",
      points: [
        { icon: FaShoppingCart, text: "E-commerce & portals" },
        { icon: FaGlobe, text: "Responsive UI/UX" },
      ],
    },
    {
      title: "ERP / CRM Development",
      subtitle: "Process & data control",
      description:
        "ERP/CRM solutions that connect teams, track work, improve visibility, and keep operations consistent.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=70",
      to: "/services/it-development/erp-crm-development",
      points: [
        { icon: FaCogs, text: "Modules & workflows" },
        { icon: FaChartLine, text: "Reporting & insights" },
      ],
    },
    {
      title: "Cloud Solutions",
      subtitle: "Deploy, scale, secure",
      description:
        "Cloud-ready systems with secure deployments, monitoring, and performance optimization for scale.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=70",
      to: "/services/it-development/cloud-solutions",
      points: [
        { icon: FaCloud, text: "Cloud deployment & hosting" },
        { icon: FaShieldAlt, text: "Security & monitoring" },
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
            IT Development
          </div>

          <h1 className="heading-2 text-gradient" style={{ marginBottom: "1.25rem" }}>
            Engineering That Follows the Strategy
          </h1>

          <p className="desc" style={{ margin: 0 }}>
            Zenrax delivers full‑stack web applications, internal tools, and integrations anchored to clearly defined
            business and finance outcomes.
          </p>
        </div>

        {/* 5 cards => 3 + 2 rows naturally on desktop */}
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
      <span style={{ fontSize: "0.92rem", fontWeight: 400, color: "var(--Zenrax-muted)" }}>{text}</span>
    </div>
  );
};

export default ITDevelopment;
