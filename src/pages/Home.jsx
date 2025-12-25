// src/pages/Home.jsx
import { useEffect } from "react";
import { FaBrain, FaRocket, FaHandshake } from "react-icons/fa";
import "../components/GlassLayout.css";

const Home = () => {
  const rotatingServices = [
    "AI Strategy & Automation",
    "vCIO / vCFO Leadership",
    "Full‑stack Product Delivery",
    "Ops Dashboards & Tooling",
  ];

  // cursor-follow spotlight effect
  useEffect(() => {
    const hero = document.getElementById("phpd-hero");
    const spotlight = document.querySelector(".phpd-spotlight");
    if (!hero || !spotlight) return;

    const handleMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      spotlight.style.setProperty("--x", `${x}%`);
      spotlight.style.setProperty("--y", `${y}%`);
    };

    const handleLeave = () => {
      spotlight.style.setProperty("--x", "50%");
      spotlight.style.setProperty("--y", "50%");
    };

    hero.addEventListener("pointermove", handleMove);
    hero.addEventListener("pointerleave", handleLeave);
    return () => {
      hero.removeEventListener("pointermove", handleMove);
      hero.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section
        id="phpd-hero"
        className="relative"
        style={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#ffffff",
        }}
      >
        {/* cursor-follow spotlight */}
        <div
          className="phpd-spotlight"
          style={{
            position: "absolute",
            inset: "-40%",
            pointerEvents: "none",
            background:
              "radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(124,58,237,0.16), transparent 55%), radial-gradient(circle at calc(100% - var(--x,50%)) calc(100% - var(--y,50%)), rgba(56,189,248,0.10), transparent 60%)",
            mixBlendMode: "multiply",
            transition: "background-position 0.15s ease-out",
            zIndex: 0,
          }}
        />

        {/* subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: "10% 6%",
            borderRadius: "32px",
            backgroundImage:
              "linear-gradient(to right, rgba(226,232,240,0.9) 1px, transparent 1px), linear-gradient(to bottom, rgba(226,232,240,0.9) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.6,
            zIndex: 0,
          }}
        />

        {/* content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 1.5rem",
          }}
        >
          <div style={{ maxWidth: "72rem", textAlign: "center" }}>
            {/* gradient pill like About Us */}
            <div
              className="gradient-rounded-text-box"
              style={{
                margin: "0 auto 1.25rem",
                maxWidth: "fit-content",
                paddingInline: "1.4rem",
              }}
            >
              AI &amp; Business Consultancy
            </div>

            {/* main heading using text-gradient */}
            <h1
              className="heading-1 text-gradient"
              style={{ marginBottom: "0.6rem" }}
            >
              Design. Align. Scale.
            </h1>

            {/* rotating services line */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.35rem",
                alignItems: "center",
                marginBottom: "1.6rem",
                fontSize: "0.95rem",
                color: "#4B5563",
              }}
            >
              <span style={{ opacity: 0.85 }}>AI‑first partner for</span>
              <div
                style={{
                  position: "relative",
                  height: "1.4em",
                  overflow: "hidden",
                  minWidth: "15rem",
                  textAlign: "left",
                }}
              >
                {rotatingServices.map((item, index) => (
                  <span
                    key={item}
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: "100%",
                      opacity: 0,
                      color: "#7C3AED",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      animation: `heroRotate ${
                        rotatingServices.length * 2.4
                      }s linear infinite`,
                      animationDelay: `${index * 2.4}s`,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <p className="desc" style={{ marginBottom: "2rem" }}>
              PHPD connects consulting, virtual CIO/CFO leadership, and
              full‑stack development into one execution system — so your
              business scales without chaos.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                marginBottom: "2.4rem",
              }}
            >
              <a href="/contact" className="primary-btn">
                Book Strategy Call
              </a>
              <a href="/services" className="secondary-btn">
                Explore Services
              </a>
            </div>

            {/* experience stats */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1.5rem",
                fontSize: "0.9rem",
              }}
            >
              <HeroStat
                icon={<FaBrain size={20} />}
                label="AI‑driven roadmaps"
                value="Strategy + execution in one stack"
              />
              <HeroStat
                icon={<FaRocket size={20} />}
                label="Ships, not slides"
                value="Dashboards, automations & tools in production"
              />
              <HeroStat
                icon={<FaHandshake size={20} />}
                label="Founder‑side partner"
                value="Decisions tied to P&L, not vanity metrics"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP (unchanged) */}
      <section className="bg-accent2 section-padding">
        <div className="wrapper grid-2" style={{ alignItems: "center" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <div className="gradient-rounded-text-box">About Us</div>
            <h2
              className="heading-2 text-gradient"
              style={{ marginBottom: "1rem" }}
            >
              Strategic Digital &amp; Business Partner
            </h2>
            <p className="desc">
              PHPD connects business design, finance, and engineering into one
              execution system. Instead of random tools, you get a roadmap that
              covers growth, systems, and visibility.
            </p>
            <ul
              className="desc"
              style={{ paddingLeft: "1.25rem", margin: 0 }}
            >
              <li>Integrated consulting + tech &amp; finance execution</li>
              <li>Productised vCIO / vCFO offerings</li>
              <li>Custom internal tools and automation for ops</li>
            </ul>
          </div>
          <div style={{ position: "relative", minHeight: "260px" }}>
            <img
              src="https://www.alfoxai.com/static/media/landing-aboutus.44bb40d04a00c4a82dc5.webp"
              alt="Team"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1rem",
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
              }}
            />
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW (unchanged) */}
      <section
        className="bg-accent1 section-padding"
        style={{ position: "relative" }}
      >
        <div
          className="bg-radial-overlay"
          style={{ position: "absolute", inset: 0, opacity: 0.6 }}
        />
        <div className="wrapper" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div
              className="gradient-rounded-text-box"
              style={{ margin: "0 auto 1.25rem" }}
            >
              Our Specialized Solutions
            </div>
            <h2
              className="heading-2 text-gradient"
              style={{ marginBottom: "1rem" }}
            >
              Comprehensive Digital Services
            </h2>
            <p
              className="desc"
              style={{ maxWidth: "40rem", margin: "0 auto" }}
            >
              From growth consulting to IT delivery, PHPD offers modular
              services that can plug into your current stage and stack.
            </p>
          </div>

          <div className="grid-2">
            <ServiceCard
              title="Business & Growth Consulting"
              description="Clarify offers, pricing, funnels, and operations so execution becomes repeatable instead of hero‑based."
              bullets={[
                "Positioning & offer design",
                "Sales & ops workflows",
                "Metrics & review cadence",
              ]}
            />
            <ServiceCard
              title="Virtual CIO (vCIO)"
              description="Technology leadership without a full‑time hire. Architecture, tools, and automation aligned with the P&L."
              bullets={[
                "IT roadmap & stack",
                "Security & compliance view",
                "Automation & integration strategy",
              ]}
            />
            <ServiceCard
              title="Virtual CFO (vCFO)"
              description="Get real‑time visibility into cash, runway, and unit economics so decisions stay calm and data‑driven."
              bullets={[
                "Forecasting & budgeting",
                "Management dashboards",
                "Finance process design",
              ]}
            />
            <ServiceCard
              title="Software & Automation"
              description="Internal tools, admin portals, and automations that remove repetitive manual work from your core team."
              bullets={[
                "Internal dashboards",
                "Custom admin portals",
                "Ops automation flows",
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
};

const HeroStat = ({ icon, label, value }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.6rem",
      padding: "0.6rem 0.9rem",
      borderRadius: "999px",
      background: "rgba(248,250,252,0.96)",
      border: "1px solid rgba(209,213,219,0.9)",
      minWidth: "210px",
      justifyContent: "flex-start",
    }}
  >
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "30px",
        height: "30px",
        borderRadius: "999px",
        background:
          "linear-gradient(135deg, #4c1d95, #7c3aed, #22d3ee)",
        color: "#F9FAFB",
      }}
    >
      {icon}
    </span>
    <div style={{ textAlign: "left" }}>
      <div style={{ fontWeight: 600, fontSize: "0.85rem", color: "#111827" }}>
        {label}
      </div>
      <div style={{ fontSize: "0.8rem", color: "#4B5563" }}>{value}</div>
    </div>
  </div>
);

const ServiceCard = ({ title, description, bullets }) => (
  <article className="card">
    <h3
      className="heading-3"
      style={{ marginBottom: "0.75rem", fontWeight: 600 }}
    >
      {title}
    </h3>
    <p className="desc" style={{ marginBottom: "1rem" }}>
      {description}
    </p>
    <ul className="desc" style={{ paddingLeft: "1.1rem" }}>
      {bullets.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  </article>
);

export default Home;
