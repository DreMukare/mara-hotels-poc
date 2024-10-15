/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brandSerif: ["Roboto Slab"],
      },
      colors: {
        brandGreen: {
          50: "#e9f7ec",
          100: "#cfe1d3",
          200: "#b3cbb8",
          300: "#96b69e",
          400: "#79a183",
          500: "#5f8769",
          600: "#496951",
          700: "#334b39",
          800: "#1c2e21",
          900: "#001107",
        },
        gold: {
          50: "#feffe0",
          100: "#fbffb3",
          200: "#f9ff83",
          300: "#f6ff53",
          400: "#f5ff2a",
          500: "#dbe61b",
          600: "#abb311",
          700: "#798007",
          800: "#494d00",
          900: "#181a00",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
