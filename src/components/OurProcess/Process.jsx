import './Process.css';

const PHASES = [
  {
    num: '01',
    tag: 'PHASE 01',
    title: 'Diagnose & Define',
    desc: 'Deep discovery into your market position, ICP, competitive landscape, and revenue gaps. We align strategy before activating a single channel.',
  },
  {
    num: '02',
    tag: 'PHASE 02',
    title: 'Build & Activate',
    desc: 'Infrastructure, programmes, and channels built for your specific growth equation — live in 48 hours, with a 90-day roadmap agreed upfront.',
  },
  {
    num: '03',
    tag: 'PHASE 03',
    title: 'Scale & Accelerate',
    desc: "What works gets scaled. Real-time data feeds mid-flight optimisation, budget reallocation, and channel expansion to compound returns each quarter.",
  },
  {
    num: '04',
    tag: 'PHASE 04',
    title: 'Expand & Compound',
    desc: 'New markets, new personas, new product lines. We extend your growth engine systemically — turning one successful programme into a multi-market revenue machine.',
  },
];

function GrowthEngine() {
  return (
    <section className="growth-engine" id="approach">
      <div className="container">
        <span className="section-label section-label--dark">Our Process</span>

        <div className="growth-engine__top">
          <h2 className="growth-engine__heading">
            The Enterprise <br />
            <span className="gold-text">Growth Engine™</span>
          </h2>
          <p className="growth-engine__desc">
            Our four-phase framework turns strategic ambition into compounding revenue
            momentum — each phase building measurably on the last.
          </p>
        </div>

        <div className="growth-engine__grid">
          {PHASES.map(({ num, tag, title, desc }) => (
            <div className="phase-card" key={num}>
              <span className="phase-card__tag">{tag}</span>
              <h3 className="phase-card__title">{title}</h3>
              <p className="phase-card__desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GrowthEngine;
