/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      openSans: ['Open Sans', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        custom: '4px 4px 10px 0px rgba(64, 53, 53, 0.49) inset',
        preview: '0px 4px 4px 0px rgba(0, 0, 0, 0.25);',
      },
    },
  },
  plugins: [],
}
