/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F07142",
        stars: "#ffb14c",
        details: "#69CE96",
        primaryHover: "#C9552A",
        secondary: "#12354D",
        secondaryHover: "#0C2B4A",
        bgColor: "#FFFCFB",
        headerColor: "#FFFAF6",
        default: "#eeebea",
        texts: {
          primary: "#614B44",
          "primary-dark": "#3B2923",
          default: "#897872",
        },
        borders: {
          borderDefault: "#F4DBD0",
        },
        extend: {
          backgroundImage: {
            "gradient-about":
              "linear-gradient(180deg, #69CE96 63%, #163A5D 63%)",
            "gradient-profile":
              "linear-gradient(180deg, #163A5D 63%, #69CE96 63%)",
          },
          errors: {
            success: "#69CE96",
            error: "#F8212C",
          },
        },
      },
    },
  },
  plugins: [],
};
