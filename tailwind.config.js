import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",   // 12px
          small: "0.875rem", // 14px
          medium: "0.9375rem", // 15px
          large: "1.125rem", // 18px
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "6px", 
          medium: "8px", 
          large: "12px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            "background": {
              "DEFAULT": "#FFFFFF"
            },
            "content1": {
              "DEFAULT": "#FFFFFF",
              "foreground": "#0A3A4A"
            },
            "content2": {
              "DEFAULT": "#F5F9FC",
              "foreground": "#0A3A4A"
            },
            "content3": {
              "DEFAULT": "#E6EEF5",
              "foreground": "#0A3A4A"
            },
            "content4": {
              "DEFAULT": "#D6E4EF",
              "foreground": "#0A3A4A"
            },
            "divider": {
              "DEFAULT": "rgba(10, 58, 74, 0.15)"
            },
            "focus": {
              "DEFAULT": "#0A3A4A"
            },
            "foreground": {
              "50": "#f0f5f7",
              "100": "#e1ebef",
              "200": "#c3d7df",
              "300": "#a5c3cf",
              "400": "#87afbf",
              "500": "#699baf",
              "600": "#4b87a0",
              "700": "#2d7390",
              "800": "#0F5F80",
              "900": "#0A3A4A",
              "DEFAULT": "#0A3A4A"
            },
            "overlay": {
              "DEFAULT": "#000000"
            },
            "danger": {
              "50": "#fee7ef",
              "100": "#fdd0df",
              "200": "#faa0bf",
              "300": "#f871a0",
              "400": "#f54180",
              "500": "#f31260",
              "600": "#c20e4d",
              "700": "#920b3a",
              "800": "#610726",
              "900": "#310413",
              "DEFAULT": "#f31260",
              "foreground": "#ffffff"
            },
            "default": {
              "50": "#f0f5f7",
              "100": "#e1ebef",
              "200": "#c3d7df",
              "300": "#a5c3cf",
              "400": "#87afbf",
              "500": "#699baf",
              "600": "#4b87a0",
              "700": "#2d7390",
              "800": "#0F5F80",
              "900": "#0A3A4A",
              "DEFAULT": "#a5c3cf",
              "foreground": "#0A3A4A"
            },
            "primary": {
              "50": "#E6EEF5",
              "100": "#D6E4EF",
              "200": "#ADC9DF",
              "300": "#84AECF",
              "400": "#5B93BF",
              "500": "#3278AF",
              "600": "#28608C",
              "700": "#1E4869",
              "800": "#143046",
              "900": "#0A1823",
              "DEFAULT": "#0A3A4A",
              "foreground": "#fff"
            },
            "secondary": {
              "50": "#f2eafa",
              "100": "#e4d4f4",
              "200": "#c9a9e9",
              "300": "#ae7ede",
              "400": "#9353d3",
              "500": "#7828c8",
              "600": "#6020a0",
              "700": "#481878",
              "800": "#301050",
              "900": "#180828",
              "DEFAULT": "#7828c8",
              "foreground": "#fff"
            },
            "success": {
              "50": "#e8faf0",
              "100": "#d1f4e0",
              "200": "#a2e9c1",
              "300": "#74dfa2",
              "400": "#45d483",
              "500": "#17c964",
              "600": "#12a150",
              "700": "#0e793c",
              "800": "#095028",
              "900": "#052814",
              "DEFAULT": "#17c964",
              "foreground": "#000"
            },
            "warning": {
              "50": "#fefce8",
              "100": "#fdedd3",
              "200": "#fbdba7",
              "300": "#f9c97c",
              "400": "#f7b750",
              "500": "#f5a524",
              "600": "#c4841d",
              "700": "#936316",
              "800": "#62420e",
              "900": "#312107",
              "DEFAULT": "#f5a524",
              "foreground": "#000"
            }
          }
        },
        dark: {
          colors: {
            "background": {
              "DEFAULT": "#051820"
            },
            "content1": {
              "DEFAULT": "#0A2530",
              "foreground": "#E6EEF5"
            },
            "content2": {
              "DEFAULT": "#0F3240",
              "foreground": "#E6EEF5"
            },
            "content3": {
              "DEFAULT": "#143F50",
              "foreground": "#E6EEF5"
            },
            "content4": {
              "DEFAULT": "#194C60",
              "foreground": "#E6EEF5"
            },
            "divider": {
              "DEFAULT": "rgba(230, 238, 245, 0.15)"
            },
            "focus": {
              "DEFAULT": "#84AECF"
            },
            "foreground": {
              "50": "#0A3A4A",
              "100": "#0F5F80",
              "200": "#2d7390",
              "300": "#4b87a0",
              "400": "#699baf",
              "500": "#87afbf",
              "600": "#a5c3cf",
              "700": "#c3d7df",
              "800": "#e1ebef",
              "900": "#f0f5f7",
              "DEFAULT": "#E6EEF5"
            },
            "overlay": {
              "DEFAULT": "#000000"
            },
            "danger": {
              "50": "#310413",
              "100": "#610726",
              "200": "#920b3a",
              "300": "#c20e4d",
              "400": "#f31260",
              "500": "#f54180",
              "600": "#f871a0",
              "700": "#faa0bf",
              "800": "#fdd0df",
              "900": "#fee7ef",
              "DEFAULT": "#f31260",
              "foreground": "#ffffff"
            },
            "default": {
              "50": "#0A3A4A",
              "100": "#0F5F80",
              "200": "#2d7390",
              "300": "#4b87a0",
              "400": "#699baf",
              "500": "#87afbf",
              "600": "#a5c3cf",
              "700": "#c3d7df",
              "800": "#e1ebef",
              "900": "#f0f5f7",
              "DEFAULT": "#4b87a0",
              "foreground": "#E6EEF5"
            },
            "primary": {
              "50": "#0A1823",
              "100": "#143046",
              "200": "#1E4869",
              "300": "#28608C",
              "400": "#3278AF",
              "500": "#5B93BF",
              "600": "#84AECF",
              "700": "#ADC9DF",
              "800": "#D6E4EF",
              "900": "#E6EEF5",
              "DEFAULT": "#84AECF",
              "foreground": "#051820"
            },
            "secondary": {
              "50": "#180828",
              "100": "#301050",
              "200": "#481878",
              "300": "#6020a0",
              "400": "#7828c8",
              "500": "#9353d3",
              "600": "#ae7ede",
              "700": "#c9a9e9",
              "800": "#e4d4f4",
              "900": "#f2eafa",
              "DEFAULT": "#9353d3",
              "foreground": "#fff"
            },
            "success": {
              "50": "#052814",
              "100": "#095028",
              "200": "#0e793c",
              "300": "#12a150",
              "400": "#17c964",
              "500": "#45d483",
              "600": "#74dfa2",
              "700": "#a2e9c1",
              "800": "#d1f4e0",
              "900": "#e8faf0",
              "DEFAULT": "#17c964",
              "foreground": "#000"
            },
            "warning": {
              "50": "#312107",
              "100": "#62420e",
              "200": "#936316",
              "300": "#c4841d",
              "400": "#f5a524",
              "500": "#f7b750",
              "600": "#f9c97c",
              "700": "#fbdba7",
              "800": "#fdedd3",
              "900": "#fefce8",
              "DEFAULT": "#f5a524",
              "foreground": "#000"
            }
          }
        }
      }
    })
  ]
}
