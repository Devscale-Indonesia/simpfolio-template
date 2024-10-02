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
        blackColor: "#2F2F2F",
        darkGray: "#525252",
        mediumGray: "#747474",
        lightGray: "#BABABA",
        bodyGray: "#FCFCFC",
        greenColor: "#24D982",
      },
    },
  },
  plugins: [],
};
export default config;
