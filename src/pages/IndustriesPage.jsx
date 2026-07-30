import { Phone, HeartPulse, ShoppingCart, Landmark, Phone as PhoneIcon, Plane, Cpu, ShieldCheck, Truck } from 'lucide-react';
import Contact from '../components/Contact/Contact';
import '../pages/services/ServicePage.css';
import './IndustriesPage.css';

const INDUSTRIES = [
  {
    icon: HeartPulse,
    title: 'Healthcare',
    desc: 'Reliable support solutions for patient care, appointment coordination, and healthcare administration.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & Retail',
    desc: 'Scalable customer support and lead generation that keeps up with seasonal demand and growing order volumes.',
  },
  {
    icon: Landmark,
    title: 'Banking & Finance',
    desc: 'Secure, compliant support and IT solutions built for the precision banking and finance demand.',
  },
  {
    icon: PhoneIcon,
    title: 'Telecom',
    desc: 'Responsive customer service and technical support for telecom providers and their subscribers.',
  },
  {
    icon: Plane,
    title: 'Travel & Hospitality',
    desc: 'Round-the-clock guest support and booking assistance that keeps travelers moving.',
  },
  {
    icon: Cpu,
    title: 'Technology & SaaS',
    desc: 'Technical support, onboarding assistance, and customer success for growing tech companies.',
  },
  {
    icon: ShieldCheck,
    title: 'Insurance',
    desc: 'Claims support, policy assistance, and customer service built around trust and accuracy.',
  },
  {
    icon: Truck,
    title: 'Logistics',
    desc: 'Real-time support and coordination that keeps shipments, drivers, and customers connected.',
  },
];

function IndustriesPage() {
  return (
    <>
      <section className="service-hero">
        <div className="container service-hero__top">
          <div>
            <span className="section-label section-label--dark">Industries We Serve</span>
            <h1 className="service-hero__title">Industries We Serve</h1>
            <p className="service-hero__tagline">Tailored BPO & IT solutions across every sector</p>
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
            No matter your sector, we <em>tailor our services</em> to your industry's unique
            challenges — helping you scale effectively and streamline operations.
          </p>

          <div className="industries-page__grid">
            {INDUSTRIES.map(({ icon: Icon, title, desc }) => (
              <div className="industries-page__card" key={title}>
                <div className="industries-page__icon">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default IndustriesPage;