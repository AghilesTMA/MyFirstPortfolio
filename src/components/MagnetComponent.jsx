import React,{useRef,useState} from "react";
import {motion,spring} from 'framer-motion'

const MagnetComponent = ({ children }) => {
  const ref = useRef(null);
  const [postition, setPosition] = useState({ x: 0, y: 0 });
  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, top, left } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };
  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className=" flex justify-center items-center p-1"
      animate={{
        x: postition.x,
        y: postition.y,
      }}
      transition={{ type: spring, stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default MagnetComponent;
