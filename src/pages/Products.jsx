import WaitlistForm from '../components/WaitlistForm';
import "../components/GlassLayout.css";

const Products = () => (
  <main className="section-padding" style={{ position: "relative" }}>
    <div className="bg-radial-overlay" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
    
    <div className="wrapper" style={{ position: "relative", zIndex: 1 }}>
      <div style={{ 
        maxWidth: "60rem", 
        margin: "0 auto", 
        textAlign: "center",
        padding: "2rem 1rem"
      }}>
        <div className="gradient-rounded-text-box" style={{ marginBottom: "1.5rem" }}>
          Our Products
        </div>

        <h1 className="heading-2 text-gradient" style={{ marginBottom: "1.25rem" }}>
          Coming Soon
        </h1>

        <p className="desc" style={{ 
          maxWidth: "44rem", 
          margin: "0 auto 3rem",
          fontSize: "1.125rem"
        }}>
          Launching soon for B2B hiring workflows.
        </p>

        {/* ✅ Progress Bars */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "2.5rem",
          marginBottom: "4rem",
          flexWrap: "wrap"
        }}>
          <div style={{ textAlign: "center", minWidth: "140px" }}>
            <div className="coming-soon-progress" style={{ background: "rgba(124,58,237,0.2)" }}>
              <div className="progress-fill" style={{ width: "75%", background: "linear-gradient(90deg, #7c3aed, #a855f7)" }} />
            </div>
            <div style={{ fontSize: "0.9rem", color: "#64748b", marginTop: "0.75rem" }}>
              <span style={{ color: "#7c3aed", fontWeight: 700 }}>75%</span><br />
              Complete
            </div>
          </div>
          
          <div style={{ textAlign: "center", minWidth: "140px" }}>
            <div className="coming-soon-progress" style={{ background: "rgba(34,197,94,0.2)" }}>
              <div className="progress-fill" style={{ width: "45%", background: "linear-gradient(90deg, #22c55e, #4ade80)" }} />
            </div>
            <div style={{ fontSize: "0.9rem", color: "#64748b", marginTop: "0.75rem" }}>
              <span style={{ color: "#22c55e", fontWeight: 700 }}>45%</span><br />
              Complete
            </div>
          </div>
        </div>

        {/* ✅ Waitlist Card */}
        <WaitlistForm />
      </div>
    </div>
  </main>
);

export default Products;
