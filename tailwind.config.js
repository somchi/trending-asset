/** @type {import('tailwindcss').Config} */
/** @type {import('./src/site-settings/site-theme/appColors').AppColors} */

const Colors = require('./src/site-settings/colors.js');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { ...Colors },
    },
  },
  plugins: [],
};
