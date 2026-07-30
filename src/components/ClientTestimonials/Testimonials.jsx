import './Testimonials.css';

const TESTIMONIALS = [
  {
    quote:
      "Capernaum is not a vendor — they're a genuine growth partner. They came with a point of view, challenged our assumptions, and delivered a pipeline programme that outperformed our internal team's results in the first quarter. The quality of strategic thinking is enterprise-grade.",
    name: 'Rajesh Krishnamurthy',
    role: 'Chief Revenue Officer, Enterprise SaaS',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      "We entered three new markets in eighteen months using Capernaum's Growth Engine framework. The combination of market intelligence, ABM execution, and RevOps alignment gave us confidence at every stage. Our board now views their data as every growth presentation.",
    name: 'Sarah Mitchell',
    role: 'VP Growth, Global Technology Firm',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'What sets Capernaum apart is that senior people stay on the account. The strategy we agreed on day one was delivered by the same team twelve months later — no hand-offs, no dilution. That continuity is rare and it directly impacts results.',
    name: 'Ananya Pillai',
    role: 'CMO, Healthcare Technology Platform',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="outcomes">
      <div className="container">
        <span className="section-label section-label--dark">Client Testimonials</span>

        <h2 className="testimonials__heading">
          Growth stories from <br />
          <span className="gold-text">enterprise leaders.</span>
        </h2>

        <div className="testimonials__grid">
          {TESTIMONIALS.map(({ quote, name, role, photo }) => (
            <div className="testimonial-card" key={name}>
              <p className="testimonial-card__quote">"{quote}"</p>
              <div className="testimonial-card__author">
                <img className="testimonial-card__avatar" src={photo} alt={name} />
                <div>
                  <p className="testimonial-card__name">{name}</p>
                  <p className="testimonial-card__role">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;