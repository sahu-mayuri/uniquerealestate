import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-orange':'#FF5A3C',
      },
      fontFamily: {
        headfont: ['__Nunito_Sans_601d73', '__Nunito_Sans_Fallback_601d73'],
        bodyfont:['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
