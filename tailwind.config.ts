import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores que cambian entre modo día y modo noche (ver app/globals.css)
        bg: "var(--bg)",
        panel: "var(--panel)",
        panel2: "var(--panel-2)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        edge: "var(--edge)",
        // Acentos arcade (iguales en ambos modos)
        pink: "#ff4f79",
        yellow: "#ffc83d",
        mint: "#2ee6a6",
        sky: "#45c4ff",
        violet: "#8a5cff",
        orange: "#ff8a3d",
        screen: "#120c2b",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        pixel: ["var(--font-pixel)", "monospace"],
        retro: ["var(--font-retro)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
