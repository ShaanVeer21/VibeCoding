export default function Hero() {
  return (
    <section className="section_home-header">
      <div className="nav_header-spacer"></div>
      <div className="home-header_content-wrap">
        <div className="container-regular is-full-hright">
          <div className="home-header_content">
            <h1>The AI Engineering Layer That Will Define How Machines Think for the Next Century.</h1>
          </div>
        </div>
      </div>
      <div className="home-header_bg">
        <img
          src="https://cdn.prod.website-files.com/68ffda447d877eb44580fee2/690b1d924cc96690ca33db7d_Lexi%20Hero%20Image.jpg"
          loading="lazy"
          width="1440"
          height="980"
          alt="Person standing in a grassy field overlooking a futuristic city"
          srcSet="https://cdn.prod.website-files.com/68ffda447d877eb44580fee2/690b1d924cc96690ca33db7d_Lexi%20Hero%20Image-p-500.jpg 500w, https://cdn.prod.website-files.com/68ffda447d877eb44580fee2/690b1d924cc96690ca33db7d_Lexi%20Hero%20Image-p-800.jpg 800w, https://cdn.prod.website-files.com/68ffda447d877eb44580fee2/690b1d924cc96690ca33db7d_Lexi%20Hero%20Image-p-1080.jpg 1080w, https://cdn.prod.website-files.com/68ffda447d877eb44580fee2/690b1d924cc96690ca33db7d_Lexi%20Hero%20Image.jpg 1440w"
          sizes="100vw"
          className="home-header_bg-img"
        />
        <div className="home-header_bg-overlay"></div>
      </div>
    </section>
  );
}