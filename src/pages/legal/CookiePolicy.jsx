import './LegalPage.css';

function CookiePolicy() {
  return (
    <section className="legal-page">
      <div className="container">
        <span className="section-label">Legal</span>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', color: 'var(--navy)', marginBottom: '10px' }}>
          Cookie Policy
        </h1>
        <p className="legal-page__updated">Last updated: July 2026</p>

        <div className="legal-page__disclaimer">
          <strong>Note:</strong> This is a standard template cookie policy and has not been
          reviewed by legal counsel. Capernaum Solutions Pvt Ltd should have this page
          reviewed by a qualified lawyer to ensure it accurately reflects the cookies actually
          used on this site and complies with applicable regulations (including UK/EU GDPR,
          the ePrivacy Directive, and US state privacy laws) before publishing.
        </div>

        <div className="legal-page__body">
          <h2>What Are Cookies</h2>
          <p>
            Cookies are small text files placed on your device when you visit our website.
            They help the site function properly, remember your preferences, and give us
            insight into how visitors use our services so we can keep improving them.
          </p>

          <h2>How We Use Cookies</h2>
          <p>
            Capernaum Solutions Pvt Ltd uses cookies to operate our website reliably, keep it
            secure, remember your settings, and understand which pages and services are most
            useful to our visitors.
          </p>

          <h2>Types of Cookies We Use</h2>
          <ul>
            <li><strong>Essential Cookies</strong> — required for core site functionality, such as navigation and secure form submissions.</li>
            <li><strong>Performance & Analytics Cookies</strong> — help us understand how visitors interact with our site so we can improve it over time.</li>
            <li><strong>Functionality Cookies</strong> — remember choices you make to provide a more personalized experience.</li>
          </ul>

          <h2>Third-Party Cookies</h2>
          <p>
            Some cookies may be set by third-party services we use, such as analytics or
            font providers. We do not control these cookies directly and recommend reviewing
            the relevant third party's own cookie policy for more detail.
          </p>

          <h2>Managing Your Cookie Preferences</h2>
          <p>
            Most web browsers allow you to control cookies through their settings. You can
            usually set your browser to refuse cookies or alert you when cookies are being
            sent. Please note that disabling certain cookies may affect the functionality of
            this website.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Any changes will be posted on
            this page with an updated "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Cookie Policy, please reach out to us through our{' '}
            <a href="/contact" style={{ color: 'var(--gold-dark)', fontWeight: 600 }}>Contact page</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CookiePolicy;