import React, { useContext } from "react";
import { DarkTheme } from "../context/ThemeProvider.jsx";
import Hamburger from "../assets/Hamburger.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MagnetComponent from "./MagnetComponent.jsx";
import {motion} from 'framer-motion'


const ProgressBar = ({scrollProgress}) => {
  return (
    <div className=" flex flex-col gap-0 justify-center items-center">
      <span className=" font-semibold text-dark-text dark:text-white">6</span>
      <div className=" relative h-36 w-1 bg-light-darker dark:bg-slate-500">
        <motion.div style={{scaleY:scrollProgress}} className=" origin-bottom absolute w-full bottom-0 left-0 h-full bg-dark-text dark:bg-light "></motion.div>
      </div>
      <span className=" font-semibold text-dark-text dark:text-white">{Math.ceil(parseFloat(scrollProgress)*6)}</span>
    </div>
  );
};

const SideBar = ({scrollProgress,setLinks}) => {
  const { dark } = useContext(DarkTheme);
  return (
    <div className=" dark:bg-dark z-40 hidden tablet:flex flex-col justify-between items-center h-[100vh] fixed top-0 right-0 w-12 dark:bg-lighter-dark bg-light border-solid border-l-2 border-light-darker dark:border-dark-lighter">
      <div onClick={()=>setLinks(true)} className=" overflow-hidden group relative w-full p-3 bg-light-darker dark:bg-dark-lighter cursor-pointer aspect-[1/1] ">
        <Hamburger dark={dark} style={"w-full h-full z-20 relative"} />
        <div className=" absolute w-full h-full bg-secondary-blue -left-full group-hover:left-0 z-10 top-0 transition-all duration-200"></div>
      </div>
      <ProgressBar scrollProgress={scrollProgress} />
      <div className=" flex flex-col gap-1">
        <MagnetComponent>
          <a href="https://github.com/AghilesTMA" target="_blank">
            <FontAwesomeIcon
              className="text-2xl text-dark-text dark:text-light cursor-pointer hover:text-secondary-blue dark:hover:text-secondary-blue"
              icon={faGithub}
            />
          </a>
        </MagnetComponent>
        <MagnetComponent>
          <a href="https://www.linkedin.com/in/aghiles-tamendjari-950077250/" target="_blank">
            <FontAwesomeIcon
              className="text-2xl text-dark-text dark:text-light cursor-pointer hover:text-secondary-blue dark:hover:text-secondary-blue"
              icon={faLinkedin}
            />
          </a>
        </MagnetComponent>
      </div>
    </div>
  );
};

export default SideBar;
