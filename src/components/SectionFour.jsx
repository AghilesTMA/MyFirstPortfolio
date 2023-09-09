import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DashBorad from "../assets/DashBoard-App.png";
import TravlogDesktop from "../assets/TravlogDesktop.png";
import TravlogMobile from "../assets/TravlogMobile.png";
import Countries from "../assets/Where-in-the-world.png";
import BookMarks from "../assets/BookMark-App.png";
import ReactIcon from "../assets/React.png";
import Tailwind from "../assets/Tailwind.png";
import FramerMotion from "../assets/FramerMotion.png";
import MaterialUi from "../assets/MaterialUi.png";
import CSS from "../assets/CSS.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const dashBoardPrj = {
  img: DashBorad,
  title: "DasheBorad App",
  details:
    "A Dashboard app that contains multiple Chart types, Form validation, interactive Calendar and Data grid ...",
  tech: [ReactIcon, Tailwind, FramerMotion, MaterialUi],
  source: "https://github.com/AghilesTMA/Dashboard-App",
  live: "",
};
const travlogPrj = {
  img: TravlogDesktop,
  title: "Travlog LandingPage",
  details: "A Responsive landing page for Travlog",
  tech: [ReactIcon, Tailwind, FramerMotion],
  source: "https://github.com/AghilesTMA/ByteCraftChallenge",
  live: "",
};
const bookMarkPrj = {
  img: BookMarks,
  title: "BookMarks LandingPage",
  details: "A Responsive landing page for BookMark",
  tech: [ReactIcon, Tailwind],
  source: "https://github.com/AghilesTMA/BookMarks-Landing-Page",
  live: "",
};
const countriesPrj = {
  img: Countries,
  title: "Countries App",
  details:
    "A responsive and interactive App that contains multiple pages and working with Api and Json data",
  tech: [ReactIcon, CSS],
  source: "https://github.com/AghilesTMA/Where-in-the-world",
  live: "",
};

const ModalProject = ({ selectedProject, setModal }) => {
  const { img, title, details, tech, source, live } = selectedProject;
  return (
    <motion.div
      layout
      layoutId="Modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" p-2 absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-[rgb(74,74,74,70%)] z-10"
    >
      <motion.div
        initial={{ y: -500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 500, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className=" max-h-[550px] relative bg-white h-full w-full max-w-md overflow-auto flex flex-col justify-between gap-2"
      >
        <div
          onClick={() => setModal(false)}
          className=" cursor-pointer w-8 h-8 group absolute bg-light-darker flex justify-center items-center top-0 right-0"
        >
          <FontAwesomeIcon
            icon={faX}
            className=" group-hover:text-secondary-blue text-dark-text"
          />
        </div>
        <div className=" max-h-52">
          <img src={img} alt={title} className=" w-full h-full object-cover" />
        </div>
        <div className=" text-dark-text flex flex-col gap-1 p-2">
          <span className=" font-bold">{title}</span>
          <p>{details}</p>
          <span className=" font-medium">Tech Used:</span>
          <ul className=" flex items-center  gap-2">
            {tech.map((tech, idx) => (
              <li
                className=" w-10 h-10 rounded-sm bg-light-darker p-1"
                key={idx}
              >
                <img src={tech} alt="skill" />
              </li>
            ))}
          </ul>
        </div>
        <div className=" text-dark-text flex justify-evenly items-center p-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className={`${
              live === ""
                ? " border-dark-text text-dark-text cursor-not-allowed pointer-events-none"
                : "border-primary-pink text-primary-pink"
            } p-2 border-solid border-2  font-semibold  w-24 shadow-sm shadow-gray-500`}
            type="button"
            disabled={live === ""}
          >
            <a href={live} target="_blank">
              live
            </a>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className=" p-2 border-solid border-2 border-primary-pink font-semibold text-primary-pink w-24 shadow-sm shadow-gray-500"
            type="button"
          >
            <a href={source} target="_blank">
              Source
            </a>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsGrid = ({ setModal, setPrj }) => {
  return (
    <div className=" w-full min-h-[450px] md:h-[450px] max-w-md md:max-w-4xl mx-auto flex flex-col gap-2 md:grid md:grid-cols-6 md:grid-rows-3">
      <motion.div
        onClick={() => {
          setPrj(dashBoardPrj);
          setModal(true);
        }}
        className=" group overflow-hidden relative cursor-pointer border-solid border-2 border-dark-text dark:border-light w-full h-[200px] md:h-auto md:min-h-0 md:col-span-4 md:row-span-2"
      >
        <img
          src={DashBorad}
          alt="DashBorad App"
          className=" w-full h-full object-cover"
        />
        <div className=" absolute w-full h-full -top-full group-hover:top-0 transition-all duration-500 left-0 bg-light-darker dark:bg-dark-lighter flex justify-center items-center ">
          <div className="flex flex-col gap-1 items-center">
            <span className=" font-semibold text-dark-text dark:text-light text-xl md:text-2xl">
              DASHBOARD APP
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              type="button"
              className=" shadow-sm shadow-gray-500 dark:shadow-slate-500 p-2 text-primary-pink border-solid border-2 border-primary-pink font-semibold"
            >
              See More
            </motion.button>
          </div>
        </div>
      </motion.div>
      <motion.div
        onClick={() => {
          setPrj(travlogPrj);
          setModal(true);
        }}
        className=" group overflow-hidden relative cursor-pointer border-solid border-2 border-dark-text dark:border-light w-full h-[200px] md:h-auto md:min-h-0 md:col-span-2 md:row-span-3 "
      >
        <img
          src={TravlogMobile}
          alt="Travlog App"
          className=" hidden md:inline-block w-full h-full object-cover"
        />
        <img
          src={TravlogDesktop}
          alt="Travlog App"
          className=" md:hidden  w-full h-full object-cover"
        />
        <div className=" absolute w-full h-full -top-full group-hover:top-0 transition-all duration-500 left-0 bg-light-darker dark:bg-dark-lighter flex justify-center items-center ">
          <div className="flex flex-col gap-1 items-center">
            <span className=" font-semibold text-dark-text dark:text-light text-xl md:text-2xl">
              TRAVLOG
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              type="button"
              className=" shadow-sm shadow-gray-500 dark:shadow-slate-500 p-2 text-primary-pink border-solid border-2 border-primary-pink font-semibold"
            >
              See More
            </motion.button>
          </div>
        </div>
      </motion.div>
      <motion.div
        onClick={() => {
          setPrj(countriesPrj);
          setModal(true);
        }}
        className=" group overflow-hidden relative cursor-pointer border-solid border-2 border-dark-text dark:border-light w-full h-[200px] md:h-auto md:min-h-0 md:col-span-2 md:row-span-1 "
      >
        <img
          src={Countries}
          alt="CountriesApp"
          className=" w-full h-full object-cover"
        />
        <div className=" absolute w-full h-full -top-full group-hover:top-0 transition-all duration-500 left-0 bg-light-darker dark:bg-dark-lighter flex justify-center items-center ">
          <div className="flex flex-col gap-1 items-center">
            <span className=" font-semibold text-dark-text dark:text-light text-xl md:text-2xl">
              COUNTRIES APP
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              type="button"
              className=" shadow-sm shadow-gray-500 dark:shadow-slate-500 p-2 text-primary-pink border-solid border-2 border-primary-pink font-semibold"
            >
              See More
            </motion.button>
          </div>
        </div>
      </motion.div>
      <motion.div
        onClick={() => {
          setPrj(bookMarkPrj);
          setModal(true);
        }}
        className=" group overflow-hidden relative cursor-pointer border-solid border-2 border-dark-text dark:border-light w-full h-[200px] md:h-auto md:min-h-0 md:col-span-2 md:row-span-1"
      >
        <img
          src={BookMarks}
          alt="BookMark App"
          className=" w-full h-full object-cover"
        />
        <div className=" absolute w-full h-full -top-full group-hover:top-0 transition-all duration-500 left-0 bg-light-darker dark:bg-dark-lighter flex justify-center items-center ">
          <div className="flex flex-col gap-1 items-center">
            <span className=" font-semibold text-dark-text dark:text-light text-xl md:text-2xl">
              BOOKMARKS
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              type="button"
              className=" shadow-sm shadow-gray-500 dark:shadow-slate-500 p-2 text-primary-pink border-solid border-2 border-primary-pink font-semibold"
            >
              See More
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SectionFour = () => {
  const [selectedProject, setSelectedProject] = useState(dashBoardPrj);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      id="work"
      className=" relative p-4 min-h-[calc(100vh-3rem)] bg-light dark:bg-dark text-dark-text dark:text-light"
    >
      <AnimatePresence>
        {modalOpen ? (
          <ModalProject
            selectedProject={selectedProject}
            setModal={setModalOpen}
          />
        ) : null}
      </AnimatePresence>
      <p className=" font-bold text-xl p-2 text-dark-text dark:text-light">
        .<span className=" text-primary-pink">Work</span>()
      </p>
      <ProjectsGrid setModal={setModalOpen} setPrj={setSelectedProject} />
    </div>
  );
};

export default SectionFour;