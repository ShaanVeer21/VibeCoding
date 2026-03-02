export default function Footer() {
  return (
    <section className="footer_component">
      <div className="container-regular is-no-padding">
        <div className="footer_wrapper">

          {/* LEFT */}
          <div className="footer_left">
            <a href="/" className="footer_brand-link w-inline-block">
              <img
                src="https://cdn.prod.website-files.com/68ffda447d877eb44580fee2/6900589b301f0d687815c381_Lexsi%20Logo.svg"
                loading="lazy"
                width="140"
                height="24"
                alt="Lexsi Logo"
                className="footer_brand-logo"
              />
            </a>
            <div>Lexsi Labs is dedicated to building the foundations for Safe Superintelligence — uniting alignment theory, interpretability science, and agentic autonomy into one research continuum to make AI aligned, interpretable and fit for the future.</div>
          </div>

          {/* RIGHT GRID */}
          <div className="footer_grid">
            <div className="footer_col">
              <div className="footer_col-title">Navigation</div>
              <div className="footer_links-wrapper">
                <a href="/" className="footer_link">Home</a>
                <a href="https://app.screenloop.com/careers/aryaxai/" target="_blank" rel="noreferrer" className="footer_link">Careers</a>
                <a href="/contact-us" className="footer_link">Contact Us</a>
              </div>
            </div>
            <div className="footer_col">
              <div className="footer_col-title">Resources</div>
              <div className="footer_links-wrapper">
                <a href="/resources" className="footer_link">All Resources</a>
                <a href="/resources/articles" className="footer_link">Articles</a>
                <a href="/resources/research-papers" className="footer_link">Research Papers</a>
              </div>
            </div>
            <div className="footer_col">
              <div className="footer_col-title">SOCIALS</div>
              <div className="footer_links-wrapper">
                <a href="https://x.com/Lexsi_labs" target="_blank" rel="noreferrer" className="footer_link">Twitter</a>
                <a href="https://www.linkedin.com/company/lexsi-labs/" target="_blank" rel="noreferrer" className="footer_link">LinkedIn</a>
              </div>
            </div>
            <div className="footer_col">
              <div className="footer_col-title">Get in touch</div>
              <div className="footer_links-wrapper">
                <a href="mailto:hello@lexsi.ai" className="footer_link">hello@lexsi.ai</a>
              </div>
            </div>
          </div>

        </div>

        <div className="footer_bottom">
          <div className="footer_bottom-text">© 2026 Lexsi. All rights reserved.</div>
          <div className="footer_legal-links">
            <a href="/terms-and-conditions" className="footer_legal-link w-inline-block">
              <div className="footer_legal-link_dot"></div>
              <div className="footer_legal-link_text">Terms and Conditions</div>
            </a>
            <a href="/privacy-policy" className="footer_legal-link w-inline-block">
              <div className="footer_legal-link_dot"></div>
              <div className="footer_legal-link_text">Privacy Policy</div>
            </a>
            <a href="/data-protection-addendum" className="footer_legal-link w-inline-block">
              <div className="footer_legal-link_dot"></div>
              <div className="footer_legal-link_text">Data and Protection Addendum</div>
            </a>
            <a href="/payments-refund-policy" className="footer_legal-link w-inline-block">
              <div className="footer_legal-link_dot"></div>
              <div className="footer_legal-link_text">Payments and Refunds Policy</div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}