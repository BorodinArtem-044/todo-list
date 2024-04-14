/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: { max: "836px" },
    },
    extend: {
      colors: {
        "text-yellow-500": "#ffc312",
      },
    },
  },
  plugins: [],
};
