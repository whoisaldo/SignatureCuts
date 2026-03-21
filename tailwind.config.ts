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
          DEFAULT: "#0A0A0A",
          pure: "#000000",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#D4BA6A",
          dark: "#B8943A",
        },
        cream: "#F5F5F5",
        muted: "#888888",
      },
      fontFamily: {
        display: ['"Bebas Neue"', "sans-serif"],
        body: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A84C, #D4BA6A, #B8943A)",
        "dark-gradient": "linear-gradient(180deg, #0A0A0A 0%, #111111 100%)",
      },
      boxShadow: {
        gold: "0 0 20px rgba(201, 168, 76, 0.3)",
        "gold-lg": "0 0 40px rgba(201, 168, 76, 0.2)",
      },
      animation: {
        "pole-stripe": "poleStripe 3s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
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
      },
    },
  },
  plugins: [],
};
export default config;
