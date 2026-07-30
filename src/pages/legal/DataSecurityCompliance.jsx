import './LegalPage.css';

function DataSecurityCompliance() {
  return (
    <section className="legal-page">
      <div className="container">
        <span className="section-label">Legal</span>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', color: 'var(--navy)', marginBottom: '10px' }}>
          Data Security & Compliance
        </h1>
        <p className="legal-page__updated">Last updated: July 2026</p>

        <div className="legal-page__disclaimer">
          <strong>Note:</strong> This is a standard template overview and has not been
          reviewed by legal or security counsel. Capernaum Solutions Pvt Ltd should have this
          page reviewed to ensure it accurately reflects our actual security practices and
          compliance posture before publishing.
        </div>

        <div className="legal-page__body">
          <h2>Our Commitment to Security</h2>
          <p>
            At Capernaum Solutions, protecting client and customer data is central to how we
            deliver BPO and IT services. We maintain administrative, technical, and physical
            safeguards designed to protect the confidentiality, integrity, and availability of
            the data entrusted to us.
          </p>

          <h2>Data Protection Measures</h2>
          <ul>
            <li>Access controls that limit data access to authorized personnel only.</li>
            <li>Encryption of sensitive data in transit and at rest, where applicable.</li>
            <li>Regular monitoring of systems to detect and respond to potential threats.</li>
            <li>Secure handling procedures for customer and client information across all service lines.</li>
          </ul>

          <h2>Quality & Process Compliance</h2>
          <p>
            Our Quality Assurance function implements rigorous monitoring and feedback
            processes to maintain consistent service standards and reduce operational risk
            across every engagement.
          </p>

          <h2>Employee Training & Accountability</h2>
          <p>
            Team members receive training on data handling best practices and confidentiality
            requirements as part of our onboarding and ongoing development programs.
          </p>

          <h2>Third-Party & Vendor Security</h2>
          <p>
            Where we rely on third-party tools or infrastructure providers, we aim to work
            with vendors who maintain appropriate security and compliance standards.
          </p>

          <h2>Incident Response</h2>
          <p>
            In the event of a security incident affecting personal or client data, we are
            committed to timely investigation, remediation, and communication with affected
            parties as required by applicable law.
          </p>

          <h2>Regulatory Alignment</h2>
          <p>
            We aim to align our data handling practices with applicable regulations relevant
            to our clients, including UK/EU GDPR and other regional data protection and
            privacy requirements.
          </p>

          <h2>Contact Us</h2>
          <p>
            For questions about our data security and compliance practices, please reach out
            via our{' '}
            <a href="/contact" style={{ color: 'var(--gold-dark)', fontWeight: 600 }}>Contact page</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DataSecurityCompliance;