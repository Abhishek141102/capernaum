import { Link } from 'react-router-dom';
import { Headphones, CheckCircle, Cpu, Megaphone, Search, Target, Mail, CalendarCheck, ArrowRight } from 'lucide-react';
import './Services.css';

const SERVICES = [
  {
    icon: Target,
    title: 'B2B Lead Generation',
    desc: 'Identifying and connecting with high-intent decision-makers to build a consistent pipeline of qualified B2B opportunities.',
    slug: 'b2b-lead-generation',
  },
  {
    icon: Mail,
    title: 'Cold Email Outreach',
    desc: 'Crafting personalized, high-converting email campaigns that open doors and start meaningful sales conversations.',
    slug: 'cold-email-outreach',
  },
  {
    icon: CalendarCheck,
    title: 'Appointment Setting',
    desc: 'Booking qualified meetings directly onto your calendar, so your sales team can focus on closing, not chasing.',
    slug: 'appointment-setting',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    desc: 'Providing exceptional customer support that builds trust and loyalty, one call at a time.',
    slug: 'customer-support',
  },
  {
    icon: Cpu,
    title: 'IT Solutions',
    desc: 'Delivering secure, scalable, and innovative IT services tailored to evolving business demands.',
    slug: 'it-solutions',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: "Unlock your brand's potential with data-driven digital marketing strategies that deliver results.",
    slug: 'digital-marketing',
  },
  {
    icon: Search,
    title: 'Market Research',
    desc: 'In-depth market research and insights that help you understand your audience and make smarter business decisions.',
    slug: 'market-research',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    desc: 'Implementing rigorous monitoring and feedback processes to maintain unparalleled service standards.',
    slug: 'quality-assurance',
  },
];

function WhatWeDo() {
  return (
    <section className="what-we-do" id="services">
      <div className="container">
        <span className="section-label">Our Services</span>

        <h2 className="what-we-do__heading">
          We provide seamless, scalable BPO and IT solutions tailored to meet
          your business needs — because every interaction is an opportunity to build 
          trust, strengthen relationships, and elevate your brand.
        </h2>

        <div className="what-we-do__grid">
          {SERVICES.map(({ icon: Icon, title, desc, slug }) => (
            <Link to={`/services/${slug}`} className="capability-card" key={title}>
              <div className="capability-card__icon">
                <Icon size={20} />
              </div>
              <div className="capability-card__row">
                <h3>{title}</h3>
                <span className="capability-card__arrow">
                  <ArrowRight size={16} />
                </span>
              </div>
              <p>{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;