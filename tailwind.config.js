/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9208DF",

          secondary: "#41e0ab",

          accent: "#5C53FE",

          neutral: "#2D1F38",

          "base-100": "#FFFFFF",

          info: "#3894B3",

          success: "#1A0939",

          warning: "#3A1B67",

           baset: "#9C0EFF",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
};
