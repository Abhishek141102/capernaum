import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    priority: '',
    revenue: '',
    timeline: '',
    challenge: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__intro">
          <span className="section-label">Contact</span>
          <h2 className="contact__heading">
            Let's build your <br />
            <span className="gold-italic">growth engine.</span>
          </h2>
          <p className="contact__desc">
            We're selective about the partnerships we take on — which means every engagement
            gets our full strategic attention. Tell us about your growth challenge.
          </p>

          <div className="contact__details">
            <a href="tel:+12045132366" className="contact__detail">
              <Phone size={16} />
              +1 (204) 513-2366
            </a>
            <a href="mailto:contact@capernaum.com" className="contact__detail">
              <Mail size={16} />
              contact@capernaum.com
            </a>
          </div>
        </div>

        <div className="contact__panel">
          <form className="contact__form" onSubmit={handleSubmit} id="contactForm">
            <div className="f-row">
              <div className="f-group">
                <label className="f-lbl">First Name</label>
                <input
                  className="f-inp"
                  type="text"
                  name="firstName"
                  placeholder="Your first name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="f-group">
                <label className="f-lbl">Last Name</label>
                <input
                  className="f-inp"
                  type="text"
                  name="lastName"
                  placeholder="Your last name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="f-row">
              <div className="f-group">
                <label className="f-lbl">Work Email</label>
                <input
                  className="f-inp"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="f-group">
                <label className="f-lbl">Company</label>
                <input
                  className="f-inp"
                  type="text"
                  name="company"
                  placeholder="Your company"
                  value={form.company}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="f-group">
              <label className="f-lbl">Growth Priority</label>
              <div className="f-select-wrap">
                <select
                  className="f-inp"
                  name="priority"
                  value={form.priority}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled hidden>Select your primary goal</option>
                  <option>Build predictable pipeline</option>
                  <option>Enter a new market or segment</option>
                  <option>Win category leadership</option>
                  <option>Fix revenue operations</option>
                  <option>Scale an ABM programme</option>
                  <option>Accelerate enterprise sales cycles</option>
                  <option>Not sure — need strategic input</option>
                </select>
              </div>
            </div>

            <div className="f-row">
              <div className="f-group">
                <label className="f-lbl">Company Revenue</label>
                <div className="f-select-wrap">
                  <select
                    className="f-inp"
                    name="revenue"
                    value={form.revenue}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled hidden>Select revenue range</option>
                    <option>$5M – $25M ARR</option>
                    <option>$25M – $100M ARR</option>
                    <option>$100M – $500M ARR</option>
                    <option>$500M+ ARR</option>
                  </select>
                </div>
              </div>
              <div className="f-group">
                <label className="f-lbl">Growth Timeline</label>
                <div className="f-select-wrap">
                  <select
                    className="f-inp"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled hidden>Select timeline</option>
                    <option>Immediate (this quarter)</option>
                    <option>Next 6 months</option>
                    <option>Next 12 months</option>
                    <option>Multi-year partnership</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="f-group">
              <label className="f-lbl">Describe Your Growth Challenge</label>
              <textarea
                className="f-inp"
                name="challenge"
                placeholder="Tell us about your growth challenge or goals"
                style={{ minHeight: '110px', resize: 'vertical' }}
                value={form.challenge}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-gold" id="formSubmit">
              Start the Conversation →
            </button>
          </form>
          <div className="contact__photo" />
        </div>
      </div>
    </section>
  );
}

export default Contact;