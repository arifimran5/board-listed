/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    transparent: 'transparent',
    current: 'currentColor',
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {},
    },
  },
  plugins: [require('tailwindcss-animate')],
}
