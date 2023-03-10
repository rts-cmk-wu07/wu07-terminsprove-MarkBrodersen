/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f5a88e",
        },
        fontSize: {
          large: "62px",
          mediem: "50px",
          small: "28px",
          xsmall: "22px",
        },
      },
    },
  },
  plugins: [],
};
