/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.vue", "./components/**/*.vue"],
  theme: {
    extend: {
      colors: {
        'primary': "#303030",
        'second': '#0C70F2'
      },
      transitionProperty: {
        height: 'height'
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border|ring)-primary/,
    },
    {
      pattern: /(bg|text|border|ring)-second/,
    },
  ],
}

