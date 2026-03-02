import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Research from "./sections/Research";
import Locations from "./sections/Locations";
import Models from "./sections/Models";
import OSS from "./sections/OSS";
import Publications from "./sections/Publications";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="page-wrapper">

      {/* Vertical lines on both sides throughout the site */}
      <div className="page-wrapper_lines-wrapper">
        <div className="page-wrapper_lines"></div>
      </div>

      <Navbar />
      <main className="main-wrapper">
        <Hero />
        <Research />
        <Locations />
        <Models />
        <OSS />
        <Publications />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}