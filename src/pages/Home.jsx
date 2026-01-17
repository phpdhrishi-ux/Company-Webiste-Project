import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaBrain,
  FaRocket,
  FaHandshake,
  FaUserCircle,
} from "react-icons/fa";
import homePageMeeting from "../assets/home_page_meeting.png";
import "../components/GlassLayout.css";


const Home = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by one full card width
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
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
            Consulting • HRM • Audit • Technology
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
      height: "52px", // Fixed height for consistency
      padding: "0 2.5rem", // Removed vertical padding to let height/flex handle it
      minWidth: "280px",
      borderRadius: "9999px",
      fontSize: "0.95rem",
      background: "linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)",
      boxShadow: "0 4px 15px rgba(124, 58, 237, 0.3)",
      border: "2px solid transparent", // Added transparent border to match total height of the second button
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      color: "#ffffff",
      boxSizing: "border-box" // Ensures border is included in height
    }}
  >
    Start a Strategic Consultation Today
  </Link>
  
  <Link
    to="/services"
    style={{
      height: "52px", // Matching fixed height
      padding: "0 2.5rem",
      minWidth: "280px",
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
      boxSizing: "border-box"
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
<section className="bg-accent2" style={{ padding: "4rem 0 1rem 0" }}> {/* Reduced bottom padding */}
  <div className="wrapper">
    <div className="grid-2" style={{ alignItems: "center", gap: "2rem" }}>
      <div style={{ maxWidth: "32rem" }}>
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
           <div className="gradient-rounded-text-box" style={{ display: "inline-block" }}>Intro</div>
        </div>
        <h2 className="heading-2 text-gradient" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
          Integrated Consulting for Strategy, People, Process, and Technology
        </h2>

        <p className="desc" style={{ marginBottom: "1.25rem", lineHeight: 1.7 }}>
        PHPD helps businesses build structure and confidence through strategy, governance, 
        documentation, finance control, and technology delivery—so growth stays compliant, repeatable,
         and scalable. Integrated consulting across Strategy, People, Process & Technology, Strong focus on
          Governance, HR, SOPs & Audit, Long-term advisory partnership approach
        </p>
      </div>

      <div style={{ width: "100%", height: "auto", position: "relative" }}>
        <img
          src={homePageMeeting}
          alt="Team collaborating"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "450px", // Slightly reduced max height
            objectFit: "cover", // Changed to cover for a cleaner look on mobile
            borderRadius: "1.25rem",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            display: "block" // Removes bottom gap
          }}
        />
      </div>
    </div>
  </div>
</section>

      {/* SERVICES SHOWCASE */}
      <section className="bg-accent1" style={{ padding: "1rem 0 4rem 0", position: "relative" }}> {/* Reduced top padding */}
  <div className="wrapper">
    <div style={{ textAlign: "center", marginBottom: "3rem" }}> {/* Reduced bottom margin */}
      <h2 className="heading-2 text-gradient" style={{marginTop:"5rem"}}>Our Consulting & Technology Services</h2>
      <p className="desc" style={{ maxWidth: "44rem", margin: "0.5rem auto 0" }}>
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

{/* TESTIMONIALS SECTION */}
<section className="section-padding" style={{ overflow: "hidden", background: "#f8fafc", paddingBottom: "2rem" }}>
  <div className="wrapper">
    
    {/* Centered Header Container */}
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center",    
      textAlign: "center",     
      marginBottom: "2rem", // Reduced from 3rem
      gap: "1rem"
    }}>
      <div className="gradient-rounded-text-box" style={{ margin: "0 auto" }}>
        Testimonials
      </div>
      <h2 className="heading-2" style={{ margin: 0 }}>What Our Clients Say</h2>
    </div>

    {/* The Scroll Container */}
    <div className="testimonial-grid-container" ref={scrollRef} style={{ marginBottom: "2rem" }}>
      {testimonials.map((t, idx) => (
        <TestimonialCard key={idx} t={t} />
      ))}
    </div>

    {/* Navigation Buttons Centered */}
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      gap: "1.5rem", 
      marginTop: "1rem" 
    }}>
      <button 
        onClick={() => scroll("left")} 
        className="nav-btn" 
        style={{ cursor: "pointer" }}
        aria-label="Previous"
      >
        &#8592;
      </button>
      <button 
        onClick={() => scroll("right")} 
        className="nav-btn" 
        style={{ cursor: "pointer" }}
        aria-label="Next"
      >
        &#8594;
      </button>
    </div>
  </div>
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

const TestimonialCard = ({ t }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="testimonial-card-item" 
      style={{
        padding: "2rem",
        background: "white",
        borderRadius: "16px",
        border: `1px solid ${isHovered ? "#7c3aed" : "rgba(124,58,237,0.1)"}`,
        boxShadow: isHovered 
          ? "0 20px 40px rgba(124,58,237,0.12)" 
          : "0 4px 12px rgba(0,0,0,0.03)",
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        transition: "all 0.4s ease",
        display: "flex",
        flexDirection: "column",
        textAlign: "left"
      }}
    >
      <p style={{ fontStyle: "italic", marginBottom: "1.5rem", color: "#4b5563", lineHeight: "1.6" }}>
        "{t.feedback}"
      </p>
      <div style={{ marginTop: "auto" }}>
        <h4 style={{ margin: 0, color: "#111827", fontWeight: "600" }}>{t.name}</h4>
        <p style={{ margin: 0, fontSize: "0.85rem", color: "#7c3aed" }}>{t.role}</p>
      </div>
    </div>
  );
};


export default Home;