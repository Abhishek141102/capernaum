import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

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
        </div>

        <div className="contact__panel">
          <form className="contact__form" onSubmit={handleSubmit}>
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
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn--gold contact__submit">Submit</button>
          </form>
          <div className="contact__photo" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
