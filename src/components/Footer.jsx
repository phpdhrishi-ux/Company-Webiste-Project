// src/components/Footer.jsx
import { Link } from "react-router-dom"; // Added for internal navigation
import "./GlassLayout.css";
import logo from "../assets/logo2.png";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/company/zenrax-consultancy-services/", Icon: FaLinkedinIn },
  { href: "https://instagram.com/zenraxservices", Icon: FaInstagram },
  { href: "https://facebook.com/zenraxservices", Icon: FaFacebookF },
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  { label: "Business Consulting", href: "/consulting" },
  { label: "IT Development", href: "/it-development" },
  { label: "vCIO / vCFO", href: "/vcio-vcfo" },
];

const ContactRow = ({ label, value, href, Icon }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.25rem" }}>
    <div style={{ color: "#455bc8", display: "flex", alignItems: "center", justifyContent: "center", minWidth: "20px" }}>
      <Icon size={19} />
    </div>
    <div>
      <div style={{ fontSize: "0.65rem", color: "#64748b", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: "1" }}>
        {label}
      </div>
      {href ? (
        <a href={href} style={{ fontSize: "0.95rem", color: "#1e293b", fontWeight: 600, textDecoration: "none", display: "block", marginTop: "2px" }}>{value}</a>
      ) : (
        <p style={{ fontSize: "0.95rem", color: "#1e293b", margin: "2px 0 0 0", fontWeight: 600 }}>{value}</p>
      )}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="footer-container" style={{ padding: "1.25rem 0", background: "var(--bg-accent2)", position: "relative", overflow: "hidden" }}>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2.5rem;
        }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .footer-glass-card { padding: 2rem 1.5rem !important; }
        }
      `}</style>

      <div className="wrapper" style={{ position: "relative", zIndex: 1, padding: "0 1rem" }}>
        <div className="footer-glass-card" style={{
          padding: "3.5rem 2.5rem",
          borderRadius: "1.5rem",
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(69, 91, 200, 0.2)",
          boxShadow: "0 20px 50px rgba(15,23,42,0.08)",
        }}>
          
          <div className="footer-grid">
            {/* Brand Section */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={logo} alt="Zenrax Logo" style={{ height: "3.2rem", width: "fit-content", objectFit: "contain" }} />
              </Link>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#475569", margin: 0, maxWidth: "260px" }}>
                AI-first consulting + fullstack delivery for founders who scale with clarity.
              </p>
              <div style={{ display: "flex", gap: "0.8rem", marginTop: "0.5rem" }}>
                {SOCIAL_LINKS.map(({ href, Icon }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" 
                    style={{ 
                      width: "2.4rem", 
                      height: "2.4rem", 
                      borderRadius: "50%", 
                      background: "rgba(69, 91, 200, 0.06)", 
                      border: "1px solid rgba(69, 91, 200, 0.15)", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      color: "#455bc8",
                      transition: "0.3s all ease"
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#455bc8"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(69, 91, 200, 0.06)"; e.currentTarget.style.color = "#455bc8"; }}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links - Updated to use Link */}
            <div>
              <h3 style={{ marginBottom: "1.8rem", color: "#1e293b", fontSize: "1.05rem", fontWeight: "700" }}>Quick Links</h3>
              {QUICK_LINKS.map((link) => (
                <Link 
                  key={link.href} 
                  to={link.href} 
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ display: "block", marginBottom: "0.9rem", color: "#475569", fontSize: "0.95rem", fontWeight: 500, textDecoration: "none" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Services - Updated to use Link */}
            <div>
              <h3 style={{ marginBottom: "1.8rem", color: "#1e293b", fontSize: "1.05rem", fontWeight: "700" }}>Services</h3>
              {SERVICES.map((service) => (
                <Link 
                  key={service.href} 
                  to={service.href} 
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ display: "block", marginBottom: "0.9rem", color: "#475569", fontSize: "0.95rem", fontWeight: 500, textDecoration: "none" }}
                >
                  {service.label}
                </Link>
              ))}
            </div>

            {/* Contact Section */}
            <div>
              <h3 style={{ marginBottom: "1.8rem", color: "#1e293b", fontSize: "1.05rem", fontWeight: "700" }}>Contact</h3>
              <ContactRow label="Phone" value="+91 98806 36948" href="tel:+919880636948" Icon={FiPhone} />
              <ContactRow label="Email" value="info@Zenraxhiring.com" href="mailto:info@Zenraxhiring.com" Icon={FiMail} />
              <ContactRow label="PUNE, MH" value="(Remote-first)" Icon={FiMapPin} />
            </div>
          </div>

          {/* Copyright Section */}
          <div style={{ marginTop: "3.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(148,163,184,0.15)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0 }}>
              © {new Date().getFullYear()} Zenrax Hiring and Staffing Private Limited.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;