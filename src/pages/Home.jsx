import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBrain,
  FaRocket,
  FaHandshake,
  FaMobileAlt,
  FaLaptopCode,
  FaRobot,
  FaChartLine,
  FaCalculator,
  FaUsers,
} from "react-icons/fa";
import "../components/GlassLayout.css";

const Home = () => {
  const rotatingServices = [
    "IT Strategy & Automation",
    "vCIO/vCTO Leadership",
    "Fullstack Product Delivery",
    "Ops Dashboards & Tooling",
  ];

  // Cursor-follow spotlight (same idea as your existing Home)
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
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(900px 520px at 15% 10%, rgba(124,58,237,0.12), transparent 60%), radial-gradient(900px 520px at 85% 0%, rgba(34,211,238,0.10), transparent 60%), #fafbff",
        }}
      >
        {/* Cursor glow */}
        <div className="phpd-spotlight" />

        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: "10% 6%",
            borderRadius: "32px",
            backgroundImage:
              "linear-gradient(to right, rgba(226,232,240,0.65) 1px, transparent 1px), linear-gradient(to bottom, rgba(226,232,240,0.65) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.35,
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 1.25rem",
          }}
        >
          <div className="wrapper" style={{ maxWidth: "72rem" }}>
            <div style={{ textAlign: "center", maxWidth: "62rem", margin: "0 auto" }}>
              <div
                className="gradient-rounded-text-box"
                style={{
                  margin: "0 auto 1.35rem",
                  maxWidth: "fit-content",
                  paddingInline: "1.5rem",
                }}
              >
                Strategic Business Consulting, HRM, Internal Audit & Technology Solutions
              </div>

              <h1
                className="heading-1 text-gradient"
                data-text="Helping Businesses Build Structure, Control, and Scalable Growth"
                style={{
                  margin: 0,
                  fontSize: "clamp(2.4rem, 5.2vw, 5rem)",
                  fontWeight: 800,
                  lineHeight: 1.06,
                  letterSpacing: "-0.02em",
                }}
              >
                Helping Businesses Build Structure, Control, and Scalable Growth
              </h1>

              {/* Built for + rotating text (NO conflict)
              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.6rem",
                  flexWrap: "wrap",
                  color: "#4B5563",
                  fontSize: "1.05rem",
                }}
              >
                <span style={{ opacity: 0.95 }}>Built for</span>

                <span
                  style={{
                    position: "relative",
                    height: "1.55em",
                    overflow: "hidden",
                    width: "min(22rem, 90vw)",
                    display: "inline-block",
                    verticalAlign: "bottom",
                  }}
                >
                  {rotatingServices.map((item, index) => (
                    <span
                      key={item}
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        transform: "translateY(120%)",
                        opacity: 0,
                        color: "#7C3AED",
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                        textAlign: "center",
                        animation: `heroSwap ${rotatingServices.length * 2.6}s ease-in-out infinite`,
                        animationDelay: `${index * 2.6}s`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </span>
              </div> */}

              <p className="desc" style={{ margin: "1.2rem auto 0", maxWidth: "46rem" }}>
                Integrated Consulting for Strategy, People, Process, and Technology
              </p>

              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.9rem",
                  flexWrap: "wrap",
                }}
              >
                <Link to="/contact" className="primary-btn" style={{ padding: "0.95rem 2.1rem" }}>
                  Start a Strategic Consultation Today
                </Link>
                <Link to="/services" className="secondary-btn" style={{ padding: "0.95rem 2.1rem" }}>
                  Our Consulting & Technology Services
                </Link>
              </div>

              <div
                style={{
                  marginTop: "1.6rem",
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.9rem",
                  flexWrap: "wrap",
                  color: "#6B7280",
                  fontSize: "0.92rem",
                }}
              >
                <span
                  style={{
                    padding: "0.45rem 0.9rem",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.65)",
                    border: "1px solid rgba(226,232,240,0.9)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Pune, India • Remote delivery
                </span>
                <span
                  style={{
                    padding: "0.45rem 0.9rem",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.65)",
                    border: "1px solid rgba(226,232,240,0.9)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Typical response: 24–48 hours
                </span>
              </div>

              <div
                style={{
                  marginTop: "2.2rem",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <HeroStat
                  icon={FaBrain}
                  label="Integrated consulting"
                  value="Strategy, people, process & technology"
                />
                <HeroStat
                  icon={FaRocket}
                  label="Governance & control"
                  value="HR, SOPs, audit & compliance readiness"
                />
                <HeroStat
                  icon={FaHandshake}
                  label="Long-term advisory partner"
                  value="Scalable systems for startups & SMEs"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP (aligned, minimal shadow) */}
      <section className="bg-accent2 section-padding">
        <div className="wrapper">
          <div className="grid-2" style={{ alignItems: "center", gap: "3rem" }}>
            <div>
              <div className="gradient-rounded-text-box" style={{ marginBottom: "1.25rem" }}>
                Intro
              </div>
              <h2 className="heading-2 text-gradient" style={{ marginBottom: "1rem" }}>
                Integrated Consulting for Strategy, People, Process, and Technology
              </h2>
              <p className="desc" style={{ marginBottom: "1rem" }}>
                PHPD helps businesses build structure and confidence through strategy, governance, documentation,
                finance control, and technology delivery—so growth stays compliant, repeatable, and scalable.
              </p>
              <ul className="desc" style={{ paddingLeft: "1.1rem", margin: 0 }}>
                <li>Integrated consulting across Strategy, People, Process & Technology</li>
                <li>Strong focus on Governance, HR, SOPs & Audit</li>
                <li>Long-term advisory partnership approach</li>
              </ul>
            </div>

            <div style={{ position: "relative", minHeight: "280px" }}>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Team collaborating on product and engineering"
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "280px",
                  objectFit: "cover",
                  borderRadius: "1.25rem",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (2 main cards like your reference) */}
      <section className="bg-accent1 section-padding" style={{ position: "relative" }}>
        <div className="bg-radial-overlay" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />

        <div className="wrapper" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="gradient-rounded-text-box" style={{ margin: "0 auto 1.25rem" }}>
              Our Consulting & Technology Services
            </div>
            <h2 className="heading-2 text-gradient" style={{ marginBottom: "0.75rem" }}>
              Our Consulting & Technology Services
            </h2>
            <p className="desc" style={{ maxWidth: "44rem", margin: "0 auto" }}>
              Build your business with structure and confidence—across strategy, people, compliance, finance controls,
              governance, and digital execution.
            </p>
          </div>

          {/* Responsive 2-col grid (stacks on mobile) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
              alignItems: "stretch",
            }}
          >
            <ShowcaseCard
              title="Business Consulting"
              subtitle="Strategy, HRM, Audit, SOPs, Finance & Governance"
              image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=70"
              description="Structured consulting for sustainable and compliant growth—build clear processes, role clarity, strong controls, and decision-ready numbers."
              to="/consulting"
              cta="Explore Business Consulting"
              keyServices={[
                {
                  icon: FaChartLine,
                  title: "Business Strategy & Operations",
                  text: "Business strategy, growth planning, and operational optimization for consistent execution.",
                },
                {
                  icon: FaUsers,
                  title: "HRM & People Process Consulting",
                  text: "HR policy design, lifecycle processes, onboarding, and performance management frameworks.",
                },
                {
                  icon: FaHandshake,
                  title: "Internal Audit & Governance",
                  text: "Strengthening internal controls, risk mitigation, and governance frameworks for stability.",
                },
                // {
                //   icon: FaBrain,
                //   title: "SOP Drafting & Documentation",
                //   text: "Audit-aligned SOP drafting, policy & procedure development, compliance-ready documentation.",
                // },
                // {
                //   icon: FaCalculator,
                //   title: "Accounting & Finance Consulting",
                //   text: "Budgeting, reporting, profitability insights, and finance controls to stay disciplined.",
                // },
                // {
                //   icon: FaRocket,
                //   title: "vCIO & vCFO Services",
                //   text: "Strategic leadership without full-time overhead—roadmaps, governance, controls, and readiness.",
                // },
              ]}
            />

            <ShowcaseCard
              title="IT Development & Digital Solutions"
              subtitle="Web, Mobile, Automation, AI & Integrations"
              image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=70"
              description="Custom software development that supports growth—web & mobile apps, internal tools, dashboards, AI automations, and system integrations."
              to="/it-development"
              cta="Explore IT Development"
              keyServices={[
                {
                  icon: FaMobileAlt,
                  title: "Web & Mobile Application Development",
                  text: "Modern, responsive apps engineered for performance, stability, and a clean user experience.",
                },
                {
                  icon: FaLaptopCode,
                  title: "Custom Software Development",
                  text: "Internal tools, admin panels, portals, and workflow systems aligned to your operations.",
                },
                {
                  icon: FaRobot,
                  title: "AI & Automation",
                  text: "Chatbots, process automations, and AI-assisted workflows to remove repetitive manual work.",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
};

const HeroStat = ({ icon: Icon, label, value }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      padding: "0.9rem 1rem",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.9)",
      border: "1px solid rgba(209,213,219,0.75)",
      minWidth: "240px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    }}
  >
    <span
      style={{
        display: "inline-flex",
        width: "34px",
        height: "34px",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "999px",
        background: "linear-gradient(135deg, #4c1d95, #7c3aed, #22d3ee)",
        color: "#F9FAFB",
        flexShrink: 0,
      }}
    >
      <Icon size={18} />
    </span>

    <div style={{ textAlign: "left" }}>
      <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#111827" }}>{label}</div>
      <div style={{ fontSize: "0.82rem", color: "#4B5563" }}>{value}</div>
    </div>
  </div>
);

const ShowcaseCard = ({ title, subtitle, image, description, keyServices, to, cta }) => (
  <article
    style={{
      borderRadius: "1.5rem",
      overflow: "hidden",
      background: "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(237,238,245,0.92))",
      border: "1px solid rgba(124,58,237,0.18)",
      boxShadow: "0 10px 26px rgba(2,6,23,0.08)",
      display: "flex",
      flexDirection: "column",
      height: "100%", // ✅ ensures it stretches to the row height in the grid
    }}
  >
    {/* Image header */}
    <div style={{ position: "relative", paddingTop: "40%", overflow: "hidden" }}>
      <img
        src={image}
        alt={`${title} cover`}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "scale(1.02)",
        }}
      />

      {/* Theme overlay (purple tint, not black) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(124,58,237,0.10) 0%, rgba(124,58,237,0.18) 55%, rgba(15,23,42,0.10) 100%)",
        }}
      />

      {/* top glow line */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, rgba(34,211,238,0.0), rgba(124,58,237,0.85), rgba(34,211,238,0.0))",
          opacity: 0.9,
        }}
      />
    </div>

    {/* Body */}
    <div
      style={{
        padding: "1.7rem 1.6rem 1.5rem",
        color: "#0f172a",
        display: "flex",
        flexDirection: "column",
        flex: 1, // ✅ body fills remaining height
      }}
    >
      <h3 style={{ margin: 0, fontSize: "1.8rem", fontWeight: 700, color: "#111827" }}>{title}</h3>
      <p style={{ margin: "0.5rem 0 0", color: "#4b5563", fontWeight: 600 }}>{subtitle}</p>

      <p style={{ marginTop: "1rem", color: "#4b5563", lineHeight: 1.75 }}>{description}</p>

      {/* This block can grow, while button stays bottom */}
      <div style={{ marginTop: "1.4rem" }}>
        <div style={{ fontWeight: 700, color: "#111827", marginBottom: "0.9rem" }}>
          Key Services:
        </div>

        <div style={{ display: "grid", gap: "1rem" }}>
          {keyServices.map(({ icon: Icon, title: t, text }) => (
            <div key={t} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <span
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "12px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(124,58,237,0.22)",
                  color: "#4c1d95",
                  flexShrink: 0,
                }}
              >
                <Icon size={16} />
              </span>

              <div>
                <div style={{ fontWeight: 700, color: "#111827", marginBottom: "0.2rem" }}>{t}</div>
                <div style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.65 }}>{text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Bottom button (forces equal visual height + aligned buttons) */}
      <div style={{ marginTop: "auto", paddingTop: "1.5rem" }}>
        <Link
          to={to}
          className="primary-btn"
          style={{
            width: "100%",
            justifyContent: "center",
            textDecoration: "none",
            padding: "0.95rem 1.4rem",
            borderRadius: "9999px",
          }}
        >
          Read more ↗
        </Link>
      </div>
    </div>
  </article>
);

export default Home;
