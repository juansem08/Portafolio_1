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
        cotton: {
          DEFAULT: "#EDEBDD",
          light: "#FAF9F5",
          card: "#F4F2E8",
          dark: "#DDD9C5",
        },
        cherry: {
          DEFAULT: "#810100",
          hover: "#9E0201",
          light: "#B80403",
          dark: "#630000",
        },
        maroon: {
          DEFAULT: "#630000",
          hover: "#780000",
          dark: "#450000",
        },
        noir: {
          DEFAULT: "#1B1717",
          card: "#262121",
          light: "#3A3333",
          muted: "#665C5C",
          border: "#1B1717",
        },
        primary: {
          DEFAULT: "#810100", // Cherry Red
          hover: "#9E0201",
          dark: "#630000",    // Maroon
          light: "#EDEBDD",   // Cotton
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "'Courier Prime'", "monospace"],
        marker: ["'Permanent Marker'", "cursive"],
        hand: ["'Caveat'", "cursive"],
        display: ["'Space Grotesk'", "sans-serif"],
        typewriter: ["'Courier Prime'", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
