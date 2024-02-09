/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      protest: ["Protest Strike", "sans-serif"],
    },
    extend: {
      invert: {
        25: ".25",
        50: ".5",
        75: ".75",
      },
    },
  },
  plugins: [],
};
