import React, { useState } from "react";
import "../components/GlassLayout.css";

// --- SUB-COMPONENT: GLOWING CARD ---
const GlowingServiceCard = ({ title, desc }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    background: "white",
    padding: "1.2rem",
    borderRadius: "12px",
    border: isHovered ? "1.5px solid #455bc8" : "1.5px solid #e5e7eb",
    boxShadow: isHovered ? "0 0 18px rgba(124, 58, 237, 0.2)" : "none",
    transform: isHovered ? "translateY(-3px)" : "translateY(0)",
    transition: "all 0.3s ease",
    cursor: "default",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 style={{ fontWeight: "700", marginBottom: "0.5rem", fontSize: "1.05rem", color: "#111827" }}>
        {title}
      </h3>
      <p style={{ fontSize: "0.9rem", lineHeight: "1.5", color: "#4b5563", margin: 0 }}>
        {desc}
      </p>
    </div>
  );
};

// --- MAIN SHELL COMPONENT ---
export default function ServicePageShell({
  pill = "Service",
  title,
  intro,
  provides = [],
  helps = [],
  helpGrid = [], 
  brochureUrl = "/brochures/Zenrax-brochure.pdf",
  contactScriptUrl,
  serviceTag,
}) {
  // ✅ Form state with Service field
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    company: "", 
    industry: "", 
    service: serviceTag || title, // ✅ Default to current service
    message: "" 
  });
  
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!contactScriptUrl) return;

    setLoading(true);
    
    // ✅ Updated submission logic
    const queryString = new URLSearchParams({
      name: form.name,
      email: form.email,
      phone: form.phone || "",
      company: form.company,
      industry: form.industry,
      service: form.service, // ✅ Explicit Service data
      message: form.message,
      timestamp: new Date().toLocaleString("en-IN"),
    }).toString();

    try {
      await fetch(`${contactScriptUrl}?${queryString}`, { method: "GET", mode: "no-cors" });
      setSent(true);
      // Reset form but keep the service name
      setForm({ name: "", email: "", phone: "", company: "", industry: "", service: serviceTag || title, message: "" });
    } finally {
      setLoading(false);
    }
  };

  const downloadBtnStyle = {
    padding: "0.6rem 2.5rem",
    fontWeight: "500",
    fontSize: "0.95rem",
    minWidth: "240px",
    justifyContent: "center",
    borderRadius: "9999px",
    border: "2px solid #455bc8",
    color: "#455bc8",
    backgroundColor: "transparent",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.2s ease"
  };

  return (
    <main className="bg-accent1 section-padding" style={{ position: "relative" }}>
      <div className="bg-radial-overlay" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />

      <div className="wrapper" style={{ position: "relative", zIndex: 1, maxWidth: "72rem" }}>
        
        {/* HERO SECTION */}
        <div style={{ maxWidth: "56rem", marginBottom: "2.0rem" }}>
          <div className="gradient-rounded-text-box" style={{ marginBottom: "1.25rem" }}>
            {pill}
          </div>
          <h1 className="heading-2 text-gradient" style={{ marginBottom: "0.75rem" }}>{title}</h1>
          <p className="desc" style={{ margin: 0, maxWidth: "52rem" }}>{intro}</p>
          <div style={{ marginTop: "1.8rem" }}>
            <a href={brochureUrl} download style={downloadBtnStyle}>Download Brochure</a>
          </div>
        </div>

        {/* HELP GRID */}
        {helpGrid.length > 0 && (
          <section style={{ marginBottom: "3.0rem" }}>
            <h2 style={{ color: "#455bc8", textAlign: "center", fontSize: "1.5rem", fontWeight: "700", marginBottom: "1.0rem" }}>
              Where we help you most
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.2rem" }}>
              {helpGrid.map((item, index) => (
                <GlowingServiceCard key={index} title={item.title} desc={item.desc} />
              ))}
            </div>
          </section>
        )}

        <div className="grid-2" style={{ alignItems: "start", gap: "1.5rem" }}>
          
          <section className="card" style={{ borderRadius: "1.5rem", padding: "1.9rem" }}>
            <h2 className="heading-3" style={{ marginBottom: "0.75rem" }}>What we provide</h2>
            <ul className="desc" style={{ paddingLeft: "1.1rem", margin: 0 }}>
              {provides.map((x) => (<li key={x} style={{ marginBottom: '0.4rem' }}>{x}</li>))}
            </ul>
            <h2 className="heading-3" style={{ margin: "1.5rem 0 0.75rem" }}>How we help</h2>
            <ul className="desc" style={{ paddingLeft: "1.1rem", margin: 0 }}>
              {helps.map((x) => (<li key={x} style={{ marginBottom: '0.4rem' }}>{x}</li>))}
            </ul>
          </section>

          {/* REQUEST FORM */}
          <section className="card" style={{ borderRadius: "1.5rem", padding: "1.9rem", background: "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(237,238,245,0.96))" }}>
            <h2 className="heading-3" style={{ marginBottom: "0.9rem" }}>Request Service</h2>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <p className="desc" style={{ color: "#16a34a", fontWeight: 700 }}>Request submitted for {form.service}!</p>
                <button onClick={() => setSent(false)} style={{ background: 'none', border: 'none', color: '#455bc8', cursor: 'pointer', textDecoration: 'underline' }}>Send another</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                
                {/* ✅ Read-only Service Field (Shows user what they are requesting) */}
                <div style={{ marginBottom: "4px" }}>
                  <label style={{ fontSize: "0.75rem", color: "#455bc8", fontWeight: "600", marginLeft: "4px", textTransform: "uppercase" }}>Selected Service</label>
                  <input
                    className="Zenrax-input"
                    value={form.service}
                    readOnly
                    style={{ borderRadius: "8px", background: "#ecedf6", fontWeight: "600", border: "1.5px solid #616fcb" }}
                  />
                </div>

                <input
                  className="Zenrax-input"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  required
                  disabled={loading}
                  style={{ borderRadius: "8px" }}
                />
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
                    <input
                      className="Zenrax-input"
                      placeholder="Company"
                      value={form.company}
                      onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                      required
                      disabled={loading}
                      style={{ borderRadius: "8px" }}
                    />
                    <input
                      className="Zenrax-input"
                      placeholder="Industry"
                      value={form.industry}
                      onChange={(e) => setForm((p) => ({ ...p, industry: e.target.value }))}
                      disabled={loading}
                      style={{ borderRadius: "8px" }}
                    />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
                    <input
                      className="Zenrax-input"
                      placeholder="Email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      required
                      disabled={loading}
                      style={{ borderRadius: "8px" }}
                    />
                    <input
                      className="Zenrax-input"
                      placeholder="Phone"
                      value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                      disabled={loading}
                      style={{ borderRadius: "8px" }}
                    />
                </div>

                <textarea
                  className="Zenrax-input"
                  rows={3}
                  placeholder="How can we help you with this service?"
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  required
                  disabled={loading}
                  style={{ resize: "vertical", borderRadius: "8px" }}
                />

                <button className="primary-btn" type="submit" disabled={loading} style={{ justifyContent: "center", borderRadius: "9999px", marginTop: "0.5rem", padding: "0.7rem 2rem", backgroundColor: "#7c3aed", border: "none", color: "white", cursor: "pointer" }}>
                  {loading ? "Processing..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}