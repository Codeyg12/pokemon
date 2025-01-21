/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'splotchy': 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 20%, transparent 60%)'
      }
    },
  },
  plugins: [],
}

