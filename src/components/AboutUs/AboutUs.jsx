import { Phone, Headphones, CheckCircle2, GraduationCap, Users, Globe2, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const WHO_WE_ARE_CARDS = [
  { icon: Phone, title: 'Support 24/7', desc: 'Cater to customers across different time zones, ensuring no one is left without support.' },
  { icon: Headphones, title: 'Customer Support', desc: 'Providing seamless and efficient interactions through Email, Chat, and Omni-channel services.' },
  { icon: CheckCircle2, title: 'Quality Assurance', desc: 'Implementing rigorous monitoring and feedback processes to maintain unparalleled service standards.' },
  { icon: GraduationCap, title: 'Training & Development', desc: 'Equipping teams with tailored programs to ensure operational excellence.' },
  { icon: Users, title: 'Lead Generation', desc: 'Delivering qualified leads to accelerate business growth and revenue.' },
  { icon: Globe2, title: 'IT Solutions', desc: 'Delivering secure, scalable, and innovative IT services tailored to evolving business demands.' },
];

const VISION_HIGHLIGHTS = [
  { icon: Headphones, title: 'Customer Service', desc: 'Delivering prompt, personalized, and dependable support that puts our clients and their customers first — every time.' },
  { icon: Users, title: 'Qualified Team', desc: 'A skilled, dedicated team committed to excellence, continuous learning, and delivering high-quality results across every project.' },
  { icon: Globe2, title: 'Cutting-Edge Technology', desc: 'Leveraging the latest tools and innovations to streamline processes, enhance efficiency, and deliver smarter BPO solutions.' },
  { icon: CheckCircle2, title: 'Customer Commitment', desc: "Driven by a deep commitment to our clients' success through consistent, reliable, and value-driven service at every touchpoint." },
];

const MISSION_POINTS = ['Lead Qualification', 'Customer Registration Updates', 'Customer Satisfaction Surveys'];

function AboutUs({ pageMode = false }) {
  return (
    <section className="about-us" id="about">
      {/* Page header — only shown when used as a standalone /about page */}
      {pageMode && (
        <div className="about-page-header">
          <div className="container about-page-header__inner">
            <div>
              <span className="section-label section-label--dark">Reliable – trust and consistency</span>
              <h1 className="about-page-header__title">About Us</h1>
            </div>
            <a href="tel:+912045132366" className="about-page-header__call">
              <Phone size={18} />
              <div>
                <span>Call us</span>
                <strong>204 513 2366</strong>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Who We Are */}
      <div className="container about-us__intro">
        <span className="section-label">About Us</span>
        <h2 className="about-us__heading">Who We Are</h2>
        <p className="about-us__quote">
          "At Capernaum Solutions, we don't just provide services; we create impactful
          partnerships. We empower organizations to thrive in today's competitive market with
          a focus on innovation, reliability, and customer care."
        </p>

        <div className="who-we-are__grid">
          {WHO_WE_ARE_CARDS.map(({ icon: Icon, title, desc }) => (
            <div className="who-we-are__card" key={title}>
              <div className="who-we-are__icon">
                <Icon size={20} />
              </div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        {!pageMode && (
          <Link to="/about" className="about-us__more-btn">
            Learn More About Us <ArrowRight size={16} />
          </Link>
        )}
      </div>

      {/* Our Vision + Our Mission — full detail, only on the standalone /about page */}
      {pageMode && (
        <>
          <div className="about-vision">
            <div className="container">
              <span className="section-label section-label--dark">Our Vision</span>
              <div className="about-vision__top">
                <h3 className="about-vision__heading">
                  To empower businesses worldwide with reliable, people-first outsourcing
                  solutions that drive growth and efficiency.
                </h3>
                <div className="about-vision__photo" />
              </div>

              <div className="about-vision__highlights">
                {VISION_HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
                  <div className="vision-highlight" key={title}>
                    <div className="vision-highlight__icon">
                      <Icon size={20} />
                    </div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="container about-mission">
            <div className="about-mission__content">
              <span className="section-label">Our Mission</span>
              <h3 className="about-mission__heading">
                To empower businesses worldwide with reliable, people-first outsourcing
                solutions that drive growth and efficiency.
              </h3>
              <p>
                We are dedicated to providing compassionate, efficient, and expert customer
                support. Our team of trained professionals ensures every interaction is handled
                with care, precision, and a human touch.
              </p>
              <p>
                We tailor our services to meet your business needs, combining advanced technology
                with genuine human connection to deliver exceptional customer experiences.
              </p>
              <ul className="about-mission__list">
                {MISSION_POINTS.map((point) => (
                  <li key={point}>
                    <Check size={16} /> {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-mission__photo" />
          </div>
        </>
      )}

      {/* Bottom CTA — only shown when used as a standalone /about page */}
      {pageMode && (
        <div className="about-page-cta">
          <div className="container about-page-cta__inner">
            <h3>Want to Learn More About Our Services? Get in Touch With Us Today</h3>
            <p>
              We're here to help you find the right solutions for your business. Whether you
              need more information or are ready to get started, our team is just a message away.
            </p>
            <Link to="/services" className="about-page-cta__btn">
              See Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}

    </section>
  );
}

export default AboutUs;