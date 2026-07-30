import { Phone, MapPin, Clock } from 'lucide-react';
import Contact from '../components/Contact/Contact';
import './services/ServicePage.css';
import './ContactPage.css';

const INFO_CARDS = [
  {
    icon: MapPin,
    title: 'Our Office',
    lines: ['5th Floor 507, East Court', 'Phoenix Market City, Clover Park', 'Viman Nagar, Pune, India 411014'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['204 513 2366'],
  },
  {
    icon: Clock,
    title: 'Support Hours',
    lines: ['Available 24/7', 'Across all time zones'],
  },
];

function ContactPage() {
  return (
    <>
      <section className="service-hero">
        <div className="container service-hero__top">
          <div>
            <span className="section-label section-label--dark">Contact Us</span>
            <h1 className="service-hero__title">Let's Build Your Growth Engine</h1>
            <p className="service-hero__tagline">
              We're selective about the partnerships we take on — every engagement gets our
              full strategic attention.
            </p>
          </div>
          <div className="service-hero__call">
            <span className="service-hero__call-label">Call us</span>
            <span className="service-hero__call-number">
              <span className="service-hero__call-icon">
                <Phone size={16} />
              </span>
              204 513 2366
            </span>
          </div>
        </div>
      </section>

      <section className="service-intro">
        <div className="container">
          <div className="contact-page__info-grid">
            {INFO_CARDS.map(({ icon: Icon, title, lines }) => (
              <div className="contact-page__info-card" key={title}>
                <div className="contact-page__info-icon">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                {lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default ContactPage;