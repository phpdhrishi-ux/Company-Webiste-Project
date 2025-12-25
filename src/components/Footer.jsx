// src/components/Footer.jsx
import "./GlassLayout.css";
import logo from "../assets/logo.png";

// react-icons
import { FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from "react-icons/fi";

const Footer = () => (
  <footer className="overflow-hidden relative z-20 py-10 md:py-20 w-full">
    {/* Base dark bg */}
    <div className="bg-black">
      {/* Gradient + rounded container */}
      <div className="mx-auto w-full relative z-20 sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] bg-gradient-to-br from-slate-800 dark:from-neutral-900 to-gray-900 rounded-2xl">
        
        {/* Noise texture + vignette */}
        <div 
          className="absolute inset-0 w-full h-full opacity-10 bg-noise fade-vignette [mask-image:radial-gradient(#fff,transparent,75%)]"
          style={{
            backgroundImage: "url('https://b.zmtcdn.com/data/file_assets/833f6a8e97812cf6a34871151011a2201751899109.webp')",
            backgroundSize: "30%"
          }}
        />
        
        {/* Right vignette mask */}
        <div 
          className="pointer-events-none absolute inset-y-0 right-0 select-none overflow-hidden rounded-2xl"
          style={{
            mask: "radial-gradient(33.875rem 33.875rem at calc(100% - 8.9375rem) 0, white 3%, transparent 70%)"
          }}
        />

        <div className="wrapper relative -mx-6 sm:mx-0 sm:rounded-2xl overflow-hidden px-6 md:px-8">
          {/* Content */}
          <div className="relative px-6 pb-14 pt-20 sm:px-10 sm:pb-20 lg:px-[4.5rem]">
            {/* TOP GRID - HORIZONTAL */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "2.5rem",
                alignItems: "start",
              }}
            >
              {/* Brand + blurb + socials */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <img
                  src={logo}
                  alt="PHPD Logo"
                  style={{
                    height: "5rem",
                    marginBottom: "0.75rem",
                    cursor: "pointer",
                    borderRadius:10,
                    transition: "opacity 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.opacity = "0.9";
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(124,58,237,0.6)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
                <p
                  className="desc"
                  style={{
                    maxWidth: "18rem",
                    fontSize: "0.9rem",
                    color: "#000000",
                  }}
                >
                  PHPD is a strategic partner for founders who want practical
                  technology, finance, and consulting that actually moves the
                  business forward.
                </p>

                <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
                  {socialLinks.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      style={{
                        backgroundColor: "#ffffff",
                        padding: "0.45rem",
                        borderRadius: "9999px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000000",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "#f8f5ff";
                        e.currentTarget.style.color = "#7c3aed";
                        e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
                        e.currentTarget.style.boxShadow = "0 8px 25px rgba(124,58,237,0.4)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "#ffffff";
                        e.currentTarget.style.color = "#000000";
                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
                      }}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <h6 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.4rem", color: "#000000" }}>
                  Quick Links
                </h6>
                {quickLinks.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    style={{
                      fontSize: "0.9rem",
                      color: "#000000",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      textDecoration: "none",
                      padding: "0.25rem 0",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      borderRadius: "4px",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = "#7c3aed";
                      e.currentTarget.style.transform = "translateX(8px)";
                      e.currentTarget.style.backgroundColor = "rgba(124,58,237,0.1)";
                      e.currentTarget.style.boxShadow = "0 4px 15px rgba(124,58,237,0.3)";
                      e.currentTarget.style.paddingLeft = "0.75rem";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = "#000000";
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.paddingLeft = "0";
                    }}
                  >
                    <span style={{ 
                      display: "inline-flex", 
                      width: "0.75rem", 
                      height: "0.75rem", 
                      alignItems: "center", 
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      color: "#000000"
                    }}>
                      <FiArrowRight size={12} />
                    </span>
                    {label}
                  </a>
                ))}
              </div>

              {/* Services */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <h6 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.4rem", color: "#000000" }}>
                  Services
                </h6>
                {services.map((label) => (
                  <p
                    key={label}
                    style={{
                      fontSize: "0.9rem",
                      color: "#000000",
                    }}
                  >
                    {label}
                  </p>
                ))}
              </div>

              {/* Contact */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <h6 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.4rem", color: "#000000" }}>
                  Contact Us
                </h6>
                <ContactRow label="Phone" value="+91-98XXXXXX00" href="tel:+9198XXXXXX00" Icon={FiPhone} />
                <ContactRow label="Email" value="hello@phpdservices.com" href="mailto:hello@phpdservices.com" Icon={FiMail} />
                <ContactRow label="Office" value="PHPD IT Services, Bengaluru, Karnataka, India" Icon={FiMapPin} />
              </div>
            </div>

            {/* Bottom bar */}
            <div style={{ paddingTop: "1.75rem", marginTop: "2.5rem", borderTop: "1px solid rgba(0,0,0,0.2)", textAlign: "center" }}>
              <p style={{ fontSize: "0.85rem", color: "#000000" }}>
                © {new Date().getFullYear()} PHPD IT Services. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

// ---- Data & Helpers ----
const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: FaLinkedinIn },
  { label: "Twitter", href: "https://x.com", Icon: FaTwitter },
  { label: "Instagram", href: "https://www.instagram.com", Icon: FaInstagram },
  { label: "YouTube", href: "https://www.youtube.com", Icon: FaYoutube },
];

const quickLinks = [
  ["Home", "/"], ["About Us", "/about"], ["Services", "/services"],
  ["Consulting", "/consulting"], ["Industries", "/industries"],
  ["IT Development", "/it-development"], ["Portfolio", "/portfolio"], ["Contact", "/contact"],
];

const services = [
  "Growth & Strategy Consulting", "vCIO / vCTO advisory",
  "Product & Platform builds", "Automation & integrations",
];

const ContactRow = ({ label, value, href, Icon }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
    <div style={{ 
      marginTop: "0.1rem", 
      color: "#000000",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
    }}>
      <Icon size={18} />
    </div>
    <div>
      <h6 style={{ fontSize: "0.9rem", marginBottom: "0.25rem", color: "#000000" }}>
        {label}
      </h6>
      {href ? (
        <a
          href={href}
          style={{
            fontSize: "0.9rem",
            color: "#000000",
            textDecoration: "none",
            padding: "0.25rem 0",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            display: "block",
            borderRadius: "4px",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#7c3aed";
            e.currentTarget.style.backgroundColor = "rgba(124,58,237,0.1)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(124,58,237,0.3)";
            e.currentTarget.style.paddingLeft = "0.5rem";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = "#000000";
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.paddingLeft = "0";
          }}
        >
          {value}
        </a>
      ) : (
        <p style={{ fontSize: "0.9rem", color: "#000000", maxWidth: "15rem" }}>
          {value}
        </p>
      )}
    </div>
  </div>
);

export default Footer;
