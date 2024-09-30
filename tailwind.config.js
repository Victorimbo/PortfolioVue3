/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js,css}"],
  theme: {
    extend: {
      keyframes: {
        textAppear: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        IconAppear: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glow: {
          '0%': { textShadow: '0 0 20px #2d9da9' },
          '100%': { textShadow: '0 0 30px #34b3c1, 0 0 10px #4dbbc7' },
        },
      },
      animation: {
        textAppear: 'textAppear 1s ease-in-out 1',
        IconAppear: 'IconAppear 1s ease-in-out 1',
        glow: 'glow 1s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
