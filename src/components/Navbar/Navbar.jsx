import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import "./Navbar.css";

const SERVICES = [
  { label: "B2B Lead Generation", slug: "b2b-lead-generation" },
  { label: "Cold Email Outreach", slug: "cold-email-outreach" },
  { label: "Appointment Setting", slug: "appointment-setting" },
  { label: "Customer Support", slug: "customer-support" },
  { label: "IT Solutions", slug: "it-solutions" },
  { label: "Digital Marketing", slug: "digital-marketing" },
  { label: "Market Research", slug: "market-research" },
  { label: "Quality Assurance", slug: "quality-assurance" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}>
          <span className="navbar__logo-mark">C</span>
          <div className="navbar__logo-text">
            <span className="navbar__logo-title">CAPERNAUM</span>
            <span className="navbar__logo-sub">SOLUTIONS PVT LTD</span>
          </div>
        </Link>

        <nav className="navbar__links">
          <NavLink to="/" className="navbar__link" end>
            Home
          </NavLink>
          <NavLink to="/about" className="navbar__link">
            About Us
          </NavLink>

          <div
            className="navbar__dropdown"
            ref={dropdownRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className="navbar__link navbar__dropdown-trigger"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services{" "}
              <ChevronDown
                size={14}
                className={servicesOpen ? "rotated" : ""}
              />
            </Link>

            {servicesOpen && (
              <div className="navbar__dropdown-menu">
                <div className="navbar__dropdown-menu-inner">
                  {SERVICES.map(({ label, slug }) => (
                    <Link
                      key={slug}
                      to={`/services/${slug}`}
                      className="navbar__dropdown-item"
                      onClick={() => setServicesOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/industries" className="navbar__link">
            Industries We Serve
          </NavLink>
          <NavLink to="/case-studies" className="navbar__link">
            Case Studies
          </NavLink>
          <NavLink to="/careers" className="navbar__link">
            Careers
          </NavLink>
          <NavLink to="/contact" className="navbar__link">
            Contact Us
          </NavLink>
        </nav>

        <Link to="/contact" className="navbar__cta">
          Partner With Us
        </Link>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__mobile">
          <Link
            to="/"
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>

          <div className="navbar__mobile-dropdown-trigger">
            <Link
              to="/services"
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <button
              className="navbar__mobile-chevron-btn"
              aria-label="Toggle services submenu"
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              <ChevronDown
                size={16}
                className={mobileServicesOpen ? "rotated" : ""}
              />
            </button>
          </div>

          {mobileServicesOpen && (
            <div className="navbar__mobile-submenu">
              {SERVICES.map(({ label, slug }) => (
                <Link
                  key={slug}
                  to={`/services/${slug}`}
                  className="navbar__mobile-submenu-item"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}

          <Link
            to="/industries"
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Industries We Serve
          </Link>
          <Link
            to="/case-studies"
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Case Studies
          </Link>
          <Link
            to="/careers"
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>

          <Link
            to="/contact"
            className="navbar__mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Partner With Us
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;