/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {},
    colors: {
      Primary: "#FFFFFF",
      Secondary: "#EFF5F5",
      Accent: "#497174",
      Font: "#030304",
      FontLight: "#88A2A4",
      Errorr: "#EB6440",
      Hover: "#D6E4E5",
    },
    extend: {
      colors: {
        borderAccent: "#D6E4E5",
      },
      height: {
        "1px": "1px",
        "599px": "599px",
        "1440px": "1440px",
        "583px": "583px",
        "771px": "771px",
        "1140px": "1140px",
      },
    },
  },
  plugins: [],
};
