/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        "background-soft": "#172343",
        "accent-color": "#ff9502",
      },
    },
  },
  plugins: [],
};
