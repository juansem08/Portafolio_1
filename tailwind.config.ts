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
        // Cambian entre turno nocturno y turno de día (ver app/globals.css)
        bg: "var(--bg)",
        panel: "var(--panel)",
        panel2: "var(--panel-2)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        edge: "var(--edge)",
        phos: "var(--phos)",
        amber: "var(--amber)",
        // Fijos
        rec: "#ff3b3b",
        screen: "#050706",
        glow: "#7dff9a",
        cyan: "#5ee7ff",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        retro: ["var(--font-retro)", "monospace"],
        typewriter: ["var(--font-typewriter)", "monospace"],
        news: ["var(--font-news)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
