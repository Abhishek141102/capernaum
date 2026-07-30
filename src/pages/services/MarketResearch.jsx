import {
  Phone,
  Clock9,
  MessageSquareShare,
  Microscope,
  Globe,
} from "lucide-react";
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
    icon: Microscope,
    title: "Healthcare Research",
    desc: "Cardiologist, Dentist, Dermatologist, General Surgery, Gynaecologist, Haematologist, Oncologist, Ophthalmologist, Nephrologists",
  },
  {
    icon: Globe,
    title: "Online Research",
    desc: "Audience Research, Product Research, Brand Analysis, Psychological Profiling, Database Research, Post-sale or Consumer Satisfaction Research",
  },
];

function LeadGeneration() {
  return (
    <>
      <section className="service-hero">
        <div className="container service-hero__top">
          <div>
            <span className="section-label section-label--dark">Services</span>
            <h1 className="service-hero__title">Market Research</h1>
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
        </div>
      </section>
    </>
  );
}

export default LeadGeneration;
