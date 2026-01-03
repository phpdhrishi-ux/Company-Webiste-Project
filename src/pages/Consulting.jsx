import { Link } from "react-router-dom";
import {
  FaUsers,
  FaChartBar,
  FaShieldAlt,
  FaRocket,
  FaClock,
  FaBullseye,
  FaTabletAlt,
  FaFileAlt,
  FaCheckCircle,
  FaHeadset,
  FaDollarSign,
  FaExchangeAlt,
} from "react-icons/fa";
import "../components/GlassLayout.css";

const Consulting = () => {
  const cards = [
    {
      title: "Business Consulting",
      subtitle: "Operations, Finance, Systems",
      description:
        "We optimize your business operations, finance visibility, and scalable systems. Clear financials, reduced costs, and scalable growth.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1400&q=70",
      cta: "Explore Business Consulting",
      to: "/contact",
      items: [
        {
          icon: FaChartBar,
          title: "Business Operations",
          text: "Process optimization, workflow redesign, and scalable operations frameworks.",
        },
        {
          icon: FaDollarSign,
          title: "Finance & Accounting",
          text: "Financial dashboards, budgeting tools, and automated reporting systems.",
        },
      ],
    },
    {
      title: "HR Management",
      subtitle: "Talent, Performance, Culture",
      description:
        "From talent acquisition to performance management, we design HR systems that scale with your growth and align with business strategy.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=70",
      cta: "Explore HR Management",
      to: "/contact",
      items: [
        {
          icon: FaUsers,
          title: "Talent Acquisition",
          text: "Strategic hiring, candidate pipelines, and employer branding systems.",
        },
        {
          icon: FaRocket,
          title: "Performance Management",
          text: "OKR frameworks, 360 reviews, and growth tracking dashboards.",
        },
      ],
    },
    {
      title: "Growth Consulting",
      subtitle: "Strategy, Revenue, Scale",
      description:
        "Revenue growth frameworks, customer retention systems, and scalable business models designed for your industry and stage.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=70",
      cta: "Explore Growth Consulting",
      to: "/contact",
      items: [
        {
          icon: FaBullseye,
          title: "Revenue Strategy",
          text: "Customer acquisition, pricing models, and revenue optimization frameworks.",
        },
        {
          icon: FaExchangeAlt,
          title: "Customer Retention",
          text: "Loyalty programs, churn analysis, and lifetime value maximization.",
        },
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
            Consulting
          </div>

          <h1 className="heading-2 text-gradient" style={{ marginBottom: "1.25rem" }}>
            One Partner for Strategy & Execution
          </h1>

          <p className="desc" style={{ margin: 0 }}>
            PHPD's consulting track focuses on designing the right growth model, operating system, and metrics stack for
            your company. Then the tech and financial systems are implemented to support that design.
          </p>
        </div>

        {/* Cards - EXACT same layout as ITDevelopment */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.6rem",
            alignItems: "stretch",
          }}
        >
          {cards.map((card) => (
            <article key={card.title} className="service-showcase-card">
              {/* Image header */}
              <div className="service-showcase-media">
                <img src={card.image} alt={`${card.title} cover`} className="service-showcase-img" />
                <div className="service-showcase-overlay" />
              </div>

              {/* Body */}
              <div className="service-showcase-body">
                <h3 className="service-showcase-title">{card.title}</h3>
                <p className="service-showcase-subtitle">{card.subtitle}</p>

                <p className="desc" style={{ marginTop: "0.9rem" }}>
                  {card.description}
                </p>

                <div style={{ marginTop: "1.4rem" }}>
                  <div className="service-showcase-key-label">Key Services:</div>

                  <div style={{ display: "grid", gap: "1rem", marginTop: "0.9rem" }}>
                    {card.items.map((it) => (
                      <KeyRow key={it.title} icon={it.icon} title={it.title} text={it.text} />
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: "1.5rem" }}>
                  <Link to={card.to} className="service-showcase-cta">
                    {card.cta} <span className="service-showcase-cta-arrow">»</span>
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

// Same KeyRow component (reuse from ITDevelopment)
const KeyRow = ({ icon: Icon, title, text }) => (
  <div className="service-showcase-keyrow">
    <span className="service-showcase-iconbox">
      <Icon size={16} />
    </span>

    <div>
      <div className="service-showcase-keytitle">{title}</div>
      <div className="service-showcase-keytext">{text}</div>
    </div>
  </div>
);

export default Consulting;
