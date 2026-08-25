import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { NavbarDemo } from "./components/Navbar";
import Pricing from "./components/Pricing";
import { useProject } from "./components/ProjectContext";
import Projectsection from "./components/Projectsection";

const App = () => {
  const {isVideoPlayable}=useProject();
  
  // console.log(isVideoPlayable)
  return (
    <>
    {!isVideoPlayable && <NavbarDemo />}
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
  )
};

export default App;
