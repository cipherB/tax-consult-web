/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#44b4c1",
        tertiary: "#1a4a5f"
      }
    },
  },
  plugins: [],
}