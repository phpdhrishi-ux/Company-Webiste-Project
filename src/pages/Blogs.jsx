import { useState } from "react";
import "../components/GlassLayout.css";

const BLOG_CATEGORIES = ["All", "Strategy", "Technology", "Hiring", "Product"];

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
      className="section-padding"
      style={{ position: "relative", background: "#fafbff" }}
    >
      <div className="wrapper" style={{ position: "relative", zIndex: 1 }}>
        {/* HEADER SECTION - Centered Stack */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "2.75rem",
          }}
        >
          {/* Blogs Pill on Top */}
          <div
            className="gradient-rounded-text-box"
            style={{
              margin: "0 0 1.25rem 0", // Margin bottom to space it from the heading
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
            Blogs
          </div>

          <h1
            className="heading-2 text-gradient"
            style={{ marginBottom: "1rem" }}
          >
            Insights for Builders & Hiring Teams
          </h1>
          <p className="desc" style={{ maxWidth: "42rem", margin: "0 auto" }}>
            Short, practical essays on product, hiring workflows, and automation
            from Zenrax’s work with founders and teams.
          </p>
        </section>

        {/* Category pill filter - Centered */}
        <div className="blog-filter-row" style={{ justifyContent: "center" }}>
          <div className="blog-filter-shell">
            {BLOG_CATEGORIES.map((cat) => {
              const active = cat === activeCategory;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className="blog-filter-pill"
                  data-active={active ? "true" : "false"}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid of posts */}
        {visiblePosts.length > 0 ? (
          <section className="blog-grid">
            {visiblePosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </section>
        ) : (
          <section style={{ textAlign: "center", padding: "4rem 0" }}>
            <h3
              style={{ fontSize: "1.1rem", fontWeight: 600, color: "#111827" }}
            >
              No articles found.
            </h3>
          </section>
        )}
      </div>

      {/* Added Hover Border Logic via Styled JSX to match your CSS classes */}
      <style jsx>{`
        .blog-card {
          border: 1px solid #ecedf6;
          transition: all 0.3s ease;
          background: #ffffff;
        }
        .blog-card:hover {
          border-color: #455bc8;
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(69, 91, 200, 0.08);
        }
      `}</style>
    </main>
  );
};

const BlogCard = ({ post }) => (
  <article className="card blog-card">
    <div className="blog-card-image-wrap">
      <img src={post.image} alt={post.title} className="blog-image" />
    </div>
    <div className="blog-card-body">
      <div className="blog-meta">
        <span className="blog-meta-pill">{post.category}</span>
        <span>•</span>
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
      <h3 className="blog-title">{post.title}</h3>
      <p className="desc blog-excerpt">{post.excerpt}</p>
      <div style={{ marginTop: "auto", paddingTop: "0.6rem" }}>
        <a href={post.url} className="blog-link">
          Read article <span style={{ fontSize: "1rem" }}>↗</span>
        </a>
      </div>
    </div>
  </article>
);

export default Blogs;
