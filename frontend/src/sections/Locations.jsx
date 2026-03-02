const CornerSVG = ({ id }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 8 8" fill="none">
    <mask id={id} fill="white"><path d="M0 0H8V8H0V0Z"/></mask>
    <path d="M0 0V-1H-1V0H0ZM0 0V1H8V0V-1H0V0ZM0 8H1V0H0H-1V8H0Z" fill="currentColor" mask={`url(#${id})`}/>
  </svg>
);

const ArrowSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 4.16669V5.83335H11.6667V7.50002H13.3334V9.16669H3.33337V10.8334H13.3334V12.5H11.6667V14.1667H10V15.8334H11.6667V14.1667H13.3334V12.5H15V10.8334H16.6667V9.16669H15V7.50002H13.3334V5.83335H11.6667V4.16669H10Z" fill="currentColor"/>
  </svg>
);

export default function Locations() {
  const locations = [
    { num: "1", name: "Paris",  img: "https://cdn.prod.website-files.com/68ffda447d877eb44580fee2/69007ac183c89bb9212aedbc_Paris.webp" },
    { num: "2", name: "Mumbai", img: "https://cdn.prod.website-files.com/68ffda447d877eb44580fee2/69007abf1fe6ec061a00392a_Mumbai.webp" },
    { num: "3", name: "London", img: "https://cdn.prod.website-files.com/68ffda447d877eb44580fee2/69007ac02aa8c905a04bd826_London.webp" },
  ];

  return (
    <section className="section_home-locations">
      <div className="container-regular">

        <div className="eyebrow_element" style={{ marginBottom: "1.5rem" }}>
          <div className="eyebrow_icon-text">//</div>
          <div>Locations</div>
        </div>

        <h4 style={{
          fontSize: "clamp(1.1rem, 3vw, 1.2rem)",
          fontWeight: "350",
          lineHeight: "1.2",
          maxWidth: "32rem",
          marginBottom: "3rem",
        }}>
          To Expand and Collaborate with global frontier talent, we have carefully established our AI Lab in key locations:
        </h4>

        {/* Cards — use original Webflow classes so CSS hover works */}
        <div className="locations_wrapper" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          marginBottom: "3rem",
        }}>
          {locations.map((loc) => (
            <a
              key={loc.name}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="locations_card-link w-inline-block"
            >
              <div className="locations_thumb-wrapper">
                <img
                  src={loc.img}
                  alt={loc.name}
                  loading="lazy"
                  width="400"
                  height="320"
                  className="locations_thumb"
                />
              </div>
              <div className="locations_content">
                <div>{loc.num}. {loc.name}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Explore Roles — is-secondary variant matches original dark outline style */}
        <div className="button_group is-section-bottom">
          <a
            href="https://app.screenloop.com/careers/aryaxai/"
            target="_blank"
            rel="noreferrer"
            data-wf--element-button--variant="is-secondary"
            className="button_element w-variant-e5e2e5cc-d178-9102-03ae-3882f33fa009 w-inline-block"
          >
            <div className="button_text">Explore Roles</div>
            <div className="button_icon-wrap w-variant-e5e2e5cc-d178-9102-03ae-3882f33fa009">
              <div className="button_icon-embed w-variant-e5e2e5cc-d178-9102-03ae-3882f33fa009 w-embed"><ArrowSVG /></div>
              <div className="button_icon-embed w-variant-e5e2e5cc-d178-9102-03ae-3882f33fa009 w-embed"><ArrowSVG /></div>
            </div>
            <div className="button_corners">
              <div className="button_corner-icon w-embed"><CornerSVG id="lc1" /></div>
              <div className="button_corner-icon is-tr w-embed"><CornerSVG id="lc2" /></div>
              <div className="button_corner-icon is-bl w-embed"><CornerSVG id="lc3" /></div>
              <div className="button_corner-icon is-br w-embed"><CornerSVG id="lc4" /></div>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}