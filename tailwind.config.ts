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
        'light-white':'#FFFFFF',
        'pink':'#FFEEEB',
        'color-orange':'#FF5A3C',
        'slider-background-color' : '#F8F8F9',
      },
      fontFamily: {
        headfont: ['__Nunito_Sans_601d73', '__Nunito_Sans_Fallback_601d73'],
        bodyfont:['Nunito Sans', 'sans-serif'],
        popins:['9a881e2ac07d406b-s.p.woff2'],
        popins_extrabold:['376dd8dc38524313-s.p.ttf'],
        popins_black:['bd427f25ac24d036-s.p.ttf'],

      },
      
    },
  },
  plugins: [],
};
export default config;
