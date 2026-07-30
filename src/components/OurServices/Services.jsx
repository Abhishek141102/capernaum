import { Headphones, CheckCircle, Cpu, Megaphone, Search, Target, Mail, CalendarCheck } from 'lucide-react';
import './Services.css';

const SERVICES = [
  {
    icon: Target,
    title: 'B2B Lead Generation',
    desc: 'Identifying and connecting with high-intent decision-makers to build a consistent pipeline of qualified B2B opportunities.',
  },
  {
    icon: Mail,
    title: 'Cold Email Outreach',
    desc: 'Crafting personalized, high-converting email campaigns that open doors and start meaningful sales conversations.',
  },
  {
    icon: CalendarCheck,
    title: 'Appointment Setting',
    desc: 'Booking qualified meetings directly onto your calendar, so your sales team can focus on closing, not chasing.',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    desc: 'Providing exceptional customer support that builds trust and loyalty, one call at a time.',
  },
  {
    icon: Cpu,
    title: 'IT Solutions',
    desc: 'Delivering secure, scalable, and innovative IT services tailored to evolving business demands.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: "Unlock your brand's potential with data-driven digital marketing strategies that deliver results.",
  },
  {
    icon: Search,
    title: 'Market Research',
    desc: 'In-depth market research and insights that help you understand your audience and make smarter business decisions.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    desc: 'Implementing rigorous monitoring and feedback processes to maintain unparalleled service standards.',
  },
];

function WhatWeDo() {
  return (
    <section className="what-we-do" id="approach">
      <div className="container">
        <span className="section-label">Our Services</span>

        <h2 className="what-we-do__heading">
          We provide <strong>seamless, scalable BPO and IT solutions</strong> tailored to meet
          your business needs — because every interaction is an opportunity to build
          <strong> trust, strengthen relationships,</strong> and <strong>elevate your brand.</strong>
        </h2>

        <div className="what-we-do__grid">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div className="capability-card" key={title}>
              <div className="capability-card__icon">
                <Icon size={20} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;