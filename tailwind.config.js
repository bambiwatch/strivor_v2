/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#2563eb", // blue-600
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },
      keyframes: {
        "bounce-subtle": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(6px)" },
        },
        "arrow-bounce": {
          "0%, 100%": { transform: "translateX(0) scale(1)" },
          "25%": { transform: "translateX(2px) scale(1.1)" },
          "50%": { transform: "translateX(6px) scale(1)" },
          "75%": { transform: "translateX(3px) scale(1.05)" },
        },
      },
      animation: {
        "bounce-subtle": "bounce-subtle 0.6s ease-in-out infinite",
        "arrow-bounce": "arrow-bounce 0.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
