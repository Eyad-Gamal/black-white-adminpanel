/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#080808',
        accent: '#c8a96e',
        glass: 'rgba(22, 22, 22, 0.82)',
        border: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        modal: '16px',
      },
      backdropBlur: {
        glass: '12px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.rtl': {
          direction: 'rtl',
        },
        '.ltr': {
          direction: 'ltr',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}