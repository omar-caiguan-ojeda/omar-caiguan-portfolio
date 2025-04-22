/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",    // Azul profesional
        accent: "#3b82f6",     // Azul más claro para acentos
        secondary: "#64748b",  // Gris azulado para texto secundario
        darkBg: "#0f172a",    // Azul muy oscuro para fondo
        textLight: "#f1f5f9"   // Gris muy claro para texto principal
      }
    },
  },
  plugins: [],
}