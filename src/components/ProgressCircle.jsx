import React,{useContext} from "react";
import { DarkTheme } from "../context/ThemeProvider";

const ProgressCircle = ({progress,styles}) => {
  const {dark} = useContext(DarkTheme)
  const circleProgress = (Math.PI*2*70)*progress
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" className={styles}>
      <g transform="rotate(-90 100 100)">
        <circle
          r="70"
          cx="100"
          cy="100"
          fill="transparent"
          stroke={dark?"#64748b":"#EEEEEE"}
          strokeWidth="1rem"
          strokeDasharray="439.8"
          strokeDashoffset="0"
        ></circle>
        <circle
          r="70"
          cx="100"
          cy="100"
          fill="transparent"
          stroke={dark?"#ffffff":"#5B5B5B"}
          strokeWidth="1rem"
          strokeDasharray="439.8"
          strokeDashoffset={Math.PI*2*70-circleProgress}
        ></circle>
      </g>
      <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" style={{font:"bold 80px sans-serif",fill:dark?"#ffffff":"#5B5B5B"}}>
        {Math.ceil(progress*6)}
      </text>
    </svg>
  );
};

export default ProgressCircle;
