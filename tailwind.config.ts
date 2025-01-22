import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9945FF", // Solana purple
        secondary: "#14F195", // Solana green
        accent: "#00C2FF", // Bright blue for accents
        background: "#13111C", // Dark background
        "background-light": "#1C1927", // Lighter background for cards
        foreground: "#FFFFFF",
        "foreground-muted": "#9CA3AF",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(to right, #9945FF, #14F195)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(153, 69, 255, 0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
