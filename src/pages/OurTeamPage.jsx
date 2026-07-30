import { Phone, Link2 } from 'lucide-react';
import './services/ServicePage.css';
import './OurTeamPage.css';

// NOTE: Placeholder team data — replace with real team members, designations,
// and photos once available. Using initials-avatars intentionally instead of
// stock photos so these are clearly demo entries, not real people.
const TEAM = [
  { name: 'A. Sharma', role: 'Founder & CEO' },
  { name: 'R. Mehta', role: 'Head of Operations' },
  { name: 'K. Verma', role: 'Head of Customer Support' },
  { name: 'S. Iyer', role: 'Head of IT Solutions' },
  { name: 'P. Nair', role: 'Head of Sales & Lead Generation' },
  { name: 'D. Kulkarni', role: 'HR & People Manager' },
];

function OurTeamPage() {
  return (
    <>
      <section className="service-hero">
        <div className="container service-hero__top">
          <div>
            <span className="section-label section-label--dark">Our Team</span>
            <h1 className="service-hero__title">The People Behind Capernaum</h1>
            <p className="service-hero__tagline">
              A skilled, dedicated team committed to excellence and continuous learning
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
          <p className="service-intro__lead">
            Our team delivers <em>personalized support, efficient solutions,</em> and real
            human conversations — driven by a deep commitment to our clients' success at
            every touchpoint.
          </p>

          <div className="our-team__grid">
            {TEAM.map(({ name, role }) => (
              <div className="team-card" key={name}>
                <div className="team-card__avatar">
                  {name.split(' ').map((w) => w[0]).join('')}
                </div>
                <h3>{name}</h3>
                <p>{role}</p>
                <a href="#" className="team-card__social" aria-label={`${name} LinkedIn`}>
                  <Link2 size={16} />
                </a>
              </div>
            ))}
          </div>

          <p className="our-team__note">
            * Placeholder team roster — to be updated with real team members and photos.
          </p>
        </div>
      </section>
    </>
  );
}

export default OurTeamPage;