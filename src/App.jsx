import React, { useState } from "react";
import SideBar from "./components/SideBar";
import useScrollEvent from "./hooks/useScrollEvent";
import Header from "./components/Header";
import NavLinks from "./components/NavLinks";
import { AnimatePresence } from "framer-motion";
import HeroSection from "./components/HeroSection";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";


function App() {
  const {scroll} = useScrollEvent()
  const [linksOpened,setLinksOpened] = useState(false)

  return (
    <div className=" pt-12 tablet:pr-12">
      <SideBar scrollProgress={parseFloat(scroll)} setLinks={setLinksOpened} />
      <Header scrollProgress={parseFloat(scroll)} setLinks={setLinksOpened} />
      <AnimatePresence>
        {linksOpened?<NavLinks setLinks={setLinksOpened} />:null}
      </AnimatePresence>
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  );
}

export default App;
