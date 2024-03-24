/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        harpie: {
          DEFAULT: "#FF6B00",
          50: "#FFF0E5",
          100: "#FFE1CC",
          200: "#FFC499",
          300: "#FFA666",
          400: "#FF8833",
          500: "#FF6B00",
          600: "#CC5500",
          700: "#994000",
          800: "#662B00",
          900: "#331500",
          950: "#190B00"
        },
        harple: {
          50: "#FDEBFF",
          100: "#FCD6FF",
          200: "#F8ADFF",
          300: "#F585FF",
          400: "#F15CFF",
          500: "#EF30FF",
          600: "#E000F5",
          700: "#6B00B8",
          800: "#47007A",
          900: "#24003D",
          950: "#12001F"
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}

