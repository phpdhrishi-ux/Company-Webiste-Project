import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBrain,
  FaRocket,
  FaHandshake,
  FaUserCircle,
} from "react-icons/fa";
import "../components/GlassLayout.css";

const Home = () => {
  const testimonials = [
    {
      name: "Mahavir Khater",
      role: "Director, Buildbloc Square Bricks Pvt Ltd",
      feedback:
        "We entrusted PHPD Hiring and Staffing Private Limited with the web design and development of our venture, and the results have been outstanding. Their team delivered a sleek, user-friendly website tailored to our requirements.",
    },
    {
      name: "Akash Kandharkar",
      role: "Founder, SudhaKamal IT Solutions Pvt Ltd",
      feedback:
        "Partnering with PHPD Hiring and Staffing Private Limited has been a game-changer. Their team supported us in finding the right talent quickly and also provided reliable IT solutions.",
    },
    {
      name: "Yash Garje",
      role: "Director, Balaji Packaging Pvt Ltd",
      feedback:
        "We partnered with PHPD for a custom software solution to manage our factory's inventory and production process. The results have been excellent. Their team delivered a user-friendly, efficient system.",
    },
  ];

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

    hero.addEventListener("pointermove", handleMove);
    return () => hero.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="phpd-hero"
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          background: "radial-gradient(900px 520px at 15% 10%, rgba(124,58,237,0.12), transparent 60%), radial-gradient(900px 520px at 85% 0%, rgba(34,211,238,0.10), transparent 60%), #fafbff",
          padding: "4rem 1rem 2rem",
        }}
      >
        <div className="phpd-spotlight" />
        <div
          style={{
            position: "absolute",
            inset: "10% 6%",
            borderRadius: "32px",
            backgroundImage: "linear-gradient(to right, rgba(226,232,240,0.65) 1px, transparent 1px), linear-gradient(to bottom, rgba(226,232,240,0.65) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.35,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "calc(100vh - 6rem)",
            textAlign: "center",
            gap: "1.5rem",
          }}
        >
          <div style={{ maxWidth: "72rem", width: "100%" }}>
            <div className="gradient-rounded-text-box" style={{ margin: "0 auto 1.35rem", maxWidth: "fit-content", fontSize: "0.9rem" }}>
              Strategic Business Consulting, HRM, Internal Audit & Technology Solutions
            </div>

            <h1 className="heading-1 text-gradient" style={{ margin: 0, fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 700, lineHeight: 1.1 }}>
              Helping Businesses Build Structure, Control, and Scalable Growth
            </h1>

            <p className="desc" style={{ margin: "1.5rem auto", maxWidth: "46rem", fontSize: "clamp(1rem, 2.5vw, 1.15rem)" }}>
              Integrated Consulting for Strategy, People, Process, and Technology
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginTop: "2rem" }}>
              <Link
                to="/contact"
                className="primary-btn"
                style={{
                  padding: "0.6rem 2.5rem",
                  minWidth: "260px",
                  borderRadius: "9999px",
                  fontSize: "0.95rem",
                  background: "linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)",
                  boxShadow: "0 4px 15px rgba(124, 58, 237, 0.3)",
                  border: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Start a Strategic Consultation Today
              </Link>
              <Link
                to="/services"
                style={{
                  padding: "0.6rem 2.5rem",
                  minWidth: "260px",
                  borderRadius: "9999px",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                  border: "2px solid #7c3aed",
                  color: "#7c3aed",
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  backdropFilter: "blur(8px)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#7c3aed";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
                  e.currentTarget.style.color = "#7c3aed";
                }}
              >
                Our Consulting & Technology Services
              </Link>
            </div>

            <div style={{ marginTop: "3rem", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
              <HeroStat icon={FaBrain} label="Integrated consulting" value="Strategy, people & process" />
              <HeroStat icon={FaRocket} label="Governance & control" value="SOPs & compliance readiness" />
              <HeroStat icon={FaHandshake} label="Long-term partner" value="Scalable systems for SMEs" />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION - ADDED AS IT WAS */}
      <section className="bg-accent2 section-padding">
        <div className="wrapper">
          <div className="grid-2" style={{ alignItems: "flex-end", gap: "3rem" }}>
            <div style={{ maxWidth: "32rem" }}>
              <div className="gradient-rounded-text-box" style={{ marginBottom: "1.5rem" }}>Intro</div>
              <h2 className="heading-2 text-gradient" style={{ marginBottom: "2rem" }}>
                Integrated Consulting for Strategy, People, Process, and Technology
              </h2>
              <p className="desc" style={{ marginBottom: "1.25rem", lineHeight: 1.7 }}>
                PHPD helps businesses build structure and confidence through strategy, governance, documentation,
                finance control, and technology delivery—so growth stays compliant, repeatable, and scalable.
              </p>
              <ul className="desc" style={{ paddingLeft: "1.1rem", margin: 0, lineHeight: 1.65 }}>
                <li>Integrated consulting across Strategy, People, Process & Technology</li>
                <li>Strong focus on Governance, HR, SOPs & Audit</li>
                <li>Long-term advisory partnership approach</li>
              </ul>
            </div>

            <div style={{ height: "22rem", position: "relative" }}>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Team collaborating"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "50% 100%",
                  borderRadius: "1.25rem",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SHOWCASE */}
      <section className="bg-accent1 section-padding" style={{ position: "relative" }}>
        <div className="wrapper">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="heading-2 text-gradient">Our Consulting & Technology Services</h2>
            <p className="desc" style={{ maxWidth: "44rem", margin: "0 auto" }}>
              Build your business with structure and confidence across every growth stage.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            <ShowcaseCard
              title="Business Consulting"
              subtitle="Strategy, HRM & Governance"
              image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
              description="Build clear processes, role clarity, and strong controls to stay disciplined as you scale."
              to="/services/business-consulting/accounting-finance"
            />
            <ShowcaseCard
              title="IT Development"
              subtitle="Custom Software & Cloud"
              image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800"
              description="Modern, responsive applications engineered for performance, stability, and growth."
              to="/services/it-development/digital-solutions"
            />
            <ShowcaseCard
              title="vCIO & vCFO"
              subtitle="Strategic Leadership"
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800"
              description="Executive advisory support to improve decisions, governance, and financial visibility."
              to="/services/vcio-vcfo/vcfo"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SLIDER - SMOOTHER ANIMATION */}
      <section className="bg-accent1 section-padding" style={{ overflow: "hidden" }}>
        <div className="wrapper">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
             <div className="gradient-rounded-text-box" style={{ margin: "0 auto 1.25rem" }}>Testimonials</div>
            <h2 className="heading-2 text-gradient">What Our Clients Say</h2>
          </div>
          
          <div style={{ display: "flex", width: "fit-content", gap: "1.5rem", animation: "scroll-left 60s linear infinite" }}>
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
        `}</style>
      </section>
    </>
  );
};

const HeroStat = ({ icon: Icon, label, value }) => (
  <div style={{
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0.75rem 1.25rem",
    background: "white",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
    minWidth: "250px"
  }}>
    <div style={{ background: "linear-gradient(135deg, #7c3aed, #4c1d95)", padding: "8px", borderRadius: "8px", color: "white" }}>
      <Icon size={18} />
    </div>
    <div style={{ textAlign: "left" }}>
      <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>{label}</div>
      <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>{value}</div>
    </div>
  </div>
);

const ShowcaseCard = ({ title, subtitle, image, description, to }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="card" 
      style={{ 
        display: "flex", flexDirection: "column", padding: 0, overflow: "hidden", borderRadius: "16px",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.3s ease",
        boxShadow: isHovered ? "0 12px 24px rgba(0,0,0,0.1)" : "0 4px 12px rgba(0,0,0,0.05)"
      }}>
      <img src={image} alt={title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{ margin: 0, fontSize: "1.4rem" }}>{title}</h3>
        <p style={{ color: "#7c3aed", fontWeight: 600, fontSize: "0.9rem", marginBottom: "1rem" }}>{subtitle}</p>
        <p style={{ fontSize: "0.95rem", color: "#4b5563", marginBottom: "1.5rem" }}>{description}</p>
        <Link to={to} className="primary-btn" style={{ marginTop: "auto", textAlign: "center", borderRadius: "9999px", padding: "0.6rem" }}>
          Read More
        </Link>
      </div>
    </div>
  );
};

const TestimonialCard = ({ t }) => (
  <div style={{
    minWidth: "320px",
    padding: "1.5rem",
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(10px)",
    borderRadius: "12px",
    border: "1px solid rgba(124,58,237,0.1)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.03)"
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
      <FaUserCircle size={40} color="#7c3aed" />
      <div>
        <h4 style={{ margin: 0, fontSize: "0.95rem", color: "#111827" }}>{t.name}</h4>
        <p style={{ margin: 0, fontSize: "0.8rem", color: "#6b7280" }}>{t.role}</p>
      </div>
    </div>
    <p style={{ fontSize: "0.875rem", color: "#4b5563", fontStyle: "italic", lineHeight: 1.6 }}>"{t.feedback}"</p>
  </div>
);

export default Home;