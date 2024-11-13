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
        background: "#F3F0F0",
        foreground: "#737373",
        primary: "#4A27B492",
        secondary: "#B0B0B0",
        icon: "#8B8B8B",
        line: "#E9E9E9",
        tbhead: "#FAFAFA",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
