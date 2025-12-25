// src/pages/About.jsx
import "../components/GlassLayout.css";

const About = () => (
  <main className="bg-accent1 section-padding">
    <div className="wrapper">
      <div style={{ maxWidth: "60rem" }}>
      <div className="gradient-rounded-text-box" style={{ marginBottom: "1.5rem" }}>
        About Us
      </div>
        <h1 className="heading-2 text-gradient" style={{ marginBottom: "1.25rem" }}>
          Pioneering Practical Digital Excellence
        </h1>
        <p className="desc">
          PHPD exists to bridge strategy, finance, and technology for founders who
          want disciplined, predictable growth. Every engagement is designed to
          connect high‑level decisions with the day‑to‑day systems your team uses. Mahesh Samale
        </p>
      </div>
    </div>
  </main>
);

export default About;
