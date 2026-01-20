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
import Products from "./pages/Products";
import Testimonials from "./pages/Testimonials";
import Blogs from "./pages/Blogs";
import VCIOVCFO from "./pages/VCIOVCFO";
import CareerPage from "./pages/CareerPage";

// ✅ NEW: 12 sub-services imports
import AccountingFinance from "./pages/subservices/AccountingFinance";
import HRM from "./pages/subservices/HRM";
import InternalAuditGovernance from "./pages/subservices/InternalAuditGovernance";
import SOPDraftingDocumentation from "./pages/subservices/SOPDraftingDocumentation";
import BusinessOperations from "./pages/subservices/BusinessOperations";
import VCIO from "./pages/subservices/VCIO";
import VCFO from "./pages/subservices/VCFO";
import DigitalSolutions from "./pages/subservices/DigitalSolutions";
import CustomSoftwareDevelopment from "./pages/subservices/CustomSoftwareDevelopment";
import WebAppDevelopment from "./pages/subservices/WebAppDevelopment";
import ERPCRMDevelopment from "./pages/subservices/ERPCRMDevelopment";
import CloudSolutions from "./pages/subservices/CloudSolutions";

import "./index.css";

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
          paddingTop: "4rem", // reduced from 4.5rem
          backgroundColor: "var(--bg-main)",
        }}
      >
        <Routes>
          {/* Existing routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/it-development" element={<ITDevelopment />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/vcio-vcfo" element={<VCIOVCFO />} />
          <Route path="/career" element={<CareerPage />} />

          {/* ✅ NEW: 12 sub-services routes */}
          <Route
            path="/services/business-consulting/accounting-finance"
            element={<AccountingFinance />}
          />
          <Route path="/services/business-consulting/hrm" element={<HRM />} />
          <Route
            path="/services/business-consulting/internal-audit-governance"
            element={<InternalAuditGovernance />}
          />
          <Route
            path="/services/business-consulting/sop-drafting-documentation"
            element={<SOPDraftingDocumentation />}
          />
          <Route
            path="/services/business-consulting/business-operations"
            element={<BusinessOperations />}
          />
          <Route path="/services/vcio-vcfo/vcio" element={<VCIO />} />
          <Route path="/services/vcio-vcfo/vcfo" element={<VCFO />} />
          <Route
            path="/services/it-development/digital-solutions"
            element={<DigitalSolutions />}
          />
          <Route
            path="/services/it-development/custom-software-development"
            element={<CustomSoftwareDevelopment />}
          />
          <Route
            path="/services/it-development/web-app-development"
            element={<WebAppDevelopment />}
          />
          <Route
            path="/services/it-development/erp-crm-development"
            element={<ERPCRMDevelopment />}
          />
          <Route
            path="/services/it-development/cloud-solutions"
            element={<CloudSolutions />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
