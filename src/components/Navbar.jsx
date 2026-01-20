import { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaXmark, FaChevronDown } from "react-icons/fa6";
import logo from "../assets/logo.png";
import "./Navbar.css";

const SERVICES = [
  {
    key: "business",
    label: "Business Consulting",
    to: "/consulting",
    items: [
      {
        label: "Business Operations",
        to: "/services/business-consulting/business-operations",
      },
      {
        label: "Accounting & Finance",
        to: "/services/business-consulting/accounting-finance",
      },
      { label: "HRM", to: "/services/business-consulting/hrm" },
      {
        label: "Internal Audit & Governance",
        to: "/services/business-consulting/internal-audit-governance",
      },
      {
        label: "SOP Drafting & Documentation",
        to: "/services/business-consulting/sop-drafting-documentation",
      },
    ],
  },
  {
    key: "vcio-vcfo",
    label: "vCIO / vCFO",
    to: "/vcio-vcfo",
    items: [
      {
        label: "vCIO (Virtual Chief Information Officer)",
        to: "/services/vcio-vcfo/vcio",
      },
      {
        label: "vCFO (Virtual Chief Finance Officer)",
        to: "/services/vcio-vcfo/vcfo",
      },
    ],
  },
  {
    key: "it-dev",
    label: "IT Development",
    to: "/it-development",
    items: [
      {
        label: "Digital Solutions",
        to: "/services/it-development/digital-solutions",
      },
      {
        label: "Custom Software Development",
        to: "/services/it-development/custom-software-development",
      },
      {
        label: "Web & App Development",
        to: "/services/it-development/web-app-development",
      },
      {
        label: "ERP & CRM Development",
        to: "/services/it-development/erp-crm-development",
      },
      {
        label: "Cloud Solutions",
        to: "/services/it-development/cloud-solutions",
      },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeServiceKey, setActiveServiceKey] = useState("business");

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileActiveGroup, setMobileActiveGroup] = useState(null);

  const navRef = useRef(null);
  const ddRef = useRef(null);
  const closeTimerRef = useRef(null);

  const location = useLocation();

  const activeGroup = useMemo(
    () => SERVICES.find((g) => g.key === activeServiceKey) || SERVICES[0],
    [activeServiceKey]
  );

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openServices = () => {
    clearCloseTimer();
    setServicesOpen(true);
  };

  const closeServicesSoon = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setServicesOpen(false), 140);
  };

  const closeAll = () => {
    clearCloseTimer();
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileActiveGroup(null);
    setServicesOpen(false);
  };

  // close on route change
  useEffect(() => {
    closeAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // close on outside click + ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeAll();
    };

    const onClick = (e) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) closeAll();
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <header className="Zenrax-nav" ref={navRef}>
      <div className="Zenrax-nav__shell">
        <div className="Zenrax-nav__bar">
          {/* LEFT: Logo */}
          <NavLink
            to="/"
            className="Zenrax-nav__logo"
            aria-label="Zenrax Home"
            onClick={closeAll}
          >
            <img src={logo} alt="Zenrax" />
          </NavLink>

          {/* CENTER: Links (desktop) */}
          <nav className="Zenrax-nav__links" aria-label="Primary navigation">
            <NavLink to="/" className="Zenrax-nav__link">
              Home
            </NavLink>

            <NavLink to="/about" className="Zenrax-nav__link">
              About
            </NavLink>

            {/* Services dropdown (desktop) */}
            <div
              className="Zenrax-nav__dd"
              ref={ddRef}
              onMouseEnter={openServices}
              onMouseLeave={closeServicesSoon}
            >
              <button
                type="button"
                className={`Zenrax-nav__link Zenrax-nav__ddTrigger ${
                  servicesOpen ? "is-open" : ""
                }`}
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
              >
                <span>Services</span>
                <FaChevronDown
                  className={`Zenrax-nav__caret ${servicesOpen ? "open" : ""}`}
                />
              </button>

              <div
                className={`Zenrax-nav__ddMenu Zenrax-nav__mega ${
                  servicesOpen ? "show" : ""
                }`}
                role="menu"
                onMouseEnter={openServices}
                onMouseLeave={closeServicesSoon}
              >
                <div className="Zenrax-nav__megaCols">
                  {/* Left: 3 main services */}
                  <div className="Zenrax-nav__megaLeft">
                    {SERVICES.map((g) => {
                      const isActive = g.key === activeServiceKey;
                      return (
                        <button
                          key={g.key}
                          type="button"
                          className={`Zenrax-nav__megaGroup ${
                            isActive ? "is-active" : ""
                          }`}
                          onMouseEnter={() => setActiveServiceKey(g.key)}
                          onFocus={() => setActiveServiceKey(g.key)}
                          onClick={() => setActiveServiceKey(g.key)}
                        >
                          {g.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Right: sub-services */}
                  <div className="Zenrax-nav__megaRight">
                    <NavLink
                      to={activeGroup.to}
                      className="Zenrax-nav__megaHeading"
                      role="menuitem"
                      onClick={closeAll}
                    >
                      {activeGroup.label}
                    </NavLink>

                    <div className="Zenrax-nav__megaList">
                      {activeGroup.items.map((it) => (
                        <NavLink
                          key={it.to}
                          to={it.to}
                          className="Zenrax-nav__ddItem"
                          role="menuitem"
                          onClick={closeAll}
                        >
                          {it.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/products" className="Zenrax-nav__link">
              Our Products
            </NavLink>

            <NavLink to="/testimonials" className="Zenrax-nav__link">
              Testimonials
            </NavLink>

            <NavLink to="/blogs" className="Zenrax-nav__link">
              Blogs
            </NavLink>
            <NavLink to="/career" className="Zenrax-nav__link">
              Career
            </NavLink>
          </nav>

          {/* RIGHT: CTA + Hamburger */}
          <div className="Zenrax-nav__right">
            <NavLink
              to="/contact"
              className="Zenrax-nav__cta"
              onClick={closeAll}
            >
              Get in Touch
            </NavLink>

            <button
              type="button"
              className="Zenrax-nav__toggle"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile menu: render only when open (avoids aria-hidden focus warning) */}
      {mobileOpen && (
        <div className="Zenrax-m open">
          <div className="Zenrax-m__backdrop" onClick={closeAll} />
          <div className="Zenrax-m__card" role="dialog" aria-modal="true">
            <div className="Zenrax-m__list">
              <NavLink to="/" className="Zenrax-m__link" onClick={closeAll}>
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="Zenrax-m__link"
                onClick={closeAll}
              >
                About
              </NavLink>

              <button
                type="button"
                className="Zenrax-m__link Zenrax-m__accordion"
                onClick={() => setMobileServicesOpen((v) => !v)}
                aria-expanded={mobileServicesOpen}
              >
                <span>Services</span>
                <FaChevronDown
                  className={`Zenrax-nav__caret ${
                    mobileServicesOpen ? "open" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="Zenrax-m__sub">
                  {SERVICES.map((g) => (
                    <div key={g.key} className="Zenrax-m__group">
                      <button
                        type="button"
                        className="Zenrax-m__sublink Zenrax-m__groupBtn"
                        onClick={() =>
                          setMobileActiveGroup((prev) =>
                            prev === g.key ? null : g.key
                          )
                        }
                        aria-expanded={mobileActiveGroup === g.key}
                      >
                        <span>{g.label}</span>
                        <FaChevronDown
                          className={`Zenrax-nav__caret ${
                            mobileActiveGroup === g.key ? "open" : ""
                          }`}
                        />
                      </button>

                      {mobileActiveGroup === g.key && (
                        <div className="Zenrax-m__sub2">
                          <NavLink
                            to={g.to}
                            className="Zenrax-m__sublink"
                            onClick={closeAll}
                          >
                            {g.label} →
                          </NavLink>
                          {g.items.map((it) => (
                            <NavLink
                              key={it.to}
                              to={it.to}
                              className="Zenrax-m__sublink"
                              onClick={closeAll}
                            >
                              {it.label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <NavLink
                to="/products"
                className="Zenrax-m__link"
                onClick={closeAll}
              >
                Our Products
              </NavLink>
              <NavLink
                to="/testimonials"
                className="Zenrax-m__link"
                onClick={closeAll}
              >
                Testimonials
              </NavLink>
              <NavLink
                to="/blogs"
                className="Zenrax-m__link"
                onClick={closeAll}
              >
                Blogs
              </NavLink>
              <NavLink
                to="/career"
                className="Zenrax-m__link"
                onClick={closeAll}
              >
                Career
              </NavLink>
            </div>

            <NavLink to="/contact" className="Zenrax-m__cta" onClick={closeAll}>
              Get in Touch
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
