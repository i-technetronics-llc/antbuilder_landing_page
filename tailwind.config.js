const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.trueGray,
      },
      gridTemplateColumns: {
        'dynamic-250': 'repeat(auto-fit, minmax(250px, 1fr))',
        'dynamic-193': 'repeat(auto-fit, minmax(193px, 1fr))',
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
