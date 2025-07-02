/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      keyframes: {
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(13, 148, 136, 0.5)' },
          '70%': { boxShadow: '0 0 0 15px rgba(13, 148, 136, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(13, 148, 136, 0)' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s infinite',
      },
    },
  },
  plugins: [],
}

