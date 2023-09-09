import React, { useState } from "react";
import Me from "../assets/PortfolioMe.jpg";
import { motion } from "framer-motion";

const ContactCard = ({ img, name }) => {
  return (
    <div className=" flex items-center justify-between p-2 gap-2 bg-light-darker dark:bg-dark-lighter">
      <div className=" flex items-center gap-1">
        <div className=" w-10 h-10 rounded-full overflow-hidden">
          <img src={img} alt="Me" />
        </div>
        <span className=" font-medium">{name}</span>
      </div>
      <div className=" w-3 h-3 bg-green-400 rounded-full"></div>
    </div>
  );
};

const ChatBody = () => {
  const QuestionsAnswers = [
    {
      Q: "Hi",
      A: ["Hello there!", "I hope you're good"],
    },
    {
      Q: "What are you learning righ now?",
      A: [
        "Currently I'm learning back end in order to become a fullStack web dev",
      ],
    },
    {
      Q: "How long does it typically take to complete a project?",
      A: [
        "It depends on the project",
        "But i always complete my work before the given deadlines",
      ],
    },
    {
      Q: "Are you open to collaborating with other developers or teams?",
      A: [
        "I always think that working on big projects in a team is better",
        "You can always exchange ideas and approaches in order to make the best product",
        "I have already worked on projects in a team and it was a good exprerience"
      ],
    },
    {
      Q: "Are you available for freelance work or full-time positions?",
      A: [
        "Since I'm a student i won't have much time for a full-time position",
        "I would happily take a part-time job or freelance projects"
      ],
    },
    {
      Q: "We want to hire you",
      A: [
        "If you want to add me to your team, Please don't hesitate to contact me below",
      ],
    },
    {
      Q: "I like your portfolio",
      A: [
        "Thank you,I'm Glad you like it!!",
        "My goal is to make professional Web Apps,and a good user experience",
      ],
    },
    {
      Q: "I don't like your portfolio",
      A: [
        "Thank you for your feedback",
        "I'll do my best to improve and make better websites",
      ],
    },
  ];

  const [content, setContent] = useState([]);
  const [questionsLeft, setQuestionsLeft] = useState(QuestionsAnswers);

  const handleQuestionClick = (qst) => {
    setContent((prev) => {
      return [
        ...prev,
        { user: true, text: qst.Q },
        ...qst.A.map((ans) => {
          return { user: false, text: ans };
        }),
      ];
    });
    setQuestionsLeft((prev) => [
      ...prev.filter((selected) => {
        return selected.Q !== qst.Q;
      }),
    ]);
  };

  return (
    <div className=" flex-grow min-h-[400px] max-h-[500px] overflow-auto font-medium bg-light dark:bg-dark flex flex-col border-solid border-2 border-dark-text dark:border-light">
      <div className=" flex-grow p-4">
        <div className=" flex items-center justify-start p-1">
          <span className="bg-light-darker dark:bg-dark-lighter p-1 rounded-sm">
            Let us have a lil conversation!
          </span>
        </div>
        {content.map((msg, idx) => {
          return (
            <motion.div
              initial={{x:msg.user?200:-200,opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{type:"spring",stiffness:150,damping:15}}
              key={idx}
              className={`${
                msg.user ? " justify-end" : "justify-start"
              } flex items-center  p-1`}
            >
              <span
                className={`${
                  msg.user
                    ? " bg-secondary-blue text-light"
                    : "bg-light-darker dark:bg-dark-lighter"
                } p-1 max-w-xs rounded-sm`}
              >
                {msg.text}
              </span>
            </motion.div>
          );
        })}
      </div>
      <div className=" p-1 border-t-2 border-solid border-t-dark-text dark:border-t-light">
        <ul className=" flex p-2 gap-4 items-center overflow-auto">
          {questionsLeft.map((qst, idx) => {
            return (
              <li
                onClick={() => handleQuestionClick(qst)}
                key={idx}
                className=" whitespace-nowrap cursor-pointer hover:scale-105 transition-all duration-150 bg-light-darker dark:bg-dark-lighter p-1 rounded-sm"
              >
                {qst.Q}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const ChatComponent = () => {
  return (
    <div className=" max-w-lg mx-auto md:max-w-4xl md:h-[450px] flex flex-col md:flex-row gap-2 ">
      <div className=" min-w-[250px] bg-light dark:bg-dark p-2 border-solid border-2 border-dark-text dark:border-light">
        <span className=" font-semibold">.Contacts()</span>
        <ContactCard img={Me} name={"Aghiles Tamendjari"} />
      </div>
      <ChatBody />
    </div>
  );
};

const SectionFive = () => {
  return (
    <div
      id="chat"
      className=" p-4 relative min-h-[calc(100vh-3rem)] bg-light-darker dark:bg-dark-lighter text-dark-text dark:text-light "
    >
      <p className=" font-bold text-xl p-2 text-dark-text dark:text-light">
        .<span className=" text-primary-pink">Chat</span>()
      </p>
      <ChatComponent />
    </div>
  );
};

export default SectionFive;