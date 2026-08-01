import { Phone, Gauge, ClipboardCheck, Zap } from "lucide-react";
import Contact from "../../components/Contact/Contact";
import "../services/ServicePage.css";

const FEATURES = [
  {
    icon: Gauge,
    title: "Performance Monitoring",
    desc: "Real-time tracking of customer interactions to ensure adherence to service standards.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Audits",
    desc: "Comprehensive audits to evaluate the effectiveness and accuracy of customer care efforts.",
  },
  {
    icon: Zap,
    title: "Process Optimization",
    desc: "Identifying inefficiencies and optimizing workflows to increase productivity and customer satisfaction.",
  },
];

function ITSolutions() {
  return (
    <>
      <section className="service-hero">
        <div className="container service-hero__top">
          <div>
            <span className="section-label section-label--dark">Services</span>
            <h1 className="service-hero__title">Quality Assurance</h1>
            <p className="service-hero__tagline">
              Your Path to Smarter Processes and Higher Standards
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
            <p>
              We're not just about filling positions — we're about matching
              people with purpose. Explore how we make career transitions
              seamless, empowering you to bring your best to the world of
              customer engagement.
            </p>
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
              In a world where customer expectations are higher than ever,
              maintaining consistent service quality is paramount. Our Quality
              Assurance (QA) services help organizations ensure that every
              customer’s interaction meets the highest standards of excellence,
              through rigorous monitoring, feedback loops, and data analysis, we
              provide insights that drive continuous improvement in service
              delivery.
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
          <h2>Ensuring Excellence Through Quality Assurance</h2>
          <p>
            At Capernaum Solutions, our commitment to quality assurance isn't
            just about checking boxes — it's about building trust and delivering
            excellence. We partner with you to ensure that every process,
            product, and service aligns with the highest standards. From
            streamlined procedures to consistent outcomes, our QA experts ensure
            that your operations not only meet expectations but exceed them. 
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
