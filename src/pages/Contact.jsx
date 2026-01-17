import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../components/GlassLayout.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ✅ YOUR DEPLOYED URL
  const CONTACT_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxu9QHikTphaz65QUHh1h2Wlorm7p3tU2KlRbbmIlxoI9KuIxt4vmjAkAkXBnpJ1U_6/exec';

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ GET Query String (Most reliable for localhost)
    const queryString = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      message: formData.message,
      timestamp: new Date().toLocaleString('en-IN')
    }).toString();

    try {
      await fetch(`${CONTACT_SCRIPT_URL}?${queryString}`, {
        method: 'GET', // ✅ GET avoids 403 Forbidden on some networks
        mode: 'no-cors'
      });

      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("Submission Error:", error);
      alert('Something went wrong. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
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
          margin: "0 auto"
        }}
      >
        {/* Intro Section */}
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

        <div className="contact-grid">
          {/* LEFT CARD – Info */}
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
              <InfoRow type="phone" title="Call Us" value="+91 98806 36948" />
              <InfoRow type="email" title="Email" value="info@phpdhires.com" />
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

          {/* RIGHT CARD – Form or Success Message */}
          <section
            className="card"
            style={{
              borderRadius: "1.5rem",
              padding: "2.25rem 2.5rem 2.1rem",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(237,238,245,0.96))",
            }}
          >
            {success ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                <h3 className="heading-3" style={{ color: '#16a34a', marginBottom: '0.5rem' }}>
                  Message Sent!
                </h3>
                <p className="desc">
                  Thanks {formData.name}. We'll get back to you shortly.
                </p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="primary-btn"
                  style={{
                    marginTop: '1.5rem',
                    background: 'transparent',
                    color: '#4b5563',
                    border: '1px solid #e5e7eb',
                    padding: '0.5rem 1rem',
                    fontSize: '0.9rem'
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2
                  className="heading-3"
                  style={{ marginBottom: "1.4rem", fontSize: "1.3rem" }}
                >
                  Send Us a Message
                </h2>

                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <LightField>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      style={inputStyle}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </LightField>

                  <div className="contact-grid-row">
                    <LightField>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        style={inputStyle}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={loading}
                      />
                    </LightField>
                    <LightField>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        style={inputStyle}
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </LightField>
                  </div>

                  <LightField>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Your Message"
                      style={{ ...inputStyle, resize: "vertical" }}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </LightField>

                  <button
                    type="submit"
                    className="primary-btn"
                    disabled={loading}
                    style={{
                      marginTop: "1.2rem",
                      width: "100%",
                      borderRadius: "9999px",
                      borderWidth: 0,
                      fontSize: "0.95rem",
                      justifyContent: "center",
                      gap: "0.4rem",
                      opacity: loading ? 0.7 : 1,
                      cursor: loading ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                    {!loading && <span style={{ fontSize: "1rem" }}></span>}
                  </button>
                </form>
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

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
          flexShrink: 0 
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

export default Contact;
