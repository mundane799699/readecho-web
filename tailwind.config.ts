import type { Config } from "tailwindcss";
import { DEFAULT_CIPHERS } from "tls";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e87549",
      },
      backgroundColor: {
        primary: "#e87549",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
