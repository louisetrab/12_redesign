/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vildred: "#FF1E1C",
        vildblue: "#1956FF",
        vildpurple: "#C8B1DD",
        vildyellow: "#F8EB00",
        vildorange: "#FDB813",
        vildteal: "#4ACCD9",
        vildpink: "#F6768F",
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]

      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
