module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    extend: {
      backgroundImage:{
        'backgroundImageAboutStudio':"url('/src/pages/AboutStudio/assets/AboutStudio10.png')",
        'backgroundImageGallery':"url('/src/pages/Gallery/assets/Gallery1.jpg')",
      }
    },
  },
  plugins: [],
};
