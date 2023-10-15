/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.vue', './components/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        Anton: ['Anton, sans-serif'],
        Inter: ['Inter, sans-serif'],
      },
      colors: {
        primary: '#303030',
        second: '#0C70F2',
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
  safelist: [
    {
      pattern: /(bg|text|border|ring)-primary/,
    },
  ],
};
