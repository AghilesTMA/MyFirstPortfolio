import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MagnetComponent from "./MagnetComponent";

const InteractiveLink = ({ title, link }) => {
  return (
    <a href={`#${link}`} className=" group space-x-1">
      {`${title}`.split("").map((char, idx) => (
        <div
          key={idx}
          className=" inline-block group-hover:even:text-primary-pink relative group-hover:even:translate-y-[-2px] group-hover:odd:translate-y-[2px] transition-all duration-200"
        >
          {char}
        </div>
      ))}
    </a>
  );
};

const NavLinks = ({ setLinks }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{type:"spring",stiffness:200,damping:30}}
      className=" flex flex-col justify-between items-center z-50 fixed w-[280px] h-[100vh] top-0 right-0 bg-secondary-blue"
    >
      <div className=" w-full flex justify-center p-4">
        <div className=" border-solid border-b-white border-b-2 text-light flex justify-between items-center w-full py-4">
          <span className=" text-lg font-bold">{`<Sections />`}</span>
          <MagnetComponent>
            <FontAwesomeIcon
              onClick={() => setLinks(false)}
              icon={faX}
              className=" text-xl font-semibold hover:text-primary-pink cursor-pointer"
            />
          </MagnetComponent>
        </div>
      </div>
      <nav className=" w-full p-4">
        <ul className=" flex flex-col gap-4 text-light font-semibold text-lg">
          <li>
            <InteractiveLink title={".Home()"} link={"home"} />
          </li>
          <li>
            <InteractiveLink title={".AboutMe()"} link={"about"} />
          </li>
          <li>
            <InteractiveLink title={".Skills()"} link={"skills"} />
          </li>
          <li>
            <InteractiveLink title={".Work()"} link={"work"} />
          </li>
          <li>
            <InteractiveLink title={".Chat()"} link={"chat"} />
          </li>
          <li>
            <InteractiveLink title={".ContactMe()"} link={"contact"} />
          </li>
        </ul>
      </nav>
      <div className=" text-4xl text-light flex gap-2 p-4">
        <MagnetComponent>
          <a href="https://github.com/AghilesTMA" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className=" cursor-pointer hover:text-primary-pink"
            />
          </a>
        </MagnetComponent>
        <MagnetComponent>
          <a
            href="https://www.linkedin.com/in/aghiles-tamendjari-950077250/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className=" cursor-pointer hover:text-primary-pink"
            />
          </a>
        </MagnetComponent>
      </div>
    </motion.div>
  );
};

export default NavLinks;
