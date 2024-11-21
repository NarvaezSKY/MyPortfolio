import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,ts,jsx,tsx}",
];

export const theme = {
  extend: {
    animation: {
      float: "float 2s ease-in-out infinite",
    },
    keyframes: {
      float: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-10px)" },
      },
    },
    colors: {
      highlight: "#653aef",
      secondary: "#790787",
      tertiary: "#2e1230",
      accent: "#870768",
      primary: "#febfff",

      gray: {
        50: "#e5e7eb",
        100: "#c2c7cd",
        200: "#9fa7b3",
        300: "#7c8593",
        400: "#59617c",
        500: "#434c63",
        600: "#2f3a4d",
        700: "#1e2736",
        800: "#10151f",
        900: "#080c12",
      },
    },
    delay: {
      75: "0.75s",
      150: "1.5s",
      200: "2s",
      300: "3s",
      500: "5s",
    },
  },
};

export const darkMode = "class";

export const plugins = [nextui()];
