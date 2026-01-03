import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaXmark, FaChevronDown } from "react-icons/fa6";
import logo from "../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navRef = useRef(null);
  const ddRef = useRef(null);
  const closeTimerRef = useRef(null);

  const location = useLocation();

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
    // small delay so user can move cursor into dropdown without flicker
    closeTimerRef.current = setTimeout(() => setServicesOpen(false), 140);
  };

  const closeAll = () => {
    clearCloseTimer();
    setMobileOpen(false);
    setMobileServicesOpen(false);
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
    <header className="phpd-nav" ref={navRef}>
      <div className="phpd-nav__shell">
        <div className="phpd-nav__bar">
          {/* LEFT: Logo */}
          <NavLink to="/" className="phpd-nav__logo" aria-label="PHPD Home" onClick={closeAll}>
            <img src={logo} alt="PHPD" />
          </NavLink>

          {/* CENTER: Links (desktop) */}
          <nav className="phpd-nav__links" aria-label="Primary navigation">
            <NavLink to="/" className="phpd-nav__link">
              Home
            </NavLink>

            <NavLink to="/about" className="phpd-nav__link">
              About
            </NavLink>

            {/* Services dropdown (desktop) */}
            <div
              className="phpd-nav__dd"
              ref={ddRef}
              onMouseEnter={openServices}
              onMouseLeave={closeServicesSoon}
            >
              <button
                type="button"
                className={`phpd-nav__link phpd-nav__ddTrigger ${servicesOpen ? "is-open" : ""}`}
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
              >
                <span>Services</span>
                <FaChevronDown className={`phpd-nav__caret ${servicesOpen ? "open" : ""}`} />
              </button>

              <div
                className={`phpd-nav__ddMenu ${servicesOpen ? "show" : ""}`}
                role="menu"
                onMouseEnter={openServices}
                onMouseLeave={closeServicesSoon}
              >
                <NavLink to="/consulting" className="phpd-nav__ddItem" role="menuitem" onClick={closeAll}>
                  Business Consulting
                </NavLink>
                <NavLink to="/it-development" className="phpd-nav__ddItem" role="menuitem" onClick={closeAll}>
                  IT Services
                </NavLink>
              </div>
            </div>

            <NavLink to="/products" className="phpd-nav__link">
              Our Products
            </NavLink>

            <NavLink to="/testimonials" className="phpd-nav__link">
              Testimonials
            </NavLink>

            <NavLink to="/blogs" className="phpd-nav__link">
              Blogs
            </NavLink>
          </nav>

          {/* RIGHT: CTA + Hamburger */}
          <div className="phpd-nav__right">
            <NavLink to="/contact" className="phpd-nav__cta" onClick={closeAll}>
              Get in Touch
            </NavLink>

            <button
              type="button"
              className="phpd-nav__toggle"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`phpd-m ${mobileOpen ? "open" : ""}`} aria-hidden={!mobileOpen}>
        <div className="phpd-m__backdrop" onClick={closeAll} />
        <div className="phpd-m__card" role="dialog" aria-modal="true">
          <div className="phpd-m__list">
            <NavLink to="/" className="phpd-m__link" onClick={closeAll}>
              Home
            </NavLink>
            <NavLink to="/about" className="phpd-m__link" onClick={closeAll}>
              About
            </NavLink>

            <button
              type="button"
              className="phpd-m__link phpd-m__accordion"
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
            >
              <span>Services</span>
              <FaChevronDown className={`phpd-nav__caret ${mobileServicesOpen ? "open" : ""}`} />
            </button>

            {mobileServicesOpen && (
              <div className="phpd-m__sub">
                <NavLink to="/consulting" className="phpd-m__sublink" onClick={closeAll}>
                  Business Consulting
                </NavLink>
                <NavLink to="/it-development" className="phpd-m__sublink" onClick={closeAll}>
                  IT Services
                </NavLink>
              </div>
            )}

            <NavLink to="/products" className="phpd-m__link" onClick={closeAll}>
              Our Products
            </NavLink>
            <NavLink to="/testimonials" className="phpd-m__link" onClick={closeAll}>
              Testimonials
            </NavLink>
            <NavLink to="/blogs" className="phpd-m__link" onClick={closeAll}>
              Blogs
            </NavLink>
          </div>

          <NavLink to="/contact" className="phpd-m__cta" onClick={closeAll}>
            Get in Touch
          </NavLink>
        </div>
      </div>
    </header>
  );
}
