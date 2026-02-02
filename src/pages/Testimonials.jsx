import { useState, useRef } from "react";
import "../components/GlassLayout.css";
import { FaUserCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Mahavir Khater",
    role: "Director, Buildbloc Square Bricks",
    feedback:
      "We entrusted Zenrax with the web design and development of our venture, and the results have been outstanding. Their team delivered a sleek, user-friendly website while ensuring smooth functionality and timely execution.",
  },
  {
    name: "Akash Kandharkar",
    role: "Founder, SudhaKamal IT Solutions",
    feedback:
      "Partnering with Zenrax has been a game-changer. Their team supported us in finding the right talent quickly and provided reliable IT solutions that streamlined our internal operations.",
  },
  {
    name: "Yash Garje",
    role: "Director, Balaji Packaging Pvt Ltd",
    feedback:
      "We partnered with Zenrax for a custom software solution to manage our factory's inventory. The results have been excellent. Their team delivered a user-friendly, efficient system.",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <main className="section-padding" style={{ background: "#fafbff", padding: "100px 0 4rem" }}>
      <div className="wrapper">
        <div style={{ textAlign: "center", position: "relative" }}>
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
            Testimonials
          </div>

          <h2
            className="heading-2"
            style={{ marginBottom: "4rem", color: "#374492" }}
          >
            What Our Clients Say
          </h2>

          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto" }}>
            {/* Updated Nav Buttons: Top 50% and Half-on/Half-off */}
            <button onClick={() => scroll("left")} className="nav-btn left">
              <FaChevronLeft size={16} />
            </button>
            <button onClick={() => scroll("right")} className="nav-btn right">
              <FaChevronRight size={16} />
            </button>

            {/* Testimonial Container */}
            <div className="testimonial-grid-container" ref={scrollRef}>
              {testimonials.map((t, i) => (
                <div key={i} className="testimonial-card-item">
                  <div className="testimonial-card">
                    <div className="card-header">
                      <FaUserCircle className="user-icon" />
                      <div style={{ textAlign: "left" }}>
                        <h3 className="user-name">{t.name}</h3>
                        <p className="user-role">{t.role}</p>
                      </div>
                    </div>
                    <p className="feedback-text">"{t.feedback}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-grid-container {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 1rem 0.5rem 2.5rem; /* Bottom padding for shadow visibility */
        }

        .testimonial-grid-container::-webkit-scrollbar {
          display: none;
        }

        .testimonial-card-item {
          flex: 0 0 100%;
          scroll-snap-align: center;
        }

        /* The Glowy Card style from Home */
        .testimonial-card {
          background: #ffffff;
          border: 1px solid #ecedf6;
          border-radius: 0.375rem;
          padding: 1.75rem;
          text-align: left;
          box-shadow: 0 10px 30px rgba(69, 91, 200, 0.08); /* Glowy shadow */
          height: 100%;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          border-color: #455bc8;
          box-shadow: 0 15px 35px rgba(69, 91, 200, 0.15); /* Stronger glow */
          transform: translateY(-5px);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1.25rem;
        }

        .user-icon {
          font-size: 40px;
          color: #455bc8;
        }

        .user-name {
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
          color: #0f172a;
        }

        .user-role {
          font-size: 0.75rem;
          color: #455bc8;
          margin: 0;
          font-weight: 500;
        }

        .feedback-text {
          font-size: 0.85rem;
          line-height: 1.6;
          color: #475569;
          font-style: italic;
          margin: 0;
          text-align: left;
        }

        /* Updated Navigation Buttons Logic */
        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid #ecedf6;
          background: white;
          color: #455bc8;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .nav-btn:hover {
          background: #455bc8;
          color: white;
          border-color: #455bc8;
        }

        /* Half-on/Half-off offsets */
        .nav-btn.left {
          left: -21px; 
        }
        .nav-btn.right {
          right: -21px;
        }

        @media (min-width: 1024px) {
          .testimonial-grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            overflow-x: visible;
            gap: 2rem;
          }
          .testimonial-card-item { flex: none; }
          .nav-btn { display: none; }
          .testimonial-card { padding: 2.25rem; }
        }

        @media (max-width: 480px) {
          .nav-btn.left { left: -10px; }
          .nav-btn.right { right: -10px; }
        }
      `}</style>
    </main>
  );
};

export default Testimonials;