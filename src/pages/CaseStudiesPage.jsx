import { Phone, ArrowUpRight } from 'lucide-react';
import Contact from '../components/Contact/Contact';
import './services/ServicePage.css';
import '../components/CaseStudies/CaseStudies.css';

const CASE_STUDIES = [
  {
    tag: 'Healthcare',
    stat: '60%',
    statLabel: 'Faster response time',
    title: 'Scaling Patient Support for a Healthcare Provider',
    desc: 'Deployed a dedicated inbound support team to handle patient queries and appointment coordination, cutting average response time and lifting CSAT scores.',
    photo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80',
  },
  {
    tag: 'E-commerce & Retail',
    stat: '3x',
    statLabel: 'Qualified leads generated',
    title: 'Building a Predictable Pipeline for an Online Retailer',
    desc: 'Combined targeted lead generation with data-driven outreach to help a growing retail brand triple its qualified sales pipeline within six months.',
    photo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80',
  },
  {
    tag: 'Banking & Finance',
    stat: '40%',
    statLabel: 'Reduction in system downtime',
    title: 'Modernizing IT Infrastructure for a Regional Bank',
    desc: 'Delivered a tailored IT solutions overhaul that improved system reliability and reduced downtime, keeping operations running smoothly for customers.',
    photo: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=700&q=80',
  },
  {
    tag: 'Telecom',
    stat: '35%',
    statLabel: 'Reduction in customer churn',
    title: 'Improving Subscriber Retention for a Telecom Provider',
    desc: 'Rolled out a proactive customer support model that identified at-risk subscribers early and resolved issues before they led to cancellations.',
    photo: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=80',
  },
  {
    tag: 'Travel & Hospitality',
    stat: '2x',
    statLabel: 'Faster booking resolution',
    title: 'Scaling Guest Support for a Travel Booking Platform',
    desc: 'Built a round-the-clock support and appointment coordination team that cut booking-issue resolution time in half during peak travel season.',
    photo: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=700&q=80',
  },
];

function CaseStudiesPage() {
  return (
    <>
      <section className="service-hero">
        <div className="container service-hero__top">
          <div>
            <span className="section-label section-label--dark">Case Studies</span>
            <h1 className="service-hero__title">Case Studies</h1>
            <p className="service-hero__tagline">Real results from real partnerships</p>
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
            A closer look at how Capernaum Solutions has helped businesses across industries{' '}
            <em>scale support, streamline operations,</em> and drive measurable growth.
          </p>

          <div className="case-studies__grid">
            {CASE_STUDIES.map(({ tag, stat, statLabel, title, desc, photo }) => (
              <a href="#contact" className="case-card" key={title}>
                <div className="case-card__photo" style={{ backgroundImage: `url(${photo})` }}>
                  <span className="case-card__tag">{tag}</span>
                </div>
                <div className="case-card__body">
                  <div className="case-card__stat">
                    <span className="case-card__stat-value">{stat}</span>
                    <span className="case-card__stat-label">{statLabel}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <span className="case-card__link">
                    Read Case Study <ArrowUpRight size={15} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default CaseStudiesPage;