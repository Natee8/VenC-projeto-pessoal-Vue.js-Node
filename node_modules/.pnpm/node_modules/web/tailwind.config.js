/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F07142',
        secondary: '#12354D',

        texts: {
          primary: '#614B44',
          'primary-dark': '#4A342D',
          default: '#897872',
        },
      },
    },
  },
  plugins: [],
}
