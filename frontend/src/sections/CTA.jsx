const ArrowSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 4.16669V5.83335H11.6667V7.50002H13.3334V9.16669H3.33337V10.8334H13.3334V12.5H11.6667V14.1667H10V15.8334H11.6667V14.1667H13.3334V12.5H15V10.8334H16.6667V9.16669H15V7.50002H13.3334V5.83335H11.6667V4.16669H10Z" fill="currentColor"/>
  </svg>
);

const CornerSVG = ({ id }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 8 8" fill="none">
    <mask id={id} fill="white"><path d="M0 0H8V8H0V0Z"/></mask>
    <path d="M0 0V-1H-1V0H0ZM0 0V1H8V0V-1H0V0ZM0 8H1V0H0H-1V8H0Z" fill="currentColor" mask={`url(#${id})`}/>
  </svg>
);

export default function CTA() {
  return (
    <section className="section_cta">
      <div className="full-cta_content">
        <div className="container-regular">
          <div
            data-wf--element-section-intro--variant="is-white"
            className="section-intro_wrapper w-variant-7995da48-a2f3-70d6-8e2f-9deb24dc55ee"
            style={{ maxWidth: "30rem", textWrap: "balance" }}
          >
            <h2>Building or Deploying AI Solutions for Mission-Critical Use Cases?</h2>
            <p>Work with Lexsi Labs to leverage the frontier AI research in building 'AI' that is interpretable, aligned, and safe to scale.</p>
            <div className="button_group">
              <a
                href="/contact-us"
                data-wf--element-button--variant="base"
                className="button_element w-inline-block"
                style={{
                  background: "white",
                  color: "#0a0a0a",
                  borderColor: "white",
                }}
              >
                <div className="button_text">Learn More</div>
                <div className="button_icon-wrap">
                  <div className="button_icon-embed w-embed"><ArrowSVG /></div>
                  <div className="button_icon-embed w-embed"><ArrowSVG /></div>
                </div>
                <div className="button_corners">
                  <div className="button_corner-icon w-embed"><CornerSVG id="cta1"/></div>
                  <div className="button_corner-icon is-tr w-embed"><CornerSVG id="cta2"/></div>
                  <div className="button_corner-icon is-bl w-embed"><CornerSVG id="cta3"/></div>
                  <div className="button_corner-icon is-br w-embed"><CornerSVG id="cta4"/></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="full-cta_bg">
        <div className="full-cta_bg-overlay"></div>
        <img
          className="full-cta_bg-img"
          src="https://cdn.prod.website-files.com/68ffda447d877eb44580fee2/6909372ef4aa4b9a5975c418_Lexsi%20CTA%20BG.webp"
          width="1440"
          height="997"
          alt="Person sitting on a grassy hill watching a futuristic city skyline at sunset."
          loading="lazy"
        />
      </div>
    </section>
  );
}