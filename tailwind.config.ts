import type { Config } from "tailwindcss";

const config: Config = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
      },
      boxShadow: {
        Shadow1: "2.5px -1.8px 0 1.5px #18181b",
        Shadow2: "-2.5px -1.8px 0 1.5px #18181b",
      },
      spacing: {
        "50": "50%",
      },
      inset: {
        "1/2": "50%",
      },
      translate: {
        "-1/2": "-50%",
      },
      colors:{
        'zinc-52':'rgb(252 252 252)',
        'g1':'rgb(42 42 43)'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
