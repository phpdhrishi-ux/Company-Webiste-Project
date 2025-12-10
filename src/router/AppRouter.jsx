import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";

import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
