/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'bg_cyan_light':'#E2F2F2',
      'btn_blue': '#0197f6',
      },
      buttonStyles: {
        'btn-primary': 'bg-cyan-900 text-white font-medium py-1 px-6 mt-4 rounded hover:bg-cyan-400 transition-shadow shadow-md hover:shadow-lg',
      },
    },
  },
  plugins: [],
};