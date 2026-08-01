import { Phone, Clock9, MessageSquareShare, Bot } from "lucide-react";
import Contact from "../../components/Contact/Contact";
import "../services/ServicePage.css";

const FEATURES = [
  {
    icon: Clock9,
    title: "24/7 Support",
    desc: "Round-the-clock assistance to meet the needs of customers in various time zones.",
  },
  {
    icon: MessageSquareShare,
    title: "Omnichannel Communication",
    desc: "Integration of multiple channels for seamless, consistent, and personalized interactions.",
  },
  {
    icon: Bot,
    title: "Tech-Enabled Support",
    desc: "Utilization of AI and automation tools to enhance support capabilities and reduce response times.",
  },
];

function CustomerSupport() {
  return (
    <>
      <section className="service-hero">
        <div className="container service-hero__top">
          <div>
            <span className="section-label section-label--dark">Services</span>
            <h1 className="service-hero__title">Customer Support</h1>
            <p className="service-hero__tagline">
              Reliable Call Center Solutions for Exceptional Customer Support
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
            We believe every interaction matters. Our team delivers
            personalized support, efficient solutions, and real human
            conversations that make your customers feel truly heard.
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
              We recognize that exceptional customer care is the cornerstone of
              business success. Our customer support solutions are designed to
              foster long-term relationships, improve brand loyalty, and provide
              seamless customer experiences. Whether through email, chat, or
              omnichannel services, we ensure timely, empathetic, and effective
              responses that help businesses maintain a strong connection with
              their customers.
            </p>
          </div>
        </div>
      </section>

      <section
        className="service-cta"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1400&q=80')",
            backgroundPosition:"center 35%"
        }}
      >
        <div className="service-cta__overlay" />
        <div className="container service-cta__content">
          <h2>
            Empowering Better Connections Through Exceptional Communication
          </h2>
          <p>
            At Capernaum Solutions, our vision is to be the bridge that brings
            your customers closer to your brand. We aim to enhance every
            interaction with empathy, clarity, and reliability — ensuring your
            customers feel heard, valued, and supported.
          </p>
          <a href="#contact" className="btn btn--gold">
            Learn More
          </a>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default CustomerSupport;
