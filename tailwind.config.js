// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sauce': ['Open Sauce One', 'sans-serif'], // Add Open Sauce One here
      },
      animation: {
        'scroll-left': 'scrollLeft 30s linear infinite',
        'scroll-right': 'scrollRight 30s linear infinite',
      },
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
