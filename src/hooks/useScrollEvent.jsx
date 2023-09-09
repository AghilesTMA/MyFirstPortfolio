import React,{useState,useEffect} from "react";

const useScrollEvent = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const progress = scrollY / (documentHeight - windowHeight);
    setScroll(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {scroll}
};

export default useScrollEvent;
