const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js,jsx,tsx}',
    './components/**/*.{html,js,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('current', '&.active');
  })
  ],
}