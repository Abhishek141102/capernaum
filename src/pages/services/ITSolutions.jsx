import { Phone, CloudCog, ShieldCheck, Layers } from "lucide-react";
import Contact from "../../components/Contact/Contact";
import "../services/ServicePage.css";

const FEATURES = [
  {
    icon: CloudCog,
    title: "Cloud Solutions",
    desc: "Scalable and secure cloud platforms to drive collaboration and business agility.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Protecting your business from cyber threats with robust security measures.",
  },
  {
    icon: Layers,
    title: "Infrastructure Management",
    desc: "Ensuring the smooth operation of IT infrastructure with proactive monitoring and support.",
  },
];

function ITSolutions() {
  return (
    <>
      <section className="service-hero">
        <div className="container service-hero__top">
          <div>
            <span className="section-label section-label--dark">Services</span>
            <h1 className="service-hero__title">IT Solutions</h1>
            <p className="service-hero__tagline">
              Streamline Your Systems for Success
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
            Maximize operational efficiency through our expert IT solutions.
            Whether it's streamlining your infrastructure, automating workflows,
            or implementing secure cloud environments — we deliver scalable tech
            strategies tailored to your business.
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
              In today’s tech-driven world, businesses need scalable, secure,
              and innovative IT solutions to remain competitive. We provide
              end-to-end IT services that help businesses embrace digital
              transformation, optimize operations, and protect sensitive data.
              From cloud solutions to IT infrastructure management, our team
              ensures that your technology is always aligned with your business
              goals.
            </p>
          </div>
        </div>
      </section>

      <section
        className="service-cta"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="service-cta__overlay" />
        <div className="container service-cta__content">
          <h2>Empower Your Business with Tailored Tech Solutions</h2>
          <p>
            We deliver smart, scalable, and secure technology services to help
            businesses streamline operations, enhance productivity, and stay
            ahead in a digital-first world. Whether you’re looking to optimize
            workflows, modernize infrastructure, or build custom software —
            we’ve got you covered.
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

export default ITSolutions;
