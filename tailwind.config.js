/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1c2b30",
          50: "#f4f7f7",
          400: "#5b7176",
          600: "#33474c",
        },
        cream: "#faf7f2",
        brand: {
          50: "#eff6fb",
          100: "#d9eaf5",
          200: "#b0d4ea",
          300: "#7eb8db",
          400: "#4a97c5",
          500: "#2b7bab",
          600: "#1d6390",
          700: "#195176",
          800: "#164361",
          900: "#143852",
        },
      },
      fontFamily: {
        sans: ["Lexend", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      borderRadius: {
        card: "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
}
