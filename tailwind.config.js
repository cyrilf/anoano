const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md"],
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
        accent: colors.pink,
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
