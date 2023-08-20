/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "app": "url('/img/slogan.jpg')"
      }
    },
  },
  plugins: [],
}

