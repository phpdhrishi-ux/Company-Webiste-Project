// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Consulting from "./pages/Consulting";
import Industries from "./pages/Industries";
import ITDevelopment from "./pages/ITDevelopment";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import "./index.css";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--bg-main)",
        color: "#0f172a",
      }}
    >
      <Navbar />

      {/* main grows to push footer down */}
      <main
        style={{
          flex: 1,
          paddingTop: "4.5rem", // height of navbar
          backgroundColor: "var(--bg-main)",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/it-development" element={<ITDevelopment />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
