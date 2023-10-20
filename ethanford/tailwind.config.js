/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SourceCodePro: ['"Source+Code+Pro"', "sans"],
        Roboto: ['"Roboto"', "sans"],
      },
      keyframes: {
        "left-slide": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "left-slide": "left-slide 1s ease-out",
      },
    },
  },
  plugins: [],
};
