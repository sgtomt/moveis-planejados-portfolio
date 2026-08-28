/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marcenaria: {
          fundo: '#0a0a0a',
          card: '#141414',
          borda: '#222222',
        },
        dourado: {
          principal: '#cca45c',
          claro: '#e5c07b',
        }
      }
    },
  },
  plugins: [],
}