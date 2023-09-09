import React, { useEffect } from 'react'
import { createContext,useState } from 'react'

export const DarkTheme = createContext(null);

const ThemeProvider = ({children}) => {
  const [dark,setDark] = useState(localStorage.getItem('theme') === "dark");
  
  useEffect(()=>{
    if(dark){
      window.localStorage.setItem("theme","dark");
      document.documentElement.classList.add("dark");
    }else{
      window.localStorage.setItem("theme","light");
      document.documentElement.classList.remove("dark");
    }
  },[dark])
  
  return (
    <DarkTheme.Provider value={{dark,setDark}}>
      {children}
    </DarkTheme.Provider>
  )
}

export default ThemeProvider