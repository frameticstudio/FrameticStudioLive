import { useState } from "react";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FrameticLoader from "./components/Loader";
import { NavbarDemo } from "./components/Navbar";
import Pricing from "./components/Pricing";
import { useProject } from "./components/ProjectContext";
import Projectsection from "./components/Projectsection";
import logo from './assets/images/logo.jpeg'
const App = () => {
  const {isVideoPlayable}=useProject();
  const [loading,setLoading]=useState(true);
  // console.log(isVideoPlayable)
  return (
    <>
    {loading && (
        <FrameticLoader
          duration={3200}
          logoSrc={logo}
          onComplete={() => setLoading(false)}
        />)}
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
