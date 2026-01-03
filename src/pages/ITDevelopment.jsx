import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaRobot,
  FaGlobe,
  FaShoppingCart,
  FaChartLine,
  FaApple,
  FaAndroid,
  FaReact,
  FaCogs,
  FaComments,
  FaHeadset,
} from "react-icons/fa";
import "../components/GlassLayout.css";

const ITDevelopment = () => {
  const cards = [
    {
      title: "Web Development",
      subtitle: "From Websites to Web Apps",
      description:
        "From responsive websites to complex web applications, we create digital experiences that captivate your audience and drive business growth.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=70",
      cta: "Explore Web Development",
      to: "/contact",
      items: [
        {
          icon: FaShoppingCart,
          title: "E-commerce Development",
          text: "Build and scale your online store with custom features that enhance the shopping experience.",
        },
        {
          icon: FaGlobe,
          title: "Responsive Web Design",
          text: "Mobile-optimized websites that look great on any device for a seamless experience.",
        },
      ],
    },
    {
      title: "Mobile App Development",
      subtitle: "Native & Cross‑Platform Apps",
      description:
        "We build native and cross-platform mobile apps that connect you with your customers wherever they are, delivering exceptional user experiences.",
      image:
        "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1400&q=70",
      cta: "Explore Mobile App Development",
      to: "/contact",
      items: [
        {
          icon: FaApple,
          title: "Native iOS Development",
          text: "Swift-based iOS apps engineered for performance, quality, and platform best practices.",
        },
        {
          icon: FaReact,
          title: "Cross‑Platform Apps",
          text: "React Native apps to ship faster with consistent UX across iOS and Android.",
        },
      ],
    },
    {
      title: "AI Development",
      subtitle: "Chatbots, Voicebots & Automation",
      description:
        "We integrate AI into your workflows to reduce support load, improve conversion, and unlock automation across business operations.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=70",
      cta: "Explore AI Development",
      to: "/contact",
      items: [
        {
          icon: FaComments,
          title: "AI Chatbots",
          text: "Support, lead capture, and internal assistants connected to your data and tools.",
        },
        {
          icon: FaCogs,
          title: "Automations & Integrations",
          text: "Workflow automation with APIs, CRMs, ticketing tools, and custom dashboards.",
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
            IT Development
          </div>

          <h1 className="heading-2 text-gradient" style={{ marginBottom: "1.25rem" }}>
            Engineering That Follows the Strategy
          </h1>

          <p className="desc" style={{ margin: 0 }}>
            PHPD delivers full‑stack web applications, internal tools, and integrations anchored to clearly defined
            business and finance outcomes.
          </p>
        </div>

        {/* Cards */}
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

export default ITDevelopment;
