import React from "react";
import ProgressiveImag from "./ProgressiveImag";
import Img from "../assets/PortfolioMe.jpg";
import placeHolderImg from "../assets/PortfolioMeSmall.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div id="home" className=" overflow-hidden min-h-[calc(100vh-3rem)] flex justify-center items-center relative bg-light dark:bg-dark text-dark-text dark:text-light">
      <div className=" absolute desktop:h-full w-full h-1/5 desktop:w-1/5 bg-light-darker dark:bg-dark-lighter left-0 top-0 z-0"></div>
      <div className=" flex flex-col desktop:flex-row desktop:justify-evenly gap-8 justify-between items-center z-10 relative p-8">
        <div className=" aspect-square max-w-xs max-h-[20rem] md:max-w-md md:max-h-[448px] border-solid border-2 border-dark-text dark:border-light">
          <ProgressiveImag
            Img={Img}
            placeholderImg={placeHolderImg}
            alt={"Me"}
          />
        </div>
        <div className=" text-center flex flex-col items-center gap-2 text-lg md:text-2xl font-semibold">
          <p>Hello There! 👋</p>
          <p>I’m Tamendjari Mohamed Aghiles a:</p>
          <div className=" text-xl md:text-3xl lg:text-4xl flex items-center">
            {`<`}
            <div className=" text-primary-pink inline-block relative overflow-hidden">
              <motion.div
                animate={{ x: "-100%" }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                className=" inline-block"
              >
                FrontEndWebDeveloper&nbsp;&nbsp;&nbsp;
              </motion.div>
              <motion.div
                animate={{ x: "-100%" }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                className=" inline-block absolute w-full top-0 -right-full"
              >
                FrontEndWebDeveloper&nbsp;&nbsp;&nbsp;
              </motion.div>
            </div>
            {`/>`}
          </div>
          <p className=" max-w-sm md:max-w-lg">
            So you wanna make interactive websites with cool animations? say no
            more!{" "}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            type="button"
            className=" dark:shadow-slate-700 px-4 py-2 shadow-md text-primary-pink border-solid border-2 border-primary-pink"
          >
            <a href="#contact">Contact Me</a>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
