// src/pages/Portfolio.jsx
import { useState, useMemo } from "react";
import "../components/GlassLayout.css";

const FILTERS = ["All", "Web Development", "App Development"];

const PROJECTS = [
  {
    id: "cold-creekcap",
    title: "Cold Creekcap",
    subtitle: "Web experience for capital consulting firm.",
    category: "Web Development",
    image:
      "https://www.alfoxai.com/static/media/cold-creekcap.75315c225d77b8023a82.webp",
    url: "https://www.coldcreekcap.com",
  },
  {
    id: "think-reality",
    title: "Think Reality",
    subtitle: "Property discovery platform for real estate.",
    category: "Web Development",
    image:
      "https://www.alfoxai.com/static/media/think-reality.0658d41d9130e3950d72.webp",
    url: "https://thinkrealty.ae",
  },
  {
    id: "akash-mega-mart",
    title: "Akash Mega Mart",
    subtitle: "E‑commerce storefront for a retail brand.",
    category: "Web Development",
    image:
      "https://www.alfoxai.com/static/media/akash-mega-mart.6b1cedc3223598a70738.webp",
    url: "https://akashmegamart.com/",
  },
  {
    id: "midwam",
    title: "Midwam",
    subtitle: "Immersive experience company website.",
    category: "Web Development",
    image:
      "https://www.alfoxai.com/static/media/midwam.b95de4a86b46b221fa21.webp",
    url: "https://www.midwam.com/en/about",
  },
  {
    id: "akash-mega-mart-app",
    title: "Akash Mega Mart App",
    subtitle: "Mobile app for ordering groceries.",
    category: "App Development",
    image:
      "https://www.alfoxai.com/static/media/akash_mega_mart-app.76f324fc425c7f99d6f0.webp",
    url: "https://akashmegamart.com/",
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  return (
    <main
      className="bg-accent1 section-padding"
      style={{ position: "relative" }}
    >
      <div
        className="bg-radial-overlay"
        style={{ position: "absolute", inset: 0, opacity: 0.7 }}
      />

      <div className="wrapper" style={{ position: "relative", zIndex: 1 }}>
        {/* Heading */}
        <div style={{ maxWidth: "60rem", marginBottom: "2.75rem" }}>
          <div
            className="gradient-rounded-text-box"
            style={{ marginBottom: "1.5rem" }}
          >
            Portfolio
          </div>
          <h1
            className="heading-2 text-gradient"
            style={{ marginBottom: "1rem" }}
          >
            Selected Work & Experiments
          </h1>
          <p className="desc">
            A snapshot of client projects and internal builds across consulting,
            web applications, and automation. This library will keep expanding
            as PHPD ships more value.
          </p>
        </div>

        {/* Filter pills */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              padding: "0.25rem",
              borderRadius: "9999px",
              backgroundColor: "rgba(255,255,255,0.9)",
              boxShadow: "0 14px 40px rgba(15,23,42,0.18)",
              gap: "0.25rem",
            }}
          >
            {FILTERS.map((filter) => {
              const isActive = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  style={{
                    padding: "0.6rem 1.6rem",
                    borderRadius: "9999px",
                    border: "none",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    backgroundColor: isActive
                      ? "var(--bg-accent3)"
                      : "transparent",
                    color: isActive ? "#ffffff" : "#111827",
                    boxShadow: isActive
                      ? "0 12px 30px rgba(124,58,237,0.55)"
                      : "none",
                    transition:
                      "background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
                    transform: isActive ? "translateY(-1px)" : "translateY(0)",
                  }}
                  onMouseOver={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = "#f3f4f6";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

const PortfolioCard = ({ project }) => (
  <div
    className="group"
    style={{
      position: "relative",
      borderRadius: "1.75rem",
    }}
  >
    {/* Big ambient shadow like the AI card */}
    <div
      style={{
        position: "absolute",
        inset: "1.75rem -1.5rem -2.5rem",
        borderRadius: "2.5rem",
        background:
          "radial-gradient(circle at 20% 0%, rgba(124,58,237,0.35), transparent 60%)",
        opacity: 0.7,
        filter: "blur(26px)",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />

    {/* Main card */}
    <div
      className="card"
      style={{
        padding: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: "1.75rem",
        background:
          "linear-gradient(145deg, #ffffff, rgba(248,250,252,0.95))",
        boxShadow:
          "0 22px 60px rgba(148,163,184,0.28), 0 0 0 1px rgba(226,232,240,0.9)",
        border: "none",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Top image */}
      <div
        style={{
          position: "relative",
          paddingTop: "70%",
          overflow: "hidden",
          borderTopLeftRadius: "1.75rem",
          borderTopRightRadius: "1.75rem",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="portfolio-image"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          padding: "1.25rem 1.5rem 1.4rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.65rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.25rem 0.9rem",
              borderRadius: "9999px",
              fontSize: "0.72rem",
              fontWeight: 500,
              color: "#4c1d95",
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(59,130,246,0.04))",
              border: "1px solid rgba(124,58,237,0.25)",
            }}
          >
            {project.category}
          </span>

          <span
            style={{
              fontSize: "0.7rem",
              padding: "0.18rem 0.7rem",
              borderRadius: "9999px",
              backgroundColor: "#f9fafb",
              border: "1px solid rgba(226,232,240,0.9)",
              color: "#6b7280",
              fontWeight: 500,
            }}
          >
            Live · Stable
          </span>
        </div>

        <div>
          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "#0f172a",
              marginBottom: "0.2rem",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: "0.82rem",
              color: "#6b7280",
              margin: 0,
            }}
          >
            {project.subtitle}
          </p>
        </div>

        {/* Bottom CTA row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "0.6rem",
          }}
        >
<a
  href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.35rem",
    padding: "0.75rem 1.9rem",
    borderRadius: "9999px",
    border: "1px solid rgba(124,58,237,0.4)",
    background:
      "linear-gradient(135deg, rgba(124,58,237,0.06), rgba(255,255,255,0.95))",
    color: "#4c1d95",
    fontSize: "0.9rem",
    fontWeight: 500,
    letterSpacing: "0.02em",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(124,58,237,0.25)",
    transition:
      "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease",
    textDecoration: "none",
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow =
      "0 14px 32px rgba(124,58,237,0.35)";
    e.currentTarget.style.background =
      "linear-gradient(135deg, rgba(124,58,237,0.12), #ffffff)";
    e.currentTarget.style.borderColor = "#7c3aed";
    e.currentTarget.style.color = "#4c1d95";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 10px 25px rgba(124,58,237,0.25)";
    e.currentTarget.style.background =
      "linear-gradient(135deg, rgba(124,58,237,0.06), rgba(255,255,255,0.95))";
    e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)";
    e.currentTarget.style.color = "#4c1d95";
  }}
>
  Visit Project
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
</a>


          <span
            style={{
              fontSize: "0.75rem",
              color: "#9ca3af",
            }}
          >
            Built with modern JS stack
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;
