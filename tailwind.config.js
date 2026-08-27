/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["DM Sans", "Inter", "ui-sans-serif", "sans-serif"]
      },
      colors: {
        ink: "#12312f",
        teal: {
          50: "#effcf9",
          100: "#d7f5ef",
          200: "#afe9df",
          500: "#149184",
          600: "#0f766e",
          700: "#0b625c",
          800: "#0b4d49",
          900: "#0a3e3b"
        },
        sand: "#f6f5f0"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 118, 110, 0.10)",
        card: "0 12px 35px rgba(18, 49, 47, 0.08)"
      }
    }
  },
  plugins: []
};
