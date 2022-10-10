/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colours: {
        'vildred': "#FF1E1C",
        'vildorange': '#FDB813'
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
