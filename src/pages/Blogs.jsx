// src/pages/Blogs.jsx
import "../components/GlassLayout.css";

const BLOG_CATEGORIES = ["All", "Strategy", "Technology", "Hiring", "Product"];

// Start with a few demo posts; add/remove anytime
const BLOG_POSTS = [
  {
    id: "ats-automation",
    title: "Designing an ATS That Recruiters Actually Use",
    category: "Hiring",
    date: "Dec 2025",
    readTime: "7 min read",
    excerpt:
      "How to move from spreadsheet chaos to a calm, searchable hiring pipeline without breaking your existing tools.",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    url: "#",
  },
  {
    id: "ai-screening",
    title: "Practical AI for Candidate Screening",
    category: "Technology",
    date: "Dec 2025",
    readTime: "5 min read",
    excerpt:
      "Where AI adds signal in hiring, where it doesn’t, and how to ship a compliant, human‑in‑the‑loop workflow.",
    image:
      "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1200",
    url: "#",
  },
  {
    id: "founder-dashboards",
    title: "Dashboards Founders Actually Check",
    category: "Strategy",
    date: "Nov 2025",
    readTime: "6 min read",
    excerpt:
      "Three views that give you cash, pipeline, and delivery health at a glance without a 40‑slide report.",
    image:
      "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200",
    url: "#",
  },
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const visiblePosts =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <main
      className="bg-accent1 section-padding"
      style={{ position: "relative" }}
    >
      <div
        className="bg-radial-overlay"
        style={{ position: "absolute", inset: 0, opacity: 0.6 }}
      />

      <div className="wrapper" style={{ position: "relative", zIndex: 1 }}>
        {/* Hero / heading */}
        <section style={{ marginBottom: "2.75rem" }}>
          <div
            className="gradient-rounded-text-box"
            style={{ marginBottom: "1.5rem" }}
          >
            Blogs
          </div>
          <h1
            className="heading-2 text-gradient"
            style={{ marginBottom: "1rem" }}
          >
            Insights for Builders & Hiring Teams
          </h1>
          <p className="desc" style={{ maxWidth: "42rem" }}>
            Short, practical essays on product, hiring workflows, and automation
            from PHPD’s work with founders and teams.
          </p>
        </section>

        {/* Category pill filter – like Alfox “All” pill */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "2.5rem",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              padding: "0.25rem",
              borderRadius: "9999px",
              backgroundColor: "#ffffff",
              boxShadow: "0 14px 40px rgba(15,23,42,0.12)",
              gap: "0.4rem",
            }}
          >
            {BLOG_CATEGORIES.map((cat) => {
              const active = cat === activeCategory;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "0.55rem 1.5rem",
                    borderRadius: "9999px",
                    border: "none",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    backgroundColor: active
                      ? "var(--bg-accent3)"
                      : "transparent",
                    color: active ? "#ffffff" : "#111827",
                    boxShadow: active
                      ? "0 12px 30px rgba(124,58,237,0.55)"
                      : "none",
                    transition:
                      "background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
                    transform: active ? "translateY(-1px)" : "translateY(0)",
                  }}
                  onMouseOver={(e) => {
                    if (!active) {
                      e.currentTarget.style.backgroundColor = "#f3f4f6";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!active) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid of posts */}
        {visiblePosts.length > 0 ? (
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem",
            }}
          >
            {visiblePosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </section>
        ) : (
          <section style={{ textAlign: "center", padding: "4rem 0" }}>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
                color: "#111827",
              }}
            >
              No articles found for this category.
            </h3>
            <p className="desc">
              Try another category or check back later as more PHPD articles go
              live.
            </p>
          </section>
        )}
      </div>
    </main>
  );
};

import { useState } from "react";

const BlogCard = ({ post }) => (
  <article
    className="card"
    style={{
      padding: 0,
      overflow: "hidden",
      borderRadius: "1.4rem",
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
  >
    {/* Image */}
    <div
      style={{
        position: "relative",
        paddingTop: "60%",
        overflow: "hidden",
        borderTopLeftRadius: "1.4rem",
        borderTopRightRadius: "1.4rem",
      }}
    >
      <img
        src={post.image}
        alt={post.title}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.5s ease",
        }}
        className="blog-image"
      />
    </div>

    {/* Content */}
    <div
      style={{
        padding: "1.3rem 1.4rem 1.4rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        flexGrow: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          fontSize: "0.78rem",
          color: "#6b7280",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            padding: "0.2rem 0.7rem",
            borderRadius: "9999px",
            backgroundColor: "rgba(124,58,237,0.08)",
            color: "#4c1d95",
            fontWeight: 500,
          }}
        >
          {post.category}
        </span>
        <span>•</span>
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>

      <h3
        style={{
          fontSize: "1.02rem",
          fontWeight: 700,
          color: "#111827",
        }}
      >
        {post.title}
      </h3>

      <p
        className="desc"
        style={{
          fontSize: "0.85rem",
          color: "#4b5563",
          marginBottom: "0.25rem",
        }}
      >
        {post.excerpt}
      </p>

      <div style={{ marginTop: "auto", paddingTop: "0.6rem" }}>
        <a
          href={post.url}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.25rem",
            fontSize: "0.85rem",
            fontWeight: 500,
            color: "#4c1d95",
            textDecoration: "none",
            transition: "color 0.2s ease, transform 0.2s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#7c3aed";
            e.currentTarget.style.transform = "translateX(2px)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = "#4c1d95";
            e.currentTarget.style.transform = "translateX(0)";
          }}
        >
          Read article
          <span style={{ fontSize: "1rem" }}>↗</span>
        </a>
      </div>
    </div>
  </article>
);

export default Blogs;
