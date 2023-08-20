/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["main", "bg-light", "text-white"],
  theme: {
    extend: {
      colors: {
        main: "#2B3B30",
        black: "#1E1E1E",
        primary: "#9CBAA6",
        grey: "#536258",
        secondary: "#EA9268",
        light: "#F1FFF6",
        white: "#FFFFFF",
      },
      backgroundColor: {
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
