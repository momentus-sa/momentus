import { Josefin_Sans, Raleway } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#f1ebe4",
        'foreground': "#00111a",
        'main-color': "#FFF4E9",
        'primary-color': "#013c5a",
        'secondary-color': "#f4a258",
        'accent-color': "#f4a258",
        'warning-color': "#f4b031",
        'error-color': "#e15753",
        'success-color': "#00cc7b"
      },
      fontFamily: {
        raleway: ["var(--font-raleway)", "sans-serif"],
        josefinSans: ["var(--font-josefin-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
