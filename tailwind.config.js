/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7bba3a",
        secondary: "#0052c5",
        tertiary: "#1a4a5f"
      }
    },
  },
  plugins: [],
}