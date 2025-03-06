/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3d5a80",  // Color principal
        secondary: "#98c1d9",  // Color secundario
        accent: "#e0fbfc", // Color de acento
        highlight: "#ee6c4d", // Color de resaltar
        dark: "#293241", // Color oscuro
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        disabledOpacity: "0.3", // Opacidad cuando está deshabilitado
        radius: {
          small: "2px", // Bordes pequeños
          medium: "4px", // Bordes medianos
          large: "6px", // Bordes grandes
        },
        borderWidth: {
          small: "1px", // Bordes pequeños
          medium: "1px", // Bordes medianos
          large: "2px", // Bordes grandes
        },
      },
      themes: {
        light: {
          colors: {
            background: "#ffffff", // Fondo blanco
            foreground: "#333333", // Texto oscuro
            primary: "#3d5a80",  // Color principal en tema claro
            secondary: "#98c1d9",  // Color secundario en tema claro
            accent: "#e0fbfc", // Acentos en tema claro
            highlight: "#ee6c4d", // Resaltados en tema claro
            dark: "#293241", // Fondo oscuro
            link: "#ee6c4d", // Color de enlaces
          },
        },
        dark: {
          colors: {
            background: "#293241", // Fondo oscuro en tema oscuro
            foreground: "#ffffff", // Texto blanco en tema oscuro
            primary: "#3d5a80",  // Color principal en tema oscuro
            secondary: "#98c1d9",  // Color secundario en tema oscuro
            accent: "#e0fbfc", // Acentos en tema oscuro
            highlight: "#ee6c4d", // Resaltados en tema oscuro
            link: "#e0fbfc", // Color de enlaces en tema oscuro
          },
        },
      },
    }),
  ],
};
