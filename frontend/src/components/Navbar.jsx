export default function Navbar() {
  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="nav_component w-nav"
    >
      <div className="container-regular is-nav">
        <div className="nav_wrapper">
          <a href="/" className="nav_brand-link w-nav-brand">
            <img
              src="https://cdn.prod.website-files.com/68ffda447d877eb44580fee2/6900589b301f0d687815c381_Lexsi%20Logo.svg"
              alt="Lexsi Logo"
              className="nav_brand-logo"
              width="120"
              height="20"
            />
          </a>

          <nav role="navigation" className="nav_navigation w-nav-menu"></nav>

          <a href="/contact-us" className="button_element w-inline-block">
            <div className="button_text">Contact Us</div>
            <div className="button_icon-wrap">
              <div className="button_icon-embed w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 4.16669V5.83335H11.6667V7.50002H13.3334V9.16669H3.33337V10.8334H13.3334V12.5H11.6667V14.1667H10V15.8334H11.6667V14.1667H13.3334V12.5H15V10.8334H16.6667V9.16669H15V7.50002H13.3334V5.83335H11.6667V4.16669H10Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="button_icon-embed w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 4.16669V5.83335H11.6667V7.50002H13.3334V9.16669H3.33337V10.8334H13.3334V12.5H11.6667V14.1667H10V15.8334H11.6667V14.1667H13.3334V12.5H15V10.8334H16.6667V9.16669H15V7.50002H13.3334V5.83335H11.6667V4.16669H10Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <div className="button_corners">
              <div className="button_corner-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><mask id="m1" fill="white"><path d="M0 0H8V8H0V0Z"/></mask><path d="M0 0V-1H-1V0H0ZM0 0V1H8V0V-1H0V0ZM0 8H1V0H0H-1V8H0Z" fill="currentColor" mask="url(#m1)"/></svg></div>
              <div className="button_corner-icon is-tr w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><mask id="m2" fill="white"><path d="M0 0H8V8H0V0Z"/></mask><path d="M0 0V-1H-1V0H0ZM0 0V1H8V0V-1H0V0ZM0 8H1V0H0H-1V8H0Z" fill="currentColor" mask="url(#m2)"/></svg></div>
              <div className="button_corner-icon is-bl w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><mask id="m3" fill="white"><path d="M0 0H8V8H0V0Z"/></mask><path d="M0 0V-1H-1V0H0ZM0 0V1H8V0V-1H0V0ZM0 8H1V0H0H-1V8H0Z" fill="currentColor" mask="url(#m3)"/></svg></div>
              <div className="button_corner-icon is-br w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><mask id="m4" fill="white"><path d="M0 0H8V8H0V0Z"/></mask><path d="M0 0V-1H-1V0H0ZM0 0V1H8V0V-1H0V0ZM0 8H1V0H0H-1V8H0Z" fill="currentColor" mask="url(#m4)"/></svg></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}