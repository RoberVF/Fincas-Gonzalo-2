/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-background': '#23272A',
        'light-background': '#2C2F33',
        'help-background': '#474A53',
        'purple': '#7289DA',
        'yellow1': '#F9F871'
      }
    },
  },
  plugins: [],
}