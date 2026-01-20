import React, { useState } from "react";
import { FaCloudUploadAlt, FaCheckCircle, FaChevronDown } from "react-icons/fa";
import "../components/GlassLayout.css";

export default function CareerPage({ contactScriptUrl }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    education: "",
    experience: "Fresher",
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type === "application/pdf") setFile(droppedFile);
    else alert("Please upload a PDF file.");
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile?.type === "application/pdf") setFile(selectedFile);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please upload your resume.");
    setLoading(true);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64File = reader.result.split(",")[1];
      const payload = {
        ...form,
        filename: file.name,
        fileData: base64File,
        timestamp: new Date().toLocaleString("en-IN"),
      };
      try {
        await fetch(contactScriptUrl, {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(payload),
        });
        setSent(true);
      } catch (err) {
        alert("Submission failed.");
      } finally {
        setLoading(false);
      }
    };
  };

  return (
    <main
      className="section-padding"
      style={{ background: "#fafbff", minHeight: "100vh" }}
    >
      <div className="wrapper" style={{ maxWidth: "60rem", margin: "0 auto" }}>
        {/* HEADER SECTION - Centered Stack */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <div
            className="gradient-rounded-text-box"
            style={{
              margin: "0 0 1.25rem 0",
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
            Career
          </div>
          <h1
            className="heading-2 text-gradient"
            style={{ marginBottom: "1rem" }}
          >
            Join Our Talent Pool
          </h1>
          <p className="desc" style={{ maxWidth: "35rem" }}>
            Upload your resume and we'll reach out when we have a matching
            opening.
          </p>
        </div>

        <section
          className="card"
          style={{
            padding: "2.5rem",
            borderRadius: "1.5rem",
            background: "#ffffff",
            border: "1px solid #ecedf6",
            boxShadow: "0 20px 40px rgba(0,0,0,0.03)",
          }}
        >
          {sent ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <FaCheckCircle
                size={60}
                color="#455bc8"
                style={{ marginBottom: "1.5rem" }}
              />
              <h2 className="heading-3">Application Submitted!</h2>
              <button
                onClick={() => setSent(false)}
                className="primary-btn"
                style={{ background: "#455bc8" }}
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div className="career-grid">
                <input
                  className="Zenrax-input"
                  placeholder="Full Name"
                  required
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className="Zenrax-input"
                  placeholder="Email"
                  type="email"
                  required
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="career-grid">
                <input
                  className="Zenrax-input"
                  placeholder="Education (e.g. B.Tech, MBA)"
                  required
                  onChange={(e) =>
                    setForm({ ...form, education: e.target.value })
                  }
                />

                {/* SELECT FIX FOR MOBILE */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "52px",
                  }}
                >
                  <select
                    className="Zenrax-input custom-select"
                    onChange={(e) =>
                      setForm({ ...form, experience: e.target.value })
                    }
                  >
                    <option value="Fresher">Fresher</option>
                    <option value="1-3 Years">1-3 Years</option>
                    <option value="3-5 Years">3-5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                  <FaChevronDown className="select-arrow" />
                </div>
              </div>

              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragOver(true);
                }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={handleDrop}
                className="drop-zone"
                style={{
                  borderColor: isDragOver ? "#455bc8" : "#ecedf6",
                  background: isDragOver
                    ? "rgba(69, 91, 200, 0.05)"
                    : "#fafbff",
                }}
              >
                <input
                  type="file"
                  id="resume"
                  hidden
                  accept=".pdf"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="resume"
                  style={{ cursor: "pointer", display: "block" }}
                >
                  <FaCloudUploadAlt
                    size={45}
                    color={isDragOver ? "#455bc8" : "#94a3b8"}
                    style={{ marginBottom: "1rem" }}
                  />
                  <p className="desc">
                    {file ? (
                      <strong style={{ color: "#455bc8" }}>{file.name}</strong>
                    ) : (
                      "Drag & Drop Resume (PDF) or Click to Upload"
                    )}
                  </p>
                </label>
              </div>

              <button
                className="primary-btn"
                type="submit"
                disabled={loading}
                style={{ background: "#455bc8", height: "52px", width: "100%" }}
              >
                {loading ? "Uploading..." : "Submit Profile"}
              </button>
            </form>
          )}
        </section>
      </div>

      <style jsx>{`
        .career-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .Zenrax-input {
          height: 52px;
          border-radius: 12px;
          border: 1px solid #ecedf6;
          padding: 0 1.25rem;
          font-size: 1rem;
          background: #ffffff;
          outline: none;
          transition: border-color 0.3s ease;
          width: 100%;
          box-sizing: border-box;
        }

        /* CRITICAL MOBILE SELECT FIXES */
        .custom-select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          cursor: pointer;
          background-image: none !important;
        }

        .select-arrow {
          position: absolute;
          right: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: #94a3b8;
          font-size: 14px;
        }

        .drop-zone {
          border: 2px dashed #ecedf6;
          border-radius: 16px;
          padding: 3rem 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .career-grid {
            grid-template-columns: 1fr;
          }
          .card {
            padding: 1.5rem !important;
          }
          .heading-2 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </main>
  );
}
