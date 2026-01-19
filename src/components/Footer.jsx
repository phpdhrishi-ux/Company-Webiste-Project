// src/components/Footer.jsx
import "./GlassLayout.css";
import logo from "../assets/logo.png";

import { FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer style={{ 
      padding: "1.25rem 0", 
      background: "var(--bg-accent2)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Purple radial overlay */}
      <div 
        className="bg-radial-overlay" 
        style={{ opacity: 0.35, position: "absolute", inset: 0 }}
      />

      <div className="wrapper" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            padding: "2rem 1.5rem", 
            borderRadius: "1.5rem",
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(69, 91, 200, 0.2)",
            boxShadow: "0 20px 50px rgba(15,23,42,0.1)",
            textAlign: "left" // Forces left alignment for mobile
          }}
        >
          <div
            style={{
              display: "grid",
              // Adjusted minmax for better mobile stacking
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2.5rem", 
              alignItems: "start",
            }}
          >
            {/* Brand + blurb + socials */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
              <img
                src={logo}
                alt="Zenrax Logo"
                style={{
                  height: "3.2rem", // Increased logo height
                  width: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 4px 12px rgba(69, 91, 200, 0.15))",
                }}
              />
              <p className="desc" style={{ maxWidth: "20rem", fontSize: "0.88rem", lineHeight: 1.5, textAlign: "left", margin: 0 }}>
                AI-first consulting + fullstack delivery for founders who scale with clarity.
              </p>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {socialLinks.map(({ href, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      background: "rgba(69, 91, 200, 0.08)",
                      border: "1px solid rgba(69, 91, 200, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#455bc8", // Updated Icon Color
                      transition: "all 0.3s ease"
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div style={{ textAlign: "left" }}>
              <h3 className="heading-3" style={{ marginBottom: "1rem", color: "#1e293b", fontSize: "1.1rem", fontWeight: "700" }}>
                Quick Links
              </h3>
              {quickLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    display: "block",
                    marginBottom: "0.6rem",
                    color: "#475569",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    textDecoration: "none"
                  }}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Services */}
            <div style={{ textAlign: "left" }}>
              <h3 className="heading-3" style={{ marginBottom: "1rem", color: "#1e293b", fontSize: "1.1rem", fontWeight: "700" }}>
                Services
              </h3>
              {services.map((service) => (
                <p key={service} style={{ marginBottom: "0.6rem", fontSize: "0.9rem", color: "#475569", margin: "0 0 0.6rem 0" }}>
                  {service}
                </p>
              ))}
            </div>

            {/* Contact */}
            <div style={{ textAlign: "left" }}>
              <h3 className="heading-3" style={{ marginBottom: "1rem", color: "#1e293b", fontSize: "1.1rem", fontWeight: "700" }}>
                Contact
              </h3>
              <ContactRow label="Phone" value="+91 98806 36948" href="tel:+919880636948" Icon={FiPhone} />
              <ContactRow label="Email" value="info@Zenraxhires.com" href="mailto:info@Zenraxhires.com" Icon={FiMail} />
              <ContactRow label="Pune, MH" value="(Remote-first)" Icon={FiMapPin} />
            </div>
          </div>

          {/* Copyright */}
          <div style={{ 
            marginTop: "2rem", 
            paddingTop: "1.25rem", 
            borderTop: "1px solid rgba(148,163,184,0.2)",
            textAlign: "left" // Aligned to left as requested
          }}>
            <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0 }}>
              © {new Date().getFullYear()} Zenrax Consultancy Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Data
const socialLinks = [
  { href: "https://linkedin.com/company/Zenrax-it-services", Icon: FaLinkedinIn },
  { href: "https://x.com/Zenraxhires", Icon: FaTwitter },
  { href: "https://instagram.com/Zenraxservices", Icon: FaInstagram },
  { href: "https://youtube.com/@Zenraxhires", Icon: FaYoutube },
];

const quickLinks = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"],
  ["Portfolio", "/portfolio"], ["Contact", "/contact"],
];

const services = [
  "Growth Consulting", "vCIO / vCFO", "Product Delivery", "Ops Automation",
];

const ContactRow = ({ label, value, href, Icon }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "1rem" }}>
    <div style={{ marginTop: "0.2rem", color: "#455bc8", minWidth: "1.2rem" }}>
      <Icon size={18} />
    </div>
    <div>
      <div style={{ fontSize: "0.75rem", color: "#64748b", marginBottom: "0.1rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.02em" }}>
        {label}
      </div>
      {href ? (
        <a href={href} style={{ fontSize: "0.95rem", color: "#1e293b", fontWeight: 500, textDecoration: "none" }}>
          {value}
        </a>
      ) : (
        <p style={{ fontSize: "0.95rem", color: "#1e293b", margin: 0, fontWeight: 500 }}>{value}</p>
      )}
    </div>
  </div>
);

export default Footer;