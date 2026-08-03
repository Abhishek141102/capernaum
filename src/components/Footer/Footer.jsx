import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import './Footer.css';

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41-.56-.22-.96-.48-1.38-.9a3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.05-.41-2.22-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.8c-3.15 0-3.5.01-4.73.07-1.03.05-1.6.22-1.97.36-.5.19-.85.42-1.22.79-.37.37-.6.72-.79 1.22-.14.37-.31.94-.36 1.97-.06 1.23-.07 1.58-.07 4.73s.01 3.5.07 4.73c.05 1.03.22 1.6.36 1.97.19.5.42.85.79 1.22.37.37.72.6 1.22.79.37.14.94.31 1.97.36 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c1.03-.05 1.6-.22 1.97-.36.5-.19.85-.42 1.22-.79.37-.37.6-.72.79-1.22.14-.37.31-.94.36-1.97.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.05-1.03-.22-1.6-.36-1.97a3.3 3.3 0 0 0-.79-1.22 3.3 3.3 0 0 0-1.22-.79c-.37-.14-.94-.31-1.97-.36-1.23-.06-1.58-.07-4.73-.07zm0 4.59a5.45 5.45 0 1 1 0 10.9 5.45 5.45 0 0 1 0-10.9zm0 8.99a3.54 3.54 0 1 0 0-7.08 3.54 3.54 0 0 0 0 7.08zm6.94-9.2a1.27 1.27 0 1 1-2.55 0 1.27 1.27 0 0 1 2.55 0z" />
  </svg>
);

const SERVICES = [
  { label: 'B2B Lead Generation', to: '/services/b2b-lead-generation' },
  { label: 'Cold Email Outreach', to: '/services/cold-email-outreach' },
  { label: 'Appointment Setting', to: '/services/appointment-setting' },
  { label: 'Customer Support', to: '/services/customer-support' },
  { label: 'IT Solutions', to: '/services/it-solutions' },
  { label: 'Digital Marketing', to: '/services/digital-marketing' },
  { label: 'Market Research', to: '/services/market-research' },
  { label: 'Quality Assurance', to: '/services/quality-assurance' },
];

const COMPANY = [
  { label: 'About Us', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Our Team', to: '/our-team' },
];

const MORE_LINKS = [
  { label: 'Cookie Policy', to: '/cookie-policy' },
  { label: 'GDPR Privacy Notice', to: '/gdpr-privacy-notice' },
  { label: 'Data Security & Compliance', to: '/data-security-compliance' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-mark">C</span>
            <div className="footer__logo-text">
              <span className="footer__logo-title">CAPERNAUM</span>
              <span className="footer__logo-sub">SOLUTIONS PVT LTD</span>
            </div>
          </div>
          <p className="footer__tagline">
            The enterprise growth engine partner for organisations that demand more than a
            vendor — and deserve more than a promise.
          </p>
          <div className="footer__contact">
            <a href="tel:+12045132366">
              <Phone size={15} /> +1 (204) 513-2366
            </a>
            <a href="mailto:contact@capernaum.com">
              <Mail size={15} /> contact@capernaum.com
            </a>
          </div>
          <div className="footer__socials">
            <a href="https://www.facebook.com/people/Capernaum-Solutions/61577803556763/" target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a>
            <a href="https://www.instagram.com/capernaumsolutions_official" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            {SERVICES.map(({ label, to }) => (
              <li key={label}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            {COMPANY.map(({ label, to }) => (
              <li key={label}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>More Links</h4>
          <ul>
            {MORE_LINKS.map(({ label, to }) => (
              <li key={label}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Capernaum Solutions Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;