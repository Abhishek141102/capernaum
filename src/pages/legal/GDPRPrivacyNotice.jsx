import './LegalPage.css';

function GDPRPrivacyNotice() {
  return (
    <section className="legal-page">
      <div className="container">
        <span className="section-label">Legal</span>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', color: 'var(--navy)', marginBottom: '10px' }}>
          GDPR Privacy Notice
        </h1>
        <p className="legal-page__updated">Last updated: July 2026</p>

        <div className="legal-page__disclaimer">
          <strong>Note:</strong> This is a standard template privacy notice and has not been
          reviewed by legal counsel. Capernaum Solutions Pvt Ltd should have this page
          reviewed by a qualified lawyer to ensure it accurately reflects our actual data
          practices and complies with the UK/EU General Data Protection Regulation (GDPR)
          before publishing.
        </div>

        <div className="legal-page__body">
          <h2>Introduction</h2>
          <p>
            This notice explains how Capernaum Solutions Pvt Ltd collects, uses, and
            protects personal data belonging to clients, website visitors, and job applicants
            based in the UK and European Economic Area, in line with GDPR.
          </p>

          <h2>What Personal Data We Collect</h2>
          <ul>
            <li>Contact details you provide, such as name, email address, and phone number.</li>
            <li>Information submitted through our contact, application, or enquiry forms.</li>
            <li>Technical data such as IP address and browser type, collected automatically.</li>
          </ul>

          <h2>How We Use Your Data</h2>
          <p>
            We use personal data to respond to enquiries, provide our services, process job
            applications, and improve our website and offerings. We do not sell personal data
            to third parties.
          </p>

          <h2>Legal Basis for Processing</h2>
          <p>
            We process personal data based on your consent, the necessity to perform a
            contract with you, or our legitimate business interests in providing and
            improving our services.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfil the purposes
            described in this notice, or as required by applicable law.
          </p>

          <h2>Your Rights Under GDPR</h2>
          <p>If you are located in the UK or EEA, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request correction or deletion of your personal data.</li>
            <li>Object to or restrict certain processing of your data.</li>
            <li>Request a copy of your data in a portable format.</li>
            <li>Withdraw consent at any time, where processing is based on consent.</li>
          </ul>

          <h2>International Data Transfers</h2>
          <p>
            As Capernaum Solutions operates from India, personal data may be transferred and
            processed outside the UK/EEA. Where this occurs, we aim to ensure appropriate
            safeguards are in place in line with GDPR requirements.
          </p>

          <h2>Contact Us</h2>
          <p>
            To exercise any of your rights under GDPR, or for questions about this notice,
            please reach out via our{' '}
            <a href="/contact" style={{ color: 'var(--gold-dark)', fontWeight: 600 }}>Contact page</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default GDPRPrivacyNotice;