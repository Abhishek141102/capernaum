import { ArrowUpRight } from 'lucide-react';
import './CaseStudies.css';

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
];

function CaseStudies() {
  return (
    <section className="case-studies" id="case-studies">
      <div className="container">
        <span className="section-label">Case Studies</span>
        <h2 className="case-studies__heading">
          Real results from <span className="gold-italic">real partnerships.</span>
        </h2>

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
  );
}

export default CaseStudies;