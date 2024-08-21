import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg_md: "1380px",
        lg: "1536px",
        xl: "1600px",
        "2xl": "1700px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
export default config;
