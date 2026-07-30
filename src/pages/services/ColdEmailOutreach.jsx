import { Phone, PenLine, Layers, LineChart } from 'lucide-react';
import Contact from '../../components/Contact/Contact';
import '../services/ServicePage.css';

const FEATURES = [
  {
    icon: PenLine,
    title: 'Personalized Copywriting',
    desc: 'Crafting tailored, high-converting email sequences that speak directly to your prospect\u2019s pain points.',
  },
  {
    icon: Layers,
    title: 'List Building & Segmentation',
    desc: 'Sourcing and verifying targeted prospect lists, segmented by industry, role, and buying intent.',
  },
  {
    icon: LineChart,
    title: 'A/B Testing & Optimization',
    desc: 'Continuously testing subject lines, messaging, and send times to maximize open and reply rates.',
  },
];

function ColdEmailOutreach() {
  return (
    <>
      <section className="service-hero">
        <div className="container service-hero__top">
          <div>
            <span className="section-label section-label--dark">Services</span>
            <h1 className="service-hero__title">Cold Email Outreach</h1>
            <p className="service-hero__tagline">Opening Doors With Emails That Get Replies</p>
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
            At Capernaum Solutions, we treat every cold email as a first impression. Our goal
            is to start meaningful sales conversations with your ideal customers —{' '}
            without sounding like a mass blast.
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
              Reaching the right inbox is only half the battle — the message has to earn a
              reply. Our outreach specialists research each prospect, craft personalized
              sequences, and manage deliverability best practices so your campaigns land in
              the inbox, not the spam folder, and start real conversations with decision-makers.
            </p>
          </div>
        </div>
      </section>

      <section
        className="service-cta"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="service-cta__overlay" />
        <div className="container service-cta__content">
          <h2>Turn Cold Inboxes Into Warm Conversations</h2>
          <p>
            See how a dedicated cold email team can fill your pipeline with genuine
            conversations. At Capernaum Solutions, we combine sharp copy with smart targeting
            to get campaigns that convert.
          </p>
          <a href="#contact" className="btn btn--gold">Contact Us</a>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default ColdEmailOutreach;