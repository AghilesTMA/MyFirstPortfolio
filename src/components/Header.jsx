import React, { useContext } from "react";
import { DarkTheme } from "../context/ThemeProvider";
import Hamburger from "../assets/Hamburger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import MagnetComponent from "./MagnetComponent";
import ProgressCircle from "./ProgressCircle";

const Header = ({scrollProgress,setLinks}) => {
  const { dark, setDark } = useContext(DarkTheme);
  return (
    <div className=" dark:shadow-slate-600 fixed flex justify-between items-center gap-1 w-full h-12 pl-4 tablet:pr-16 top-0 left-0 bg-white dark:bg-dark shadow-md z-30">
      <a href="#">
        <span className=" cursor-pointer text-xl font-bold text-dark-text dark:text-light">
          {"<Aghiles />"}
        </span>
      </a>
      <div className=" tablet:hidden h-10 w-10">
        <ProgressCircle progress={scrollProgress} styles={" w-full h-full"} />
      </div>
      <div
        onClick={() => setDark((prev) => !prev)}
        className=" hover:text-secondary-blue cursor-pointer text-dark-text dark:text-light"
      >
        {dark ? (
          <MagnetComponent>
            <FontAwesomeIcon
              icon={faSun}
              className=" text-xl hover:text-secondary-blue"
            />
          </MagnetComponent>
        ) : (
          <MagnetComponent>
            <FontAwesomeIcon
              icon={faMoon}
              className=" text-xl hover:text-secondary-blue"
            />
          </MagnetComponent>
        )}
      </div>
      <div onClick={()=>setLinks(true)} className=" tablet:hidden overflow-hidden group relative h-full p-3 bg-light-darker dark:bg-dark-lighter cursor-pointer aspect-[1/1] ">
        <Hamburger dark={dark} style={"w-full h-full z-20 relative"} />
        <div className=" absolute w-full h-full bg-secondary-blue -left-full group-hover:left-0 z-10 top-0 transition-all duration-200"></div>
      </div>
    </div>
  );
};

export default Header;
