/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "app": "url('/img/2.jpg')"
      }
    },
  },
  plugins: [],
}

