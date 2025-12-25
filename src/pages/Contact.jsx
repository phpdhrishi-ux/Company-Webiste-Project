// src/pages/Contact.jsx
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../components/GlassLayout.css";

const Contact = () => (
  <main className="bg-accent1 section-padding" style={{ position: "relative" }}>
    <div
      className="bg-radial-overlay"
      style={{ position: "absolute", inset: 0, opacity: 0.7 }}
    />

    <div
      className="wrapper"
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "72rem",
      }}
    >
      {/* Top intro – like Services */}
      <div style={{ maxWidth: "46rem", marginBottom: "2.5rem" }}>
        <div
          className="gradient-rounded-text-box"
          style={{ marginBottom: "1.5rem" }}
        >
          Contact
        </div>
        <h1
          className="heading-2 text-gradient"
          style={{ marginBottom: "1rem" }}
        >
          How Can We Help?
        </h1>
        <p className="desc">
          Whether you are starting a new project, modernising existing systems,
          or exploring AI‑driven hiring workflows, PHPD can help you design,
          build, and ship with confidence.
        </p>
      </div>

      {/* Two cards: info + form */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1.05fr)",
          gap: "2rem",
        }}
      >
        {/* LEFT CARD – info */}
        <section
          className="card"
          style={{
            borderRadius: "1.5rem",
            padding: "2.25rem 2.5rem 2.1rem",
          }}
        >
          <h2
            className="heading-3"
            style={{ marginBottom: "0.9rem", fontSize: "1.3rem" }}
          >
            Contact Details
          </h2>

          <p
            className="desc"
            style={{ fontSize: "0.9rem", marginBottom: "1.8rem" }}
          >
            Reach out directly or send a message using the form. A response
            usually lands within 1–2 business days.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.4rem",
              marginBottom: "2rem",
              fontSize: "0.9rem",
            }}
          >
            <InfoRow
              type="phone"
              title="Call Us"
              value="+91 98806 36948"
            />
            <InfoRow
              type="email"
              title="Email"
              value="info@phpdhires.com"
            />
            <InfoRow
              type="location"
              title="Location"
              value="Pune, Maharashtra · Remote‑first consulting"
            />
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(148,163,184,0.5)",
              paddingTop: "1.3rem",
            }}
          >
            <p
              className="desc"
              style={{
                fontSize: "0.8rem",
                marginBottom: "0.7rem",
              }}
            >
              Follow Us
            </p>
            <div style={{ display: "flex", gap: "0.6rem" }}>
              {["F", "X", "in", "IG"].map((label) => (
                <button
                  key={label}
                  type="button"
                  style={{
                    width: "2.1rem",
                    height: "2.1rem",
                    borderRadius: "9999px",
                    border: "1px solid rgba(148,163,184,0.8)",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    color: "#4b5563",
                    fontSize: "0.82rem",
                    cursor: "pointer",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* RIGHT CARD – form */}
        <section
          className="card"
          style={{
            borderRadius: "1.5rem",
            padding: "2.25rem 2.5rem 2.1rem",
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(237,238,245,0.96))",
          }}
        >
          <h2
            className="heading-3"
            style={{ marginBottom: "1.4rem", fontSize: "1.3rem" }}
          >
            Send Us a Message
          </h2>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <LightField>
              <input
                type="text"
                placeholder="Full Name"
                style={inputStyle}
                required
              />
            </LightField>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 0.9fr",
                gap: "0.8rem",
              }}
            >
              <LightField>
                <input
                  type="email"
                  placeholder="Email Address"
                  style={inputStyle}
                  required
                />
              </LightField>
              <LightField>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  style={inputStyle}
                />
              </LightField>
            </div>

            <LightField>
              <textarea
                rows={4}
                placeholder="Your Message"
                style={{ ...inputStyle, resize: "vertical" }}
                required
              />
            </LightField>

            <button
              type="submit"
              className="primary-btn"
              style={{
                marginTop: "1.2rem",
                width: "100%",
                borderRadius: "0.8rem",
                borderWidth: 0,
                fontSize: "0.95rem",
                justifyContent: "center",
                gap: "0.4rem",
              }}
            >
              Send Message
              <span style={{ fontSize: "1rem" }}>↗</span>
            </button>
          </form>
        </section>
      </div>

      {/* Mobile stacking */}
      <style>
        {`
          @media (max-width: 900px) {
            .wrapper > div:last-child {
              display: block !important;
            }
            .wrapper > div:last-child > section {
              margin-bottom: 1.5rem;
            }
          }
        `}
      </style>
    </div>
  </main>
);

/* ===== Sub components ===== */

const InfoRow = ({ type, title, value }) => {
  let IconComp;
  if (type === "phone") IconComp = FaPhoneAlt;
  if (type === "email") IconComp = FaEnvelope;
  if (type === "location") IconComp = FaMapMarkerAlt;

  return (
    <div style={{ display: "flex", gap: "0.9rem" }}>
      <div
        style={{
          width: "2.6rem",
          height: "2.6rem",
          borderRadius: "9999px",
          backgroundColor: "rgba(237,238,245,0.9)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.1rem",
          color: "#4b5563",
        }}
      >
        {IconComp && <IconComp />}
      </div>
      <div>
        <p
          className="desc"
          style={{
            fontSize: "0.82rem",
            marginBottom: "0.15rem",
          }}
        >
          {title}
        </p>
        <p style={{ fontSize: "0.9rem", color: "#111827" }}>{value}</p>
      </div>
    </div>
  );
};

const LightField = ({ children }) => (
  <div
    style={{
      borderRadius: "0.8rem",
      border: "1px solid rgba(148,163,184,0.9)",
      backgroundColor: "#ffffff",
      padding: "0.15rem 0.25rem",
    }}
  >
    {children}
  </div>
);

const inputStyle = {
  width: "100%",
  padding: "0.7rem 0.85rem",
  borderRadius: "0.6rem",
  border: "none",
  backgroundColor: "transparent",
  color: "#111827",
  fontSize: "0.9rem",
  outline: "none",
};

export default Contact;
