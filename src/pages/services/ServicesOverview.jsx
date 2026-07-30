import { Link } from 'react-router-dom';
import { Phone, Target, Mail, CalendarCheck, Headphones, Cpu, Megaphone, Search, CheckCircle, ArrowRight } from 'lucide-react';
import Contact from '../../components/Contact/Contact';
import './ServicePage.css';
import './ServicesOverview.css';

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

function ServicesOverview() {
  return (
    <>
      <section className="service-hero">
        <div className="container service-hero__top">
          <div>
            <span className="section-label section-label--dark">What We Do</span>
            <h1 className="service-hero__title">Our Services</h1>
            <p className="service-hero__tagline">
              Seamless, scalable BPO and IT solutions tailored to meet your business needs
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
          <p className="service-intro__lead">
            Every interaction is an opportunity to build <em>trust, strengthen
            relationships,</em> and elevate your brand. Explore our full range of BPO and IT
            services below.
          </p>

          <div className="services-overview__grid">
            {SERVICES.map(({ icon: Icon, title, desc, slug }) => (
              <Link to={`/services/${slug}`} className="services-overview__card" key={slug}>
                <div className="services-overview__icon">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="services-overview__link">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default ServicesOverview;