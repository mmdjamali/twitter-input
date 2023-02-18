/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,tsx,ts,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      keyframes : {
        "slide-up" : {
          "0%" : {transform : "translateY(10px)",opacity : "0"},
          "100%" : {transform : "translateY(0px)",opacity : "1"},
        },
        "open" : {
          "0%" : {maxHeight : "0px"},
          "100%" : {maxHeight : "100vh"}
        }
      },
      animation:{
        "slide-up" : "slide-up 350ms linear forwards",
        "open" : "open 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards"
      }
    },
  },
  plugins: [],
}
