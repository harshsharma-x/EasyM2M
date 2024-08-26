/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "oval-motion": "ovalMotion 1.5s forwards  ease-in-out",
        animateNames: "fadeInNames 1s forwards ease-in-out",
        animatePosition: "fadeInPositions 1.3s forwards ease-in-out  0.0s",
      },
      keyframes: {
        ovalMotion: {
          "0%": {
            transform: "translateX(0) translateY(0)",
          },
          "50%": {
            transform: "translateX(60%) translateY(15%)",
          },
          "100%": {
            transform: "translateX(60%) translateY(15%)",
          },
        },
        fadeInNames: {
          "0%": {
            opacity: "0",
            transform: "translateX(0) translateY(0)",
          },
          "50%": {
            opacity: "1",
            transform: "translateX(-10px) translateY(-135px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(-10px) translateY(-135px)",
          },
        },

        fadeInPositions: {
          "0%": {
            opacity: "0",
            transform: "translateX(0) translateY(0)",
          },
          "50%": {
            opacity: "1",
            transform: "translateX(-10px) translateY(-135px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(-10px) translateY(-135px)",
          },
        },
      },
      
      boxShadow: {
        'outline-light': '0px 0px 10px 1px #BBE9FF', // Custom box shadow for outline
        'outline-focus': '0px 0px 10px 1px #4299e1', // Custom box shadow for focus state
      },
    },
  },
  plugins: [],
};
