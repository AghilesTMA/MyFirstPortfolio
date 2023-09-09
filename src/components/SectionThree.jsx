import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTerminal,
  faCircleExclamation,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

const fileSystem = {
  root: {
    path: "/",
    children: ["languages", "techstack", "other"],
  },
  languages: {
    path: "/languages",
    children: [
      "Python.exe",
      "JavaScript.exe",
      "C.exe",
      "Assembly86.exe",
      "HTML5.exe",
      "CSS.exe",
    ],
  },
  techStack: {
    path: "/techstack",
    children: [
      "React.exe",
      "TailwindCss.exe",
      "FramerMotion.exe",
      "Sass.exe",
      "MaterialUi.exe",
      "Redux.exe",
    ],
  },
  other: {
    path: "/other",
    children: ["VsCode.exe", "Git.exe", "GitHub.exe", "Figma.exe", "Linux.exe"],
  },
};

const TerminalScreen = () => {
  const [input, setInput] = useState("");
  const [content, setContent] = useState([]);
  const [selectedDir, setSelectedDir] = useState(fileSystem.root);

  const handleSubmit = () => {
    const lowerCaseInput = input.toLowerCase();
    const commandPattern = /^(ls|cd|pwd|clear)/i;
    if (commandPattern.test(lowerCaseInput)) {
      if (/^clear/.test(lowerCaseInput)) {
        lowerCaseInput === "clear"
          ? setContent([])
          : setContent((prev) => [
              ...prev,
              {
                currPath: selectedDir.path,
                command: input,
                text: "command not written correctly",
                list: [],
              },
            ]);
      }
      if (/^pwd/.test(lowerCaseInput)) {
        lowerCaseInput === "pwd"
          ? setContent((prev) => [
              ...prev,
              {
                currPath: selectedDir.path,
                command: input,
                text: selectedDir.path,
                list: [],
              },
            ])
          : setContent((prev) => [
              ...prev,
              {
                currPath: selectedDir.path,
                command: input,
                text: "command not written correctly",
                list: [],
              },
            ]);
      }
      if (/^ls/.test(lowerCaseInput)) {
        lowerCaseInput === "ls"
          ? setContent((prev) => [
              ...prev,
              {
                currPath: selectedDir.path,
                command: input,
                text: "",
                list: [...selectedDir.children],
              },
            ])
          : setContent((prev) => [
              ...prev,
              {
                currPath: selectedDir.path,
                command: input,
                text: "command not written correctly",
                list: [],
              },
            ]);
      }
      if (/^cd/.test(lowerCaseInput)) {
        if (lowerCaseInput === "cd ..") {
          if (selectedDir.path !== "/") {
            setContent((prev) => [
              ...prev,
              {
                currPath: selectedDir.path,
                command: input,
                text: "",
                list: [],
              },
            ]);
            setSelectedDir(fileSystem.root);
          } else {
            setContent((prev) => [
              ...prev,
              {
                currPath: selectedDir.path,
                command: input,
                text: "root directory has no parent",
                list: [],
              },
            ]);
          }
        } else if (lowerCaseInput === "cd languages") {
          setContent((prev) => [
            ...prev,
            {
              currPath: selectedDir.path,
              command: input,
              text: "",
              list: [],
            },
          ]);
          setSelectedDir(fileSystem.languages);
        } else if (lowerCaseInput === "cd techstack") {
          setContent((prev) => [
            ...prev,
            {
              currPath: selectedDir.path,
              command: input,
              text: "",
              list: [],
            },
          ]);
          setSelectedDir(fileSystem.techStack);
        } else if (lowerCaseInput === "cd other") {
          setContent((prev) => [
            ...prev,
            {
              currPath: selectedDir.path,
              command: input,
              text: "",
              list: [],
            },
          ]);
          setSelectedDir(fileSystem.other);
        } else {
          setContent((prev) => [
            ...prev,
            {
              currPath: selectedDir.path,
              command: input,
              text: "command not written correctly",
              list: [],
            },
          ]);
        }
      }
      setInput("");
    } else {
      setContent((prev) => [
        ...prev,
        {
          currPath: selectedDir.path,
          command: input,
          text: "command not found",
          list: [],
        },
      ]);
      setInput("");
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };
  return (
    <div className="Terminal bg-black flex-grow p-2 overflow-auto text-light">
      {content.map((line, idx) => (
        <div key={idx}>
          <div className=" flex gap-1 items-center">
            <span className=" font-vt323 text-light">
              {`portroflio@portroflioViewer:${line.currPath}$`}
            </span>
            <span className=" font-vt323 text-light">{line.command}</span>
          </div>
          {line.text !== "" ? (
            <div className=" font-vt323 text-light">{line.text}</div>
          ) : null}
          {line.list.lenght !== 0 ? (
            <div className=" flex items-center gap-2">
              {line.list.map((element, idx) => (
                <span className=" font-vt323 text-secondary-blue" key={idx}>
                  {element}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      ))}
      <div className="  flex items-center gap-1">
        <span className=" font-vt323">
          {`portroflio@portroflioViewer:${selectedDir.path}$`}
        </span>
        <input
          type="text"
          onKeyDown={handleKeyPress}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" flex-grow outline-none border-none bg-black font-vt323"
        />
      </div>
    </div>
  );
};

const ModalHelp = ({ setIsOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" z-10 p-2 flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 bg-[rgb(74,74,74,70%)]"
    >
      <motion.div
        initial={{ y: -500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 500, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className=" overflow-auto p-1 font-medium  w-full max-w-xl h-full max-h-96 bg-light text-dark-text"
      >
        <div className=" p-2 bg-light-darker flex justify-between items-center">
          <span className=" font-bold">
            .<span className=" text-primary-pink">TerminalGuide</span>()
          </span>
          <FontAwesomeIcon
            onClick={() => setIsOpen(false)}
            icon={faX}
            className=" cursor-pointer text-dark-text hover:text-primary-pink"
          />
        </div>
        <div className=" flex flex-col gap-1">
          <p>
            This simple Aghiles'Bash has only 4 commands available, ther is no
            need for more commands since it's only made to showCase my skills.
            <br />
            here is how to use it:
          </p>
          <div className=" flex gap-1 ">
            <span className=" text-red-500 font-semibold">Important!:</span>
            <p>
              Note that you write the commands like the guide since even spaces
              count+ feel free to write commands in uppercase or lowercase it's
              the same
            </p>
          </div>
          <div className=" flex gap-1 ">
            <span className=" text-primary-pink font-semibold">cd:</span>
            <div>
              <p>This command is used to change directory,examples:</p>
              <p>
                <span className=" font-bold">"cd directoryName"</span> this
                command will change the current directory to the directory
                mentioned in the command.
              </p>
              <p>
                <span className=" font-bold">"cd .."</span> this command will
                change the current directory to the parent of the current one.
              </p>
            </div>
          </div>
          <div className=" flex gap-1 ">
            <span className=" text-primary-pink font-semibold">ls:</span>
            <div>
              <p>
                This command is used to list the content of the current
                directory,example:
              </p>
              <p>
                <span className=" font-bold">"ls"</span>This command will list
                the content of the current directory
              </p>
            </div>
          </div>
          <div className=" flex gap-1 ">
            <span className=" text-primary-pink font-semibold">pwd:</span>
            <div>
              <p>
                This command is used print the path of the current directory to
                the console,example:
              </p>
              <p>
                <span className=" font-bold">"pwd"</span> expected result:
                /languages
              </p>
            </div>
          </div>
          <div className=" flex gap-1 ">
            <span className=" text-primary-pink font-semibold">clear:</span>
            <div>
              <p>
                This command is used to clear the console,example:
              </p>
              <p>
                <span className=" font-bold">"clear"</span> this command will clear everything from the console
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Terminal = ({ setIsOpen }) => {
  return (
    <div className=" bg-light h-[450px] p-1 gap-2 flex flex-col max-w-4xl m-auto">
      <div className=" flex justify-between">
        <div className=" flex gap-1 items-center">
          <div className=" h-full bg-dark-text w-8 flex justify-center items-center rounded-sm">
            <FontAwesomeIcon icon={faTerminal} className=" text-light" />
          </div>
          <span className=" text-dark-text font-semibold">Aghiles'Bash</span>
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className=" hover:text-secondary-blue bg-light-darker text-dark-text p-1 rounded-sm cursor-pointer"
        >
          <FontAwesomeIcon icon={faCircleExclamation} />
          <span className=" font-medium">Help</span>
        </div>
      </div>
      <TerminalScreen />
    </div>
  );
};

const SectionThree = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div
      id="skills"
      className=" relative p-4 min-h-[calc(100vh-3rem)] bg-light-darker dark:bg-dark-lighter text-dark-text dark:text-light"
    >
      <AnimatePresence>
        {modalOpen ? <ModalHelp setIsOpen={setModalOpen} /> : null}
      </AnimatePresence>
      <p className=" font-bold text-xl p-2 text-dark-text dark:text-light">
        .<span className=" text-primary-pink">Skills</span>()
      </p>
      <Terminal setIsOpen={setModalOpen} />
    </div>
  );
};

export default SectionThree;