import { Phone, CalendarCheck, Filter, BellRing } from 'lucide-react';
import Contact from '../../components/Contact/Contact';
import '../services/ServicePage.css';

const FEATURES = [
  {
    icon: CalendarCheck,
    title: 'Calendar Management',
    desc: 'Coordinating schedules seamlessly so your sales team never misses a valuable conversation.',
  },
  {
    icon: Filter,
    title: 'Prospect Screening',
    desc: 'Confirming interest and fit before a meeting is booked, so every appointment counts.',
  },
  {
    icon: BellRing,
    title: 'Follow-Up & Confirmation',
    desc: 'Reducing no-shows with timely reminders and proactive follow-up communication.',
  },
];

function AppointmentSetting() {
  return (
    <>
      <section className="service-hero">
        <div className="container service-hero__top">
          <div>
            <span className="section-label section-label--dark">Services</span>
            <h1 className="service-hero__title">Appointment Setting</h1>
            <p className="service-hero__tagline">Turning Conversations Into Confirmed Meetings</p>
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
          <p className="service-intro__lead">
            At Capernaum Solutions, we believe every appointment set is a step closer to a
            closed deal. Our goal is to fill your calendar with{' '}
            qualified, ready-to-talk prospects — so your sales team can focus on
            what they do best: selling.
          </p>

          <div className="service-features">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div className="service-feature-card" key={title}>
                <div className="service-feature-card__icon">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <div className="service-body">
            <p>
              Booking meetings with the right decision-makers takes more than a phone call —
              it takes research, timing, and a genuine conversation. Our appointment setting
              specialists work as an extension of your sales team, engaging prospects,
              understanding their needs, and securing meetings that are worth your time.
            </p>
          </div>
        </div>
      </section>

      <section
        className="service-cta"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="service-cta__overlay" />
        <div className="container service-cta__content">
          <h2>Fill Your Calendar With Qualified Meetings</h2>
          <p>
            See how a dedicated appointment setting team can keep your sales pipeline
            moving. At Capernaum Solutions, we combine thoughtful outreach with genuine
            conversations to book meetings that convert.
          </p>
          <a href="#contact" className="btn btn--gold">Contact Us</a>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default AppointmentSetting;