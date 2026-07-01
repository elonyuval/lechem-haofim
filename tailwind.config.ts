import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Assistant", "system-ui", "sans-serif"],
      },
      colors: {
        // warm bakery palette
        crust: {
          50: "#fdf6ee",
          100: "#f8e8d3",
          200: "#efceA0",
          300: "#e2ac68",
          400: "#d38a3d",
          500: "#b96b25",
          600: "#96521d",
          700: "#78401c",
          800: "#62351c",
          900: "#512d1b",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
