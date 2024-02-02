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
        one: '#a1e57e',
        two: '#dce4e0',
        three: '#5c7f6e',
        four: '#7c978c',
        five: '#6db75c',
        six: '#26563f',
        seven: '#3b6554',
        eight: '#397a43',
        background: '#04442c',
      }
    },
  },
  plugins: [],
};
export default config;
