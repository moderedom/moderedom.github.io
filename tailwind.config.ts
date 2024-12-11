import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tg-wallpaper': "url('/assets/images/wallpaper.jpg')",
      },
      colors: {
        "mdm-purple": "#5267DF",
        "mdm-indigo": "#ffe1fe",
        "mdm-red": "#FA5959",
        "mdm-blue": "#242A45",
        "mdm-grey": "#9194A2",
        "mdm-white": "#f7f7f7",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
} satisfies Config;