import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { NavbarDemo } from "./components/Navbar";
import Pricing from "./components/Pricing";
import Projectsection from "./components/Projectsection";

const App = () => (
  <>
    <NavbarDemo />
    <div className="mt-[-54px]">
      <HeroSection />
    </div>
    {/* <HeroSectionwe /> */}
    <Projectsection />
    {/* <Capabilities /> */}
    <Pricing />
    <FAQ />
    {/* <Contact /> */}
    <Footer />
    </>
);

export default App;
