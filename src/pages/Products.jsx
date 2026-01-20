import WaitlistForm from "../components/WaitlistForm";
import "../components/GlassLayout.css";

const Products = () => (
  <main className="section-padding" style={{ 
    position: "relative", 
    minHeight: "100vh",
    background: "var(--bg-main)",
    paddingTop: "100px" 
  }}>
    <div
      className="bg-radial-overlay"
      style={{ 
        position: "absolute", 
        inset: 0, 
        opacity: 0.6,
        background: "radial-gradient(circle at 50% 0%, rgba(69, 91, 200, 0.08) 0%, transparent 70%)"
      }}
    />

    <div className="wrapper" style={{ position: "relative", zIndex: 1 }}>
      <div
        style={{
          maxWidth: "60rem",
          margin: "0 auto",
          textAlign: "center",
          padding: "0rem 1rem",
        }}
      >
        {/* Match Blogs Tag Style */}
        <div
            className="gradient-rounded-text-box"
            style={{
              margin: "0 auto 1.5rem",
              background: "rgba(69, 91, 200, 0.08)",
              color: "#455bc8",
              border: "1px solid rgba(69, 91, 200, 0.15)",
              padding: "0.4rem 1.25rem",
              borderRadius: "99px",
              fontSize: "0.8rem",
              fontWeight: 600,
              width: "fit-content",
            }}
          >
            Our Products
          </div>

        {/* Same font-size and color as Blogs Heading */}
        <h1
          className="heading-2" 
          style={{ 
              // marginBottom: "1.5rem",
              // // fontSize: "1.95rem", 
              // fontWeight: "700",
              // color: "#374492",
              // lineHeight: "1.2"
          }}
        >
          Coming Soon
        </h1>

        <p
          className="desc"
          style={{
            maxWidth: "38rem",
            margin: "0 auto 4rem",
            fontSize: "1.1rem",
            lineHeight: "1.6",
            color: "#4b5563"
          }}
        >
          We are building integrated technology solutions to streamline B2B hiring workflows and organizational structure.
        </p>

        {/* Progress Bars Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            marginBottom: "5rem",
            flexWrap: "wrap",
          }}
        >
          {/* Core Engine */}
          <div style={{ textAlign: "center", minWidth: "160px" }}>
            <div className="coming-soon-progress" style={{ background: "var(--primary-l)" }}>
              <div
                className="progress-fill"
                style={{
                  width: "75%",
                  background: "var(--primary)",
                  boxShadow: "0 0 15px rgba(69, 91, 200, 0.2)"
                }}
              />
            </div>
            <div style={{ fontSize: "0.95rem", color: "var(--text-tertiary)", marginTop: "1rem" }}>
              <span style={{ color: "var(--primary-dark)", fontWeight: 700 }}>75%</span>
              <br />
              <span style={{ fontWeight: 500 }}>Core Engine</span>
            </div>
          </div>

          {/* UI Section */}
          <div style={{ textAlign: "center", minWidth: "160px" }}>
            <div className="coming-soon-progress" style={{ background: "var(--primary-l)" }}>
              <div
                className="progress-fill"
                style={{
                  width: "45%",
                  background: "var(--primary-light)",
                }}
              />
            </div>
            <div style={{ fontSize: "0.95rem", color: "var(--text-tertiary)", marginTop: "1rem" }}>
              <span style={{ color: "var(--primary-dark)", fontWeight: 700 }}>45%</span>
              <br />
              <span style={{ fontWeight: 500 }}>User Interface</span>
            </div>
          </div>
        </div>

        {/* Waitlist Form */}
        <div style={{ paddingBottom: "4rem" }}>
           <WaitlistForm />
        </div>
      </div>
    </div>
  </main>
);

export default Products;