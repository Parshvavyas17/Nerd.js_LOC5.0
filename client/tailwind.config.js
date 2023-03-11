/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A3E59",
        secondary: "#79AEF5",
        bg: "#FFF9F9",
        gray: "#DDDBDB",
        lightBlue: "#D6E8FB",
        purple: "#40189D",
        lightPurple: "rgba(64, 24, 157, 0.12)"
      },
      fontFamily: {
        main: ["IBM Plex Sans", "sans-serif"],
        ourfont: ["Poppins", "serif"], 
      },
      boxShadow: {
        "main-sd": "1px 1px 7px 2px rgba(0, 0, 0, 0.25)",
        "ourshad": "1px 1px 20px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
