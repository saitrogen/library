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
        accent: "var(--accent)",
        border: "var(--border-color)",
        heading: "var(--heading-color)",
        body: "var(--body-text-color)",
        buttonBg: "var(--button-bg)",
        buttonText: "var(--button-text)",
        buttonBorder: "var(--button-border)",
        buttonHoverBg: "var(--button-hover-bg)",
        buttonHoverBorder: "var(--button-hover-border)"
      },
    },
  },
  plugins: [],
  // darkMode: "class",
};
export default config;
