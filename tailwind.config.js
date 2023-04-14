/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        red: "hsl(0, 100%, 68%)",
        veryDarkBlue: "hsl(230, 29%, 20%)",
        darkGrayishBlue: "hsl(230, 11%, 40%)",
        grayishBlue: "hsl(231, 7%, 65%)",
        lightGrayishBlue: "hsl(207, 33%, 95%)",
      },
    },
  },
  plugins: [],
};
