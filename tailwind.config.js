/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.js",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/nativewind/**/*.js",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        backgroundColor: "white",
        text: "#000",
        textGray: "#acadad",
        tint: "#000",

        customGreen: "#16a249",
        "green-light": "#dcfce7",
        customBlue: "#0284c7",
        "blue-light": "#dbeafe",
        customPurple: "#9333ea",
        "purple-light": "#f3e8ff",
        customOrange: "#f59f0a",
        "orange-light": "#f59f0a1d",
        customRed: "#ef4444",
        "red-light": "#ef44441d",
      },
    },
  },
  plugins: [],
};
