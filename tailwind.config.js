/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },

    colors: {
      "dark-gray": "#1F1F1F",
      primary: "#C92071",
      "light-gray-2": "#CCCCCC",
      "light-gray": "#8F8F8F",
      warning: "#F6AA1C",
      "dark-gray-2": "#474747",
      "light-gray-3": "#F5F5F5",
    },
    extend: {},
  },
  plugins: [],
};
