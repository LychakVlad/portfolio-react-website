/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        headShake: {
          '0%': {
            transform: 'translateX(0)',
          },
          '6.5%': {
            transform: 'translateX(-6px) rotateY(-9deg)',
          },

          '18.5%': {
            transform: 'translateX(5px) rotateY(7deg)',
          },

          '31.5%': {
            transform: 'translateX(-3px) rotateY(-5deg)',
          },

          '43.5%': {
            transform: 'translateX(2px) rotateY(3deg)',
          },
          '50%': {
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        morph: 'morph 8s ease-in-out infinite',
        'waving-hand': 'wave 2s linear infinite',
        headShake: 'headShake 1s 1',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['hover', 'focus', 'active'],
    },
  },
  plugins: [require('tailwind-hamburgers')],
};
