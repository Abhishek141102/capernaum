import { useState } from 'react';
import { Phone, GraduationCap, Users, Heart, TrendingUp, HeartHandshake, Clock } from 'lucide-react';
import './services/ServicePage.css';
import './CareersPage.css';

const WHY_WORK = [
  {
    icon: GraduationCap,
    title: 'Professional Growth',
    desc: 'We provide learning opportunities, mentorship, and a clear path to advance your career.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    desc: 'We foster a respectful and inclusive environment where your voice matters.',
  },
  {
    icon: Heart,
    title: 'Purpose-Driven Work',
    desc: 'Every call, campaign, or customer interaction makes a real difference.',
  },
];

const BUILD_CAREER = [
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    desc: 'Upskilling, mentorship, and internal promotions are at the heart of what we do.',
  },
  {
    icon: HeartHandshake,
    title: 'Supportive Work Environment',
    desc: 'Work alongside teams that care, collaborate, and celebrate success together.',
  },
  {
    icon: Clock,
    title: 'Flexible Work Models',
    desc: 'Whether in-office or remote, we support work-life balance without compromise.',
  },
];

function CareersPage() {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', message: '' });
  const [cvFile, setCvFile] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFile = (e) => setCvFile(e.target.files[0] || null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', form, cvFile);
  };

  return (
    <>
      <section className="service-hero">
        <div className="container service-hero__top">
          <div>
            <span className="section-label section-label--dark">Careers</span>
            <h1 className="service-hero__title">Careers</h1>
            <p className="service-hero__tagline">A Place of Support. A Path to Growth.</p>
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
          <h2 className="careers__section-heading">
            Join Our Team and Help Shape the Future of Support Services
          </h2>
          <p className="service-intro__lead">
            If you're passionate about helping others, growing your skills, and working with
            a team that truly cares, you're in the right place. <em>Why work with us?</em> We're
            more than a workplace — we're a support system.
          </p>

          <div className="service-features">
            {WHY_WORK.map(({ icon: Icon, title, desc }) => (
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

      <section className="careers-apply" id="apply">
        <div className="container careers-apply__grid">
          <div className="careers-apply__intro">
            <span className="section-label">Apply Now</span>
            <h2>Ready to send us your application?</h2>
            <p>
              Fill out the form and our hiring team will be in touch. Make sure to attach
              your latest CV so we can learn more about you.
            </p>
          </div>

          <form className="careers-apply__form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile No"
              value={form.mobile}
              onChange={handleChange}
              required
            />
            <label className="careers-apply__file">
              <span>{cvFile ? cvFile.name : 'Upload CV'}</span>
              <input type="file" accept=".pdf,.doc,.docx" onChange={handleFile} />
            </label>
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn--gold">Send Message</button>
          </form>
        </div>
      </section>

      <section className="service-intro">
        <div className="container">
          <h2 className="careers__section-heading">Ready To Build Your Career?</h2>
          <p className="service-intro__lead">
            Join our dedicated team of professionals and become a part of a growing company
            focused on customer-first solutions. At Capernaum Solutions, we believe in{' '}
            <em>empowering our employees, rewarding innovation,</em> and fostering a culture
            of support.
          </p>

          <div className="service-features">
            {BUILD_CAREER.map(({ icon: Icon, title, desc }) => (
              <div className="service-feature-card" key={title}>
                <div className="service-feature-card__icon">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <a href="#apply" className="btn btn--gold">Join Our Team</a>
        </div>
      </section>

      <section
        className="service-cta"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="service-cta__overlay" />
        <div className="container service-cta__content">
          <h2>Grow Your Career at Capernaum Solutions</h2>
          <p>
            Be part of a company that values your passion and drive. At Capernaum, we
            cultivate a supportive environment where every employee's contribution counts,
            and growth is a shared journey. Whether you're just starting out or looking to
            advance your career, we offer roles that align with your aspirations.
          </p>
          <a href="/contact" className="btn btn--gold">Contact Us</a>
        </div>
      </section>
    </>
  );
}

export default CareersPage;