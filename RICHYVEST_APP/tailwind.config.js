/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      // Define your custom class
      animation: {
        'anim_btn': 'transform transition-transform duration-300 ease-in-out',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.anim_btn': {
          transform: 'scale(1)',
          transition: 'transform 300ms ease-in-out',
        },
        '.anim_btn:active': {
          transform: 'scale(0.90)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover', 'active']);
    },
  ],
};