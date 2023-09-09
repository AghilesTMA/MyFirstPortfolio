import React, { useState } from "react";
import Me from "../assets/AboutMeMe.jpg";
import Education from "../assets/AboutMeEducation.jpg";
import Experience from "../assets/AboutMeExperience.jpg";
import ESTIN from "../assets/logo-estin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const AboutComponent = () => {
  const [selectedInfo, setSelectedInfo] = useState(null);
  return (
    <div className=" flex gap-2 flex-col md:flex-row  w-full max-w-[512px] p-4 md:max-w-none md:items-center md:justify-center mx-auto ">
      <motion.div
        onClick={() => setSelectedInfo("Who am I?")}
        transition={{type:"spring",stiffness:150,damping:20}}
        layout
        className={`${
          selectedInfo === "Who am I?"
            ? " md:w-full md:flex-grow md:max-w-lg"
            : "md:max-w-[200px] h-[200px]"
        }  md:min-h-[382px] relative cursor-pointer group w-full  overflow-hidden  bg-light-darker dark:bg-dark-lighter`}
      >
        {selectedInfo === "Who am I?" ? (
          <div className=" flex flex-col justify-center gap-4 items-center md:items-start p-2 w-full h-full bg-light-darker dark:bg-dark-lighter text-dark-text dark:text-light">
            <span className=" font-bold text-lg">
              {`<`}
              <span className=" whitespace-nowrap text-primary-pink">Who am I?</span>
              {`/>`}
            </span>
            <p className=" w-full font-medium">
              I’m Tamendjari Mohamed Aghiles. A computer science student and a
              Front End web developer from Algeria👨‍💻 I’m passionate about tech
              related stuff. I’m interested in web development, cyber security,
              and software engineering in general. I have other hobbies like
              playing Chess, video games, reading books,traveling, and sleeping
              Lol. I really enjoy making web apps, and I'll do my best to make
              your dream website.{" "}
            </p>
          </div>
        ) : (
          <>
            <div className=" md:top-0 md:left-0 md:w-full absolute bg-light-darker z-10 top-[calc(50%-1.25rem)] left-[calc(50%-3rem)] w-24 h-10 flex justify-center items-center font-semibold">
              Who am I?
            </div>
            <img
              src={Me}
              alt="Me"
              className=" group-hover:scale-110 transition-all duration-500 ease-in h-full object-cover opacity-50"
            />
          </>
        )}
      </motion.div>

      <motion.div
        onClick={() => setSelectedInfo("Education")}
        transition={{type:"spring",stiffness:150,damping:20}}
        layout
        className={` ${
          selectedInfo === "Education"
            ? " md:w-full md:flex-grow md:max-w-lg"
            : "md:max-w-[200px] h-[200px]"
        } md:min-h-[382px] relative cursor-pointer group w-full  overflow-hidden bg-light-darker dark:bg-dark-lighter`}
      >
        {selectedInfo === "Education" ? (
          <div className=" flex flex-col justify-center gap-4 items-center md:items-start p-2 w-full h-full bg-light-darker dark:bg-dark-lighter text-dark-text dark:text-light">
            <span className=" font-bold text-lg">
              {`<`}
              <span className=" text-primary-pink">Education</span>
              {`/>`}
            </span>
            <p className=" w-full font-medium">
              I’m currently a second year computer science student at: <br />
              <a href="https://estin.dz/" target="_blank">
                <span className=" bg-light-darker text-dark-text flex items-center justify-between border-solid border-2 border-dark-text dark:border-light">
                  <span className=" w-12">
                    <img src={ESTIN} alt="ESTIN" />
                  </span>
                  <span className=" font-semibold text-sm">
                    Ecole Supérieure en Sciences et Technologies ...
                  </span>
                  <FontAwesomeIcon icon={faLink} />
                </span>
              </a>
              I had a great experience in my first year at this university where
              I met many talented people. we worked together on many projects to
              improve ourselves and becoming better engineers. I also learned a lot
              of incredible things about computers and software engineering. who
              said university is boring?
            </p>
          </div>
        ) : (
          <>
            <div className=" md:top-0 md:left-0 md:w-full absolute bg-light-darker z-10 top-[calc(50%-1.25rem)] left-[calc(50%-3rem)] w-24 h-10 flex justify-center items-center font-semibold">
              Education
            </div>
            <img
              src={Education}
              alt="Education"
              className=" group-hover:scale-110 transition-all duration-500 ease-in h-full object-cover opacity-50"
            />
          </>
        )}
      </motion.div>

      <motion.div
        onClick={() => setSelectedInfo("Experiece")}
        transition={{type:"spring",stiffness:150,damping:20}}
        layout
        className={` ${
          selectedInfo === "Experiece"
            ? " md:w-full md:flex-grow md:max-w-lg"
            : "md:max-w-[200px] h-[200px]"
        } md:min-h-[382px] relative cursor-pointer group w-full  overflow-hidden  bg-light-darker dark:bg-dark-lighter`}
      >
        {selectedInfo === "Experiece" ? (
          <div className=" flex flex-col justify-center gap-4 items-center md:items-start p-2 w-full h-full bg-light-darker dark:bg-dark-lighter text-dark-text dark:text-light">
            <span className=" font-bold text-lg">
              {`<`}
              <span className=" text-primary-pink">Experience</span>
              {`/>`}
            </span>
            <p className=" w-full font-medium">
              My love for web development, made me give a lot of my time to
              understand this fascinating world. and dive more deeply into it
              every single day. And now I’ve made many projects, using multiple
              technologies and tools, and still learning other new Cutting-edge
              technologies. I’ve also worked on projects in teams and gained
              skills in communication and team work.
            </p>
          </div>
        ) : (
          <>
            <div className=" md:top-0 md:left-0 md:w-full absolute bg-light-darker z-10 top-[calc(50%-1.25rem)] left-[calc(50%-3rem)] w-24 h-10 flex justify-center items-center font-semibold">
              Experience
            </div>
            <img
              src={Experience}
              alt="Me"
              className=" group-hover:scale-110 transition-all duration-500 ease-in h-full object-cover opacity-50"
            />
          </>
        )}
      </motion.div>
    </div>
  );
};

const SectionTwo = () => {
  return (
    <div
      id="about"
      className=" p-4 min-h-[calc(100vh-3rem)] bg-light dark:bg-dark"
    >
      <p className=" font-bold text-xl p-2 text-dark-text dark:text-light">
        .<span className=" text-primary-pink">AboutMe</span>()
      </p>
      <AboutComponent />
    </div>
  );
};

export default SectionTwo;
