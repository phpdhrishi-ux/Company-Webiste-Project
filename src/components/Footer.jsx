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
      {/* Purple radial overlay (matches services) */}
      <div 
        className="bg-radial-overlay" 
        style={{ opacity: 0.35, position: "absolute", inset: 0 }}
      />

      <div className="wrapper" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            padding: "1.75rem 1.5rem", /* compact */
            borderRadius: "1.5rem",
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(124,58,237,0.2)",
            boxShadow: "0 20px 50px rgba(15,23,42,0.1)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.75rem", /* tighter */
              alignItems: "start",
            }}
          >
            {/* Brand + blurb + socials */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <img
                src={logo}
                alt="PHPD Logo"
                style={{
                  height: "2.4rem", /* smaller */
                  borderRadius: "8px",
                  boxShadow: "0 6px 20px rgba(124,58,237,0.2)",
                }}
              />
              <p className="desc" style={{ maxWidth: "20rem", fontSize: "0.88rem", lineHeight: 1.5 }}>
                AI-first consulting + fullstack delivery for founders who scale with clarity.
              </p>
              <div style={{ display: "flex", gap: "0.6rem" }}>
                {socialLinks.map(({ href, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "2.3rem",
                      height: "2.3rem",
                      borderRadius: "9999px",
                      background: "rgba(124,58,237,0.08)",
                      border: "1px solid rgba(124,58,237,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#7c3aed",
                    }}
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="heading-3" style={{ marginBottom: "0.75rem", color: "#1e293b", fontSize: "1rem" }}>
                Quick Links
              </h3>
              {quickLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    display: "block",
                    marginBottom: "0.4rem",
                    color: "#475569",
                    fontSize: "0.88rem",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Services */}
            <div>
              <h3 className="heading-3" style={{ marginBottom: "0.75rem", color: "#1e293b", fontSize: "1rem" }}>
                Services
              </h3>
              {services.map((service) => (
                <p key={service} className="desc" style={{ marginBottom: "0.4rem", fontSize: "0.88rem" }}>
                  {service}
                </p>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h3 className="heading-3" style={{ marginBottom: "0.75rem", color: "#1e293b", fontSize: "1rem" }}>
                Contact
              </h3>
              <ContactRow label="Phone" value="+91 98806 36948" href="tel:+919880636948" Icon={FiPhone} />
              <ContactRow label="Email" value="info@phpdhires.com" href="mailto:info@phpdhires.com" Icon={FiMail} />
              <ContactRow label="Pune, MH" value="(Remote-first)" Icon={FiMapPin} />
            </div>
          </div>

          {/* Copyright */}
          <div style={{ 
            marginTop: "1.5rem", 
            paddingTop: "1rem", 
            borderTop: "1px solid rgba(148,163,184,0.3)",
            textAlign: "center"
          }}>
            <p className="desc" style={{ fontSize: "0.85rem", color: "#64748b" }}>
              © {new Date().getFullYear()} PHPD IT Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Data (same)
const socialLinks = [
  { href: "https://linkedin.com/company/phpd-it-services", Icon: FaLinkedinIn },
  { href: "https://x.com/phpdhires", Icon: FaTwitter },
  { href: "https://instagram.com/phpdservices", Icon: FaInstagram },
  { href: "https://youtube.com/@phpdhires", Icon: FaYoutube },
];

const quickLinks = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"],
  ["Portfolio", "/portfolio"], ["Contact", "/contact"],
];

const services = [
  "Growth Consulting", "vCIO / vCFO", "Product Delivery", "Ops Automation",
];

const ContactRow = ({ label, value, href, Icon }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", marginBottom: "0.75rem" }}>
    <div style={{ marginTop: "0.1rem", color: "#7c3aed", minWidth: "1.2rem" }}>
      <Icon size={16} />
    </div>
    <div>
      <div style={{ fontSize: "0.8rem", color: "#64748b", marginBottom: "0.15rem", fontWeight: 500 }}>
        {label}
      </div>
      {href ? (
        <a href={href} style={{ fontSize: "0.88rem", color: "#1e293b", fontWeight: 500, textDecoration: "none" }}>
          {value}
        </a>
      ) : (
        <p style={{ fontSize: "0.88rem", color: "#1e293b", margin: 0 }}>{value}</p>
      )}
    </div>
  </div>
);

export default Footer;
