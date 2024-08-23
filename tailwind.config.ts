import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        primary: ["var(--font-primary)", "sans-serif"],
        secondary: ["var(--font-secondary)", "sans-serif"],
      },
    },
    colors: {
      primary: "#1761B0",
      primaryDark: "#0D3580",
      lightBackground: "#282828",
      darkBackground: "#181818",
      secondary: "#D2292D",
      secondaryDark: "#AF0C15",
      textPrimary: "#FFFFFF",
    },
  },
  plugins: [],
};
export default config;
