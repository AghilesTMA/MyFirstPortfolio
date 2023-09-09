import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MagnetComponent from "./MagnetComponent";

const Footer = () => {
  return (
    <div className=" flex flex-col items-center">
      <div className=" md:px-12 w-full flex gap-2 flex-col md:flex-row p-2 md:p-4 items-center md:justify-between">
        <div className=" flex flex-col gap-2 items-center">
          <a href="#home">
            <h3 className=" font-bold text-lg">
              {"<"}
              <span className=" text-primary-pink">Aghiles</span>
              {"/>"}
            </h3>
          </a>
          <span className=" font-medium">FrontEnd Web Developer</span>
          <ul className=" flex gap-2 text-2xl">
            <li>
              <a target="_blank" href="https://github.com/AghilesTMA">
                <MagnetComponent>
                  <FontAwesomeIcon
                    className=" hover:text-secondary-blue"
                    icon={faGithub}
                  />
                </MagnetComponent>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/aghiles-tamendjari-950077250/"
              >
                <MagnetComponent>
                  <FontAwesomeIcon
                    className=" hover:text-secondary-blue"
                    icon={faLinkedin}
                  />
                </MagnetComponent>
              </a>
            </li>
            <li>
              <a target="_blank" href="mailto:m_tamendjari@estin.dz">
                <MagnetComponent>
                  <FontAwesomeIcon
                    className=" hover:text-secondary-blue"
                    icon={faEnvelope}
                  />
                </MagnetComponent>
              </a>
            </li>
          </ul>
        </div>
        <ul className="grid grid-cols-2 font-medium gap-2 sm:gap-x-8 ">
          <li className=" opacity-70 hover:opacity-100 hover:text-secondary-blue cursor-pointer">
            <a href="#home">.Home()</a>
          </li>
          <li className=" opacity-70 hover:opacity-100 hover:text-secondary-blue cursor-pointer">
            <a href="#home">.AboutMe()</a>
          </li>
          <li className=" opacity-70 hover:opacity-100 hover:text-secondary-blue cursor-pointer">
            <a href="#home">.Skills()</a>
          </li>
          <li className=" opacity-70 hover:opacity-100 hover:text-secondary-blue cursor-pointer">
            <a href="#home">.Work()</a>
          </li>
          <li className=" opacity-70 hover:opacity-100 hover:text-secondary-blue cursor-pointer">
            <a href="#home">.Chat()</a>
          </li>
          <li className=" opacity-70 hover:opacity-100 hover:text-secondary-blue cursor-pointer">
            <a href="#home">.Contact()</a>
          </li>
        </ul>
      </div>
      <hr className=" text-dark-text dark:text-light m-2 w-3/4 border-[1px] border-solid border-dark-text dark:border-light " />
      <div className=" w-full flex justify-center items-center ">
        <p className=" text-center text-lg p-2 font-medium">
          © Copyright 2023. Designed by{" "}
          <span className=" text-primary-pink cursor-pointer underline hover:text-secondary-blue">
            <a href="#home">Me</a>
          </span>{" "}
          Developed by{" "}
          <span className=" text-primary-pink cursor-pointer underline hover:text-secondary-blue">
            <a href="#home">Me</a>
          </span>
        </p>
      </div>
    </div>
  );
};

const FormContent = () => {
  const [successful, setSeccessful] = useState(false);
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(true);
  const [values, setValues] = useState({
    name: "",
    subject: "",
    email: "",
    content: "",
  });
  const [required, setRequired] = useState({
    name: false,
    subject: false,
    email: false,
    content: false,
  });
  const [validEmail, setValidEmail] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const notEmptyRegex = /.*[^ \n].*/;

    const name = notEmptyRegex.test(values.name);
    const subject = notEmptyRegex.test(values.subject);
    const email = notEmptyRegex.test(values.email);
    const content = notEmptyRegex.test(values.content);
    const valid = emailRegex.test(values.email);

    name
      ? setRequired((prev) => ({ ...prev, name: false }))
      : setRequired((prev) => ({ ...prev, name: true }));
    subject
      ? setRequired((prev) => ({ ...prev, subject: false }))
      : setRequired((prev) => ({ ...prev, subject: true }));
    email
      ? setRequired((prev) => ({ ...prev, email: false }))
      : setRequired((prev) => ({ ...prev, email: true }));
    content
      ? setRequired((prev) => ({ ...prev, content: false }))
      : setRequired((prev) => ({ ...prev, content: true }));
    valid ? setValidEmail(true) : setValidEmail(false);

    if (name && subject && email && content && valid) {
      const serviceId = "SERVICEID";
      const templateId = "TEMPLATEID";
      const publicKey = "PUBLICKEY";

      const templateParams = {
        from_name: values.name,
        subject: values.subject,
        to_name: "Aghiles",
        email: values.email,
        message: values.content,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((resp) => {
          console.log(resp);
          setPending(false);
          setSeccessful(true);
        })
        .catch((err) => {
          console.log(err);
          setPending(false);
          setError(true);
        });
    } else {
      return;
    }
  };

  return (
    <div className=" md:my-2 bg-light dark:bg-dark p-2 w-full">
      <AnimatePresence>
        {pending ? (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className=" flex flex-col md:grid md:grid-cols-4 md:gap-2 gap-4 md:gap-y-4 w-full p-2 text-dark-text dark:text-light "
          >
            <div className=" relative col-span-2">
              <label
                htmlFor="name"
                className={` ${
                  required.name ? " text-red-500" : ""
                } absolute font-semibold px-1 bg-light dark:bg-dark z-10 left-2 bottom-[calc(100%-12px)]`}
              >
                Name
              </label>
              <input
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, name: e.target.value }))
                }
                type="text"
                name="name"
                id="name"
                value={values.name}
                placeholder={required.name ? "Required*" : ""}
                className={` ${
                  required.name
                    ? " placeholder:text-red-500 border-red-500"
                    : " border-dark-text dark:border-light"
                } font-medium bg-light dark:bg-dark outline-dark-text dark:outline-light w-full h-full py-3 px-3 border-solid border-2 `}
              />
            </div>
            <div className=" relative col-span-2">
              <label
                htmlFor="subject"
                className={` ${
                  required.subject ? " text-red-500" : ""
                } absolute font-semibold px-1 bg-light dark:bg-dark z-10  left-2 bottom-[calc(100%-12px)]`}
              >
                Subject
              </label>
              <input
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, subject: e.target.value }))
                }
                type="text"
                name="subject"
                id="subject"
                value={values.subject}
                placeholder={required.subject ? "Required*" : ""}
                className={` ${
                  required.subject
                    ? " placeholder:text-red-500 border-red-500"
                    : " border-dark-text dark:border-light"
                } font-medium bg-light dark:bg-dark outline-dark-text dark:outline-light w-full h-full py-3 px-3 border-solid border-2 `}
              />
            </div>
            <div className=" relative col-span-4">
              <label
                htmlFor="email"
                className={` ${
                  required.email || !validEmail ? " text-red-500" : ""
                } absolute font-semibold px-1 bg-light dark:bg-dark z-10  left-2 bottom-[calc(100%-12px)]`}
              >
                Email
              </label>
              <input
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, email: e.target.value }))
                }
                type="email"
                name="email"
                id="email"
                value={values.email}
                placeholder={
                  required.email
                    ? "Required*"
                    : !validEmail
                    ? "Invalid Email"
                    : ""
                }
                className={` ${
                  required.email || !validEmail
                    ? " placeholder:text-red-500 border-red-500"
                    : " border-dark-text dark:border-light"
                } font-medium bg-light dark:bg-dark outline-dark-text dark:outline-light w-full h-full py-3 px-3 border-solid border-2 `}
              />
            </div>
            <div className=" relative col-span-4">
              <label
                htmlFor="content"
                className={` ${
                  required.content ? " text-red-500" : ""
                } absolute font-semibold px-1 bg-light dark:bg-dark z-10  left-2 bottom-[calc(100%-12px)]`}
              >
                Content
              </label>
              <textarea
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, content: e.target.value }))
                }
                name="content"
                id="content"
                cols="30"
                rows="5"
                value={values.content}
                placeholder={required.content ? "Required*" : ""}
                className={` ${
                  required.content
                    ? " placeholder:text-red-500 border-red-500"
                    : " border-dark-text dark:border-light"
                } font-medium bg-light dark:bg-dark outline-dark-text dark:outline-light w-full h-full py-3 px-3 border-solid border-2 `}
              ></textarea>
            </div>
            <div className=" flex justify-center items-center col-span-4 ">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                type="submit"
                className=" cursor-pointer shadow-sm shadow-gray-300 dark:shadow-slate-500 text-primary-pink font-bold border-2 border-solid border-primary-pink p-2"
              >
                Submit
              </motion.button>
            </div>
          </motion.form>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {successful ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=" h-full flex flex-col gap-4 p-4 items-center md:items-start justify-center"
          >
            <h2 className=" font-bold">Sent successfully ✔</h2>
            <p>
              Thank you for sending this email. I'm gonna try to email you back
              as soon as possible
            </p>
            <div className=" flex items-center justify-center w-full">
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                type="button"
                onClick={() => {
                  setSeccessful(false);
                  setPending(true);
                }}
                className=" shadow-sm shadow-gray-300 dark:shadow-slate-500 text-primary-pink border-solid border-2 border-primary-pink p-2"
              >
                Back to form
              </motion.button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {error ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=" h-full flex flex-col gap-4 p-4 items-center md:items-start justify-center"
          >
            <h2 className=" font-bold">Couldn't Send the mail ✖</h2>
            <p>
              We're sorry your mail couldn't be sent. this problem might be
              caused by reaching the Api limit please retry soon. or email me at{" "}
              <a href="mailto:m_tamendjari@estin.dz" target="_blank">
                m_tamendjari@estin.dz
              </a>
            </p>
            <div className=" flex items-center justify-center w-full">
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                type="button"
                onClick={() => {
                  setError(false);
                  setPending(true);
                }}
                className=" shadow-sm shadow-gray-300 dark:shadow-slate-500 text-primary-pink border-solid border-2 border-primary-pink p-2"
              >
                Back to form
              </motion.button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className=" p-4 bg-light-darker dark:bg-dark-lighter shadow-md dark:shadow-slate-500 shadow-gray-300">
      <div className=" flex flex-col md:flex-row max-w-lg md:max-w-4xl m-auto min-h-[400px]">
        <FormContent />
        <div className=" w-full -order-last md:-order-first font-medium bg-secondary-blue text-light p-4 flex flex-col items-center md:items-start text-center md:text-left justify-center gap-4">
          <h2 className=" font-bold text-xl">
            .<span className=" text-primary-pink">ContactMe</span>()
          </h2>
          <p className=" max-w-xs">
            If you are interested in working with me, or want me to help you
            build your next website don’t hesitate to reach me out! 💯{" "}
          </p>
          <p className=" max-w-xs">
            I would also be happy if you give me your feedback about my work
          </p>
        </div>
      </div>
    </div>
  );
};

const SectionSix = () => {
  return (
    <div
      id="contact"
      className=" text-dark-text dark:text-light min-h-[calc(100vh-3rem)] bg-light dark:bg-dark flex flex-col"
    >
      <ContactForm />
      <Footer />
    </div>
  );
};

export default SectionSix;
