/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary-pink":"#FC5185",
        "secondary-blue":"#3FC1C9",
        "dark":"#252A34",
        "dark-lighter":"#404A58",
        "light":"#FFFFFF",
        "light-darker":"#EEEEEE",
        "dark-text":"#5B5B5B",
      },
      fontFamily:{
        "vt323":['VT323', "monospace"]
      },
      screens:{
        tablet:"500px",
        desktop:"1024px"
      }
    },
  },
  plugins: [],
};
