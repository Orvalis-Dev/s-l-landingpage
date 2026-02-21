/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Paleta Industrial Safety - S&L
        // Paleta S&L Industrial
        brand: {
          yellow: "#FFD700", // Amarillo Seguridad (CTAs)
          black: "#0A0A0A", // Fondo Profundo
          dark: "#111827", // Fondo Secundario (Cards)
          gray: "#374151", // Bordes / Textos secundarios
          white: "#F9FAFB", // Textos principales
        },
      },
      fontFamily: {
        heading: ["Barlow", "sans-serif"],
        display: ["Inter", "sans-serif"],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
