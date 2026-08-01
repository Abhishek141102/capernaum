import { Phone, UserCheck, Search, TrendingUp } from "lucide-react";
import Contact from "../../components/Contact/Contact";
import "../services/ServicePage.css";

const FEATURES = [
  {
    icon: UserCheck,
    title: "Lead Qualification",
    desc: "We ensure that only the most qualified leads make it to your sales team, saving time and resources.",
  },
  {
    icon: Search,
    title: "Market Research",
    desc: "Identifying and targeting the right customer segments for your products or services.",
  },
  {
    icon: TrendingUp,
    title: "Sales Support",
    desc: "Empowering your sales team with information and insights to drive more conversions.",
  },
];

function LeadGeneration() {
  return (
    <>
      <section className="service-hero">
        <div className="container service-hero__top">
          <div>
            <span className="section-label section-label--dark">Services</span>
            <h1 className="service-hero__title">B2B Lead Generation</h1>
            <p className="service-hero__tagline">
              A Smarter Way to Build Your Pipeline
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
            At Capernaum Solutions, we believe effective lead generation starts
            with precision, strategy, and customer-centricity. Our goal is to
            help you attract, engage, and convert the right prospects —
            consistently.
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
              In today's fast-paced business environment, generating
              high-quality leads is essential for growth. We specialize in
              creating effective lead generation strategies that deliver
              targeted prospects, ensuring your sales team spends time on leads
              that truly matter. From prospecting to qualification, we provide
              end-to-end support in building a strong sales pipeline.
            </p>
          </div>
        </div>
      </section>

      <section
        className="service-cta"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80')",
            backgroundPosition:"center 20%"
        }}
      >
        <div className="service-cta__overlay" />
        <div className="container service-cta__content">
          <h2>Accelerate Your Sales Pipeline</h2>
          <p>
            Discover how strategic lead generation can power your business
            growth. At Capernaum Solutions, we help you identify, attract, and
            engage your ideal customers — using a mix of intelligent automation
            and human insight.
          </p>
          <a href="#contact" className="btn btn--gold">
            Contact Us
          </a>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default LeadGeneration;
