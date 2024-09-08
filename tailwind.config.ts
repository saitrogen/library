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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        neutral1: "var(--neutral-1)",
        neutral2: "var(--neutral-2)",
        neutral3: "var(--neutral-3)",
        accent: "var(--accent)",
        
      },
    },
  },
  plugins: [],
  // darkMode: "class",
};
export default config;
