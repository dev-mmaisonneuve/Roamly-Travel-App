import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17201C",
        mist: "#F6F3EE",
        linen: "#EEE5D8",
        coast: "#2F6F73",
        tide: "#8EB7B2",
        clay: "#B7684D",
        sand: "#D8C3A5"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(23, 32, 28, 0.10)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
