import './WhyCapernaum.css';

const REASONS = [
  {
    num: '01',
    title: 'Customized Solutions',
    desc: 'We craft BPO and IT services tailored to your industry, helping you scale effectively and streamline operations.',
  },
  {
    num: '02',
    title: 'Trusted Partner',
    desc: 'Our approach centers on innovation, reliability, and measurable results that fuel long-term success.',
  },
  {
    num: '03',
    title: 'Expertise You Can Trust',
    desc: 'With years of experience, our skilled team delivers top-tier solutions that drive growth and improve operational efficiency.',
  },
  {
    num: '04',
    title: 'Swift and Efficient Support',
    desc: 'Get prompt responses and solutions, powered by our dedicated team, ensuring smooth operations and enhanced customer satisfaction at every step.',
  },
];

const STATS = [
  { value: '120+', label: 'Enterprise Partner' },
  { value: '98%', label: 'Client retention' },
  { value: '3x', label: 'Avg. revenue uplift' },
  { value: '14+', label: 'Markets activated' },
];

function WhyCapernaum() {
  return (
    <section className="why-capernaum">
      <div className="container">
        <span className="section-label">Why Choose Us</span>

        <h2 className="why-capernaum__heading">
          Empowering growth through <br />
          <span className="gold-italic">tailored technology & BPO solutions.</span>
        </h2>

        <div className="why-capernaum__body">
          <ul className="why-capernaum__list">
            {REASONS.map(({ num, title, desc }) => (
              <li key={num} className="why-capernaum__item">
                <span className="why-capernaum__num">{num}</span>
                <span className="why-capernaum__title">{title}</span>
                <p className="why-capernaum__desc">{desc}</p>
              </li>
            ))}
          </ul>

          <div className="why-capernaum__stats-panel">
            <p className="why-capernaum__stats-intro">
              The <span className="gold-text">Capernaum</span> difference in numbers.
            </p>
            <div className="why-capernaum__stats-grid">
              {STATS.map(({ value, label }) => (
                <div className="stat-box" key={label}>
                  <span className="stat-box__value">{value}</span>
                  <span className="stat-box__label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyCapernaum;