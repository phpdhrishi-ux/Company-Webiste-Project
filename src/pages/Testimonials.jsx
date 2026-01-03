import "../components/GlassLayout.css";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Mahavir Khater",
    role: "Director, Buildbloc Square Bricks Pvt Ltd",
    feedback:
      "We entrusted PHPD Hiring and Staffing Private Limited with the web design and development of our venture, and the results have been outstanding. Their team delivered a sleek, user-friendly website tailored to our requirements, while ensuring smooth functionality and timely execution.",
  },
  {
    name: "Akash Kandharkar",
    role: "Founder, SudhaKamal IT Solutions Pvt Ltd",
    feedback:
      "Partnering with PHPD Hiring and Staffing Private Limited has been a game-changer for us. Their team supported us in finding the right talent quickly and also provided reliable IT solutions that streamlined our internal operations.",
  },
  {
    name: "Yash Garje",
    role: "Director, Balaji Packaging Pvt Ltd",
    feedback:
      "We partnered with PHPD Hiring and Staffing Private Limited for a custom software solution to manage our factory's inventory and production process. The results have been excellent. Their team delivered a user-friendly, efficient system.",
  },
];

const Testimonials = () => {
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <main className="section-padding">
      <div className="wrapper">
        <div style={{ maxWidth: "72rem", textAlign: "center" }}>
          <div className="gradient-rounded-text-box" style={{ margin: "0 auto 2rem", maxWidth: "fit-content" }}>
            Testimonials
          </div>
          <h1 className="heading-2 text-gradient" style={{ marginBottom: "1.25rem" }}>
            What Our Clients Say
          </h1>
          <p className="desc" style={{ maxWidth: "40rem", margin: "0 auto 3rem" }}>
            Hear from founders about how PHPD's IT solutions and staffing delivered measurable impact.
          </p>

          {/* Scrolling testimonials */}
          <div style={{ overflow: "hidden", padding: "2rem 0" }}>
            <div 
              className="flex gap-6 py-4"
              style={{
                animation: "scroll-left 40s linear infinite",
              }}
            >
              {scrollingTestimonials.map((t, i) => (
                <div
                  key={i}
                  className="card"
                  style={{
                    minWidth: "380px",
                    padding: "1.75rem",
                    borderRadius: "1.5rem",
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(124,58,237,0.2)",
                    boxShadow: "0 20px 50px rgba(15,23,42,0.1)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                    <FaUserCircle size={44} style={{ color: "#7c3aed" }} />
                    <div>
                      <h3 className="heading-3" style={{ marginBottom: "0.25rem", color: "#1e293b" }}>
                        {t.name}
                      </h3>
                      <p className="desc" style={{ fontSize: "0.9rem", color: "#64748b" }}>
                        {t.role}
                      </p>
                    </div>
                  </div>
                  <p className="desc" style={{ color: "#475569", lineHeight: 1.6 }}>
                    "{t.feedback}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (hover: hover) {
          .card:hover {
            transform: translateY(-8px) !important;
            box-shadow: 0 30px 60px rgba(15,23,42,0.15) !important;
          }
        }
      `}</style>
    </main>
  );
};

export default Testimonials;
