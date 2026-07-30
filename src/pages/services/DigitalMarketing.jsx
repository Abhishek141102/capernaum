import { Phone, SearchCheck, Megaphone, Share2 } from "lucide-react";
import Contact from "../../components/Contact/Contact";
import "../services/ServicePage.css";

const FEATURES = [
  {
    icon: SearchCheck,
    title: "Search Engine Optimization",
    desc: "Improve your ranking, drive traffic, and increase authority with tailored SEO strategies for your business niche.",
  },
  {
    icon: Megaphone,
    title: "Paid Ads & PPC Management",
    desc: "Maximize ROI through intelligent ad campaigns on Google, Facebook, Instagram & LinkedIn — optimized daily for performance.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build community, drive engagement, and convert followers into customers with platform-specific content and posting strategies.",
  },
];

function DigitalMarketing() {
  return (
    <>
      <section className="service-hero">
        <div className="container service-hero__top">
          <div>
            <span className="section-label section-label--dark">Services</span>
            <h1 className="service-hero__title">Digital Marketing</h1>
            <p className="service-hero__tagline">Grow Smarter, Reach Farther</p>
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
            Leverage targeted digital strategies to drive awareness, engagement,
            and conversions. Whether it’s SEO, PPC, social media, or content —
            we craft campaigns that deliver measurable results and meaningful
            growth.
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
              At Capernaum Solutions, our digital marketing services are
              designed to help businesses thrive in an increasing digital world.
              We offer strategic solutions across SEO, social media, content
              marketing, and paid campaigns to enhance your online presence and
              drive meaningful engagement. With a focus on data-driven insights
              and creative execution, we empower brands to connect with the
              right audience and achieve measurable growth.
            </p>
          </div>
        </div>
      </section>

      <section
        className="service-cta"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="service-cta__overlay" />
        <div className="container service-cta__content">
          <h2>Power Your Business with Digital Marketing</h2>
          <p>
            At Capernaum Solutions, our digital marketing services are tailored
            to help your brand cut through the noise and reach your target
            audience effectively. From SEO and social media to PPC and content
            strategy, we provide data-driven campaigns that fuel engagement and
            deliver results. Our goal is to ensure your brand makes a lasting
            impact in the digital space.
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

export default DigitalMarketing;
