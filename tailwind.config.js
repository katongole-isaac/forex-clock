/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        quickSand: ["Quicksand", "sans-serif"],
      },

      container: {
        screens: {
          // lg: "1200px",
        },
      },
    },
  },
  plugins: [],
};
