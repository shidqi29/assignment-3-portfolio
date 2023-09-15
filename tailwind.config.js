/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#738bd9",
        secondary: "#30280d",
        accent: "#3f5fca",
      }
    },
  },
  plugins: [],
};
