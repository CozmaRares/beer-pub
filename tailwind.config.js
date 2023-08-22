/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainAccent: "#FFC123",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        shadows: ["Shadows Into Light Two", "cursive"],
        teko: ["Teko", "sans-serif"],
      },
      width: {
        page: "1200px",
      },
    },
  },
  plugins: [],
};
