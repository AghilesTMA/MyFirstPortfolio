import React from "react";

const Hamburger = ({dark,style}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="30"
      fill="none"
      viewBox="0 0 40 30"
      className={style}
    >
      <path
        fill={dark?"#fff":"#000"}
        fillRule="evenodd"
        d="M33.755 2.727H0V0h33.755v2.727zM6.245 16.464l33.755-.1-.007-2.728-33.755.101.007 2.727zM33.755 30H0v-2.727h33.755V30z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Hamburger;
