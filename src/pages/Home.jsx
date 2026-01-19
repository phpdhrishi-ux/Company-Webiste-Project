import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaBrain,
  FaRocket,
  FaHandshake,
  FaUserCircle,
  FaChevronLeft,
  FaChevronRight
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
        "We entrusted Zenrax Hiring and Staffing Private Limited with the web design and development of our venture, and the results have been outstanding. Their team delivered a sleek, user-friendly website tailored to our requirements.",
    },
    {
      name: "Akash Kandharkar",
      role: "Founder, SudhaKamal IT Solutions Pvt Ltd",
      feedback:
        "Partnering with Zenrax Hiring and Staffing Private Limited has been a game-changer. Their team supported us in finding the right talent quickly and also provided reliable IT solutions.",
    },
    {
      name: "Yash Garje",
      role: "Director, Balaji Packaging Pvt Ltd",
      feedback:
        "We partnered with Zenrax for a custom software solution to manage our factory's inventory and production process. The results have been excellent. Their team delivered a user-friendly, efficient system.",
    },
  ];

  useEffect(() => {
    const hero = document.getElementById("Zenrax-hero");
    const spotlight = document.querySelector(".Zenrax-spotlight");
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
        id="Zenrax-hero"
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          background: "radial-gradient(900px 520px at 15% 10%, rgba(124,58,237,0.12), transparent 60%), radial-gradient(900px 520px at 85% 0%, rgba(34,211,238,0.10), transparent 60%), #fafbff",
          padding: "4rem 1rem 2rem",
        }}
      >
        <div className="Zenrax-spotlight" />
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
      height: "52px", 
      padding: "0 2.5rem", 
      minWidth: "280px",
      borderRadius: "9999px",
      fontSize: "0.95rem",
      background: "linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)",
      boxShadow: "0 4px 15px rgba(124, 58, 237, 0.3)",
      border: "2px solid transparent", 
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      color: "#ffffff",
      boxSizing: "border-box" 
    }}
  >
    Start a Strategic Consultation Today
  </Link>
  
  <Link
    to="/services"
    style={{
      height: "52px", 
      padding: "0 2.5rem",
      minWidth: "280px",
      borderRadius: "9999px",
      fontSize: "0.95rem",
      fontWeight: "500",
      border: "2px solid #455bc8",
      color: "#455bc8",
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
      e.currentTarget.style.backgroundColor = "#455bc8";
      e.currentTarget.style.color = "#ffffff";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
      e.currentTarget.style.color = "#455bc8";
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

      {/* INTRO SECTION */}
<section className="bg-accent2" style={{ padding: "4rem 0 1rem 0" }}>
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
        Zenrax helps businesses build structure and confidence through strategy, governance, 
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
            maxHeight: "450px", 
            objectFit: "cover", 
            borderRadius: "1.25rem",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            display: "block" 
          }}
        />
      </div>
    </div>
  </div>
</section>

      {/* SERVICES SHOWCASE */}
      <section className="bg-accent1" style={{ padding: "1rem 0 4rem 0", position: "relative" }}>
  <div className="wrapper">
    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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

{/* TESTIMONIALS SECTION WITH IMPLEMENTED LOGIC */}
<section className="section-padding" style={{ overflow: "hidden", background: "#fafbff", padding: "4rem 0" }}>
  <div className="wrapper">
    
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center",    
      textAlign: "center",     
      marginBottom: "3rem",
      gap: "1rem"
    }}>
      <div className="gradient-rounded-text-box" style={{ margin: "0 auto", background: "rgba(69, 91, 200, 0.08)", color: "#455bc8", border: "1px solid rgba(69, 91, 200, 0.15)" }}>
        Testimonials
      </div>
      <h2 className="heading-2" style={{ margin: 0, color: "#374492" }}>What Our Clients Say</h2>
    </div>

    <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Navigation Buttons */}
      <button onClick={() => scroll("left")} className="home-nav-btn left">
        <FaChevronLeft size={16} />
      </button>
      <button onClick={() => scroll("right")} className="home-nav-btn right">
        <FaChevronRight size={16} />
      </button>

      {/* The Scroll Container */}
      <div className="testimonial-grid-container" ref={scrollRef}>
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card-item">
            <div className="home-testimonial-card">
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.25rem" }}>
                <FaUserCircle size={40} style={{ color: "#455bc8" }} />
                <div style={{textAlign: "left"}}>
                  <h4 style={{ margin: 0, fontSize: "1rem", color: "#0f172a" }}>{t.name}</h4>
                  <p style={{ margin: 0, fontSize: "0.75rem", color: "#455bc8", fontWeight: 500 }}>{t.role}</p>
                </div>
              </div>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "#475569", fontStyle: "italic", margin: 0, textAlign: "left" }}>
                "{t.feedback}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  <style jsx>{`
    .testimonial-grid-container {
      display: flex;
      gap: 1.5rem;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scrollbar-width: none; 
      -ms-overflow-style: none;
      padding: 1rem 0.5rem 2rem;
    }

    .testimonial-grid-container::-webkit-scrollbar {
      display: none;
    }

    .testimonial-card-item {
      flex: 0 0 100%; 
      scroll-snap-align: center;
    }

    .home-testimonial-card {
      background: #ffffff;
      border: 1px solid #ecedf6;
      border-radius: 1.25rem;
      padding: 1.75rem;
      box-shadow: 0 10px 25px rgba(69, 91, 200, 0.05);
      height: 100%;
    }

    .home-nav-btn {
      position: absolute;
      bottom: -65px;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      border: 1px solid #ecedf6;
      background: white;
      color: #455bc8;
      cursor: pointer;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      box-shadow: 0 4px 12px rgba(0,0,0,0.03);
    }

    .home-nav-btn:hover {
      background: #455bc8;
      color: white;
      border-color: #455bc8;
    }

    .home-nav-btn.left { left: 25%; }
    .home-nav-btn.right { right: 25%; }

    @media (min-width: 1024px) {
      .testimonial-grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        overflow-x: visible;
        gap: 2rem;
      }

      .testimonial-card-item {
        flex: none;
      }

      .home-nav-btn {
        display: none; 
      }
      
      .home-testimonial-card {
        padding: 2.25rem;
      }
    }


    .home-testimonial-card {
      /* ... keep your existing styles ... */
      border: 1px solid #ecedf6; /* Default border */
      transition: all 0.3s ease; /* Ensures smooth transition */
    }

    .home-testimonial-card:hover {
      border-color: #455bc8; /* Changes to your brand blue on hover */
      border-width: 1px; /* Keeps size consistent */
      box-shadow: 0 15px 35px rgba(69, 91, 200, 0.12); /* Adds a soft brand-colored glow */
      transform: translateY(-5px); /* Optional: slight lift effect */
    }

    @media (max-width: 480px) {
      .home-nav-btn.left { left: 20%; }
      .home-nav-btn.right { right: 20%; }
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
    <div style={{ background: "#455bc8", padding: "8px", borderRadius: "8px", color: "white" }}>
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
        <p style={{ color: "#455bc8", fontWeight: 600, fontSize: "0.9rem", marginBottom: "1rem" }}>{subtitle}</p>
        <p style={{ fontSize: "0.95rem", color: "#4b5563", marginBottom: "1.5rem" }}>{description}</p>
        <Link to={to} className="primary-btn" style={{ marginTop: "auto", textAlign: "center", borderRadius: "9999px", padding: "0.6rem", background: "#455bc8" }}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Home;