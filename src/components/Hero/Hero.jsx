import { Sparkles, Activity, Zap } from 'lucide-react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__top">
        <span className="hero__badge">
          <Sparkles size={14} /> Enterprise Growth Partner
        </span>

        <h1 className="hero__title">
          Where ambitious enterprises
          <br />
          find their <span className="hero__title-gold">growth edge.</span>
        </h1>

        <p className="hero__desc">
          Capernaum Solutions is the strategic growth partner for enterprises that refuse to
          plateau. We architect the systems, strategies, and capabilities that convert market
          opportunity into measurable revenue — quarter after quarter.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="btn btn--gold">Start the Conversation</a>
          <a href="#approach" className="btn btn--outline">See Approach</a>
        </div>
      </div>

      <div className="hero__collage container">
        {/* Column 1 */}
        <div className="hero__card hero__card--metrics">
          <Activity size={20} />
          <h4>Growth Metrics</h4>
          <p>Real-time insights that help you make smarter business decisions.</p>
          <div className="hero__tags">
            <span className="hero__tag hero__tag--1">Client Satisfaction</span>
            <span className="hero__tag hero__tag--2">Revenue Conversion</span>
            <span className="hero__tag hero__tag--3">Market Penetration</span>
            <span className="hero__tag hero__tag--4">Pipeline Velocity</span>
          </div>
        </div>

        <div className="hero__card hero__card--blue">
          <span className="hero__stat-num">48hr</span>
          <span className="hero__stat-label">Activation</span>
        </div>

        {/* Column 2 */}
        <div className="hero__card hero__card--photo corner-fold hero__photo-buildings">
          <div className="photo-overlay photo-overlay--bottom">
            <span className="hero__stat-num">120+</span>
            <span className="hero__stat-label">Enterprise Partner</span>
          </div>
        </div>

        <div className="hero__card hero__card--crm">
          <div className="crm-top">
            <Zap size={18} />
            <h4>Direct CRM integration</h4>
            <p>Effortless CRM syncing for smarter lead management.</p>
          </div>
          <div className="crm-photo" />
        </div>

        {/* Column 3 */}
        <div className="hero__card hero__card--dashboard">
          <div className="dashboard-screen">
            <div className="hero__dashboard-bars">
              <span style={{ height: '35%' }} />
              <span style={{ height: '60%' }} />
              <span style={{ height: '45%' }} />
              <span style={{ height: '80%' }} />
              <span style={{ height: '55%' }} />
              <span style={{ height: '70%' }} />
              <span style={{ height: '40%' }} />
            </div>
          </div>
          <p className="dashboard-label">Real-Time Dashboards</p>
        </div>

        <div className="hero__card hero__card--photo hero__photo-tablet">
          <div className="photo-overlay photo-overlay--bottom">
            <span className="hero__stat-num">3x</span>
            <span className="hero__stat-label">Avg. revenue uplift</span>
          </div>
        </div>

        {/* Column 4 */}
        <div className="hero__card hero__card--photo corner-fold hero__photo-headset">
          <div className="photo-overlay photo-overlay--bottom">
            <span className="hero__stat-num">98%</span>
            <span className="hero__stat-label">Client retention</span>
          </div>
        </div>

        <div className="hero__card hero__card--photo hero__photo-meeting" />

        {/* Column 5 */}
        <div className="hero__card hero__card--photo corner-fold hero__photo-warehouse">
          <div className="photo-overlay photo-overlay--bottom">
            <span className="hero__stat-label hero__stat-label--solo">Global Delivery</span>
          </div>
        </div>

        <div className="hero__card hero__card--teal">
          <span className="hero__stat-label">Markets activated</span>
          <span className="hero__stat-num">14+</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;