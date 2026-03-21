import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#050505",
          pure: "#000000",
          soft: "#0C0C0C",
        },
        quartz: {
          DEFAULT: "#D4C5B0",
          light: "#E8DDD0",
          dark: "#B8A894",
          muted: "#9A8E80",
        },
        cream: "#F0EBE3",
        muted: "#777270",
        surface: {
          DEFAULT: "#111111",
          raised: "#1A1A1A",
          overlay: "#222222",
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', "sans-serif"],
        body: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      backgroundImage: {
        "quartz-gradient":
          "linear-gradient(135deg, #D4C5B0, #E8DDD0, #B8A894)",
        "dark-gradient":
          "linear-gradient(180deg, #050505 0%, #111111 100%)",
        "surface-gradient":
          "linear-gradient(180deg, #111111 0%, #0C0C0C 100%)",
      },
      boxShadow: {
        quartz: "0 0 20px rgba(212, 197, 176, 0.15)",
        "quartz-lg": "0 0 40px rgba(212, 197, 176, 0.1)",
        "inner-glow": "inset 0 1px 0 0 rgba(212, 197, 176, 0.05)",
      },
      animation: {
        "pole-stripe": "poleStripe 3s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        poleStripe: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 60px" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
