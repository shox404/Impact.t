module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
<<<<<<< HEAD
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
=======
      xl: {max: '1279px'},
      // => @media (max-width: 1279px) { ... }

      lg: {max: '1023px'},
      // => @media (max-width: 1023px) { ... }

      md: {max: '767px'},
      // => @media (max-width: 767px) { ... }

      sm: {max: '639px'},
      // => @media (max-width: 639px) { ... }
>>>>>>> 18b50ff30cc6b92c9b37541b68f8fa9cd5261dc7
    },
    extend: {},
  },
  plugins: [],
};
