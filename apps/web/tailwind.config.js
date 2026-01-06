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
        details: '#69CE96',
        primaryHover: '#C9552A',
        secondary: '#12354D',
        bgColor: '#FFFCFB',
        headerColor: '#FFFAF6',
        texts: {
          primary: '#614B44',
          'primary-dark': '#3B2923',
          default: '#897872',
        },
        borders: {
          borderDefault: '#F4DBD0'
        }
      },
    },
  },
  plugins: [],
}
