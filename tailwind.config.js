/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'budget-green': '#4ade80',
        'budget-red': '#ef4444',
        'budget-blue': '#3b82f6',
        'budget-gold': '#fbbf24',
      }
    },
  },
  plugins: [],
}