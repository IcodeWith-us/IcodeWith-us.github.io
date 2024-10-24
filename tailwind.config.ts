import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        'mobile': '320px',
        'mobileM': '375px',
        'mobileL': '425px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FF664F",
        secondary: "#04AA69",
        lightGrey: "#C4C4C4",
        darkGrey: "#99A4B8",
        buttonGrey: "#EDEFF2",
        hoverGrey : "#757575",
        whiteColor : "#FFFFFF",
        newGrey :"#99A4B8",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
