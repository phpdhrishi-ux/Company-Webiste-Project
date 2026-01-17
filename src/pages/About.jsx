// src/pages/About.jsx
import "../components/GlassLayout.css";

const About = () => (
  <main className="bg-accent1 section-padding">
    <div className="wrapper">
      {/* Updated container: added margin auto and text-align center */}
      <div style={{ maxWidth: "60rem", margin: "0 auto", textAlign: "center" }}>
        
        {/* Updated box: added display inline-block to keep the pill shape centered */}
        <div 
          className="gradient-rounded-text-box" 
          style={{ marginBottom: "1.5rem", display: "inline-block" }}
        >
          About Us
        </div>

        <h1 className="heading-2 text-gradient" style={{ marginBottom: "1.25rem" }}>
          Pioneering Practical Digital Excellence
        </h1>

        <p className="desc" style={{ marginLeft: "auto", marginRight: "auto" }}>
          PHPD exists to bridge strategy, finance, and technology for founders who
          want disciplined, predictable growth. Every engagement is designed to
          connect high‑level decisions with the day‑to‑day systems your team uses.
        </p>
        
        <p className="desc" style={{ marginTop: "1rem", fontWeight: "500" }}>
 
        </p>
      </div>
    </div>
  </main>
);

export default About;