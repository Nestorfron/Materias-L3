/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        disabledOpacity: "0.3", // opacity-[0.3]
        radius: {
          small: "2px", // rounded-small
          medium: "4px", // rounded-medium
          large: "6px", // rounded-large
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "1px", // border-medium
          large: "2px", // border-large
        },
      },
      themes: {
        light: {
          colors: {
            background: "#ffffff",  // Fondo blanco
            foreground: "#1A4F91",  // Azul oscuro para el texto
            primary: {
              50: "#E6F4FF",
              100: "#C9E0FF",
              200: "#A1C8FF",
              300: "#79AFFF",
              400: "#4F97FF",
              500: "#1A4F91", // Azul principal vibrante
              600: "#004B8A",
              700: "#003F73",
              800: "#00305C",
              900: "#001C3F",
              DEFAULT: "#1A4F91", // Azul principal
              foreground: "#ffffff", // Texto blanco en botones primarios
            },
            secondary: {
              50: "#FFD6D6",
              100: "#FFB3B3",
              200: "#FF8080",
              300: "#FF4D4D",
              400: "#FF1A1A",
              500: "#D91A1A", // Rojo principal vibrante
              600: "#B01313",
              700: "#8F0D0D",
              800: "#6A0606",
              900: "#470000",
              DEFAULT: "#D91A1A", // Rojo principal
              foreground: "#ffffff", // Texto blanco en botones secundarios
            },
            focus: "#4F97FF", // Color para efectos de foco/resaltado
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        dark: {
          colors: {
            background: "#0A1A2A",  // Fondo oscuro azul
            foreground: "#F1F5F9",  // Fondo claro para el texto (blanco roto)
            primary: {
              50: "#0D3A5F",
              100: "#114B6B",
              200: "#15657A",
              300: "#1A6C8D",
              400: "#1E75A1",
              500: "#1A4F91", // Azul principal vibrante
              600: "#003B7D",
              700: "#003062",
              800: "#00244F",
              900: "#001437",
              DEFAULT: "#1A4F91", // Azul principal
              foreground: "#0A1A2A", // Fondo oscuro para texto en botones primarios
            },
            secondary: {
              50: "#9A2A2A",
              100: "#B83A3A",
              200: "#D94C4C",
              300: "#F05555",
              400: "#FF6363",
              500: "#D91A1A", // Rojo principal vibrante
              600: "#B01313",
              700: "#8F0D0D",
              800: "#6A0606",
              900: "#470000",
              DEFAULT: "#D91A1A", // Rojo principal
              foreground: "#0A1A2A", // Texto oscuro para botones secundarios
            },
            focus: "#FF1A1A", // Color para efectos de foco/resaltado en rojo
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
