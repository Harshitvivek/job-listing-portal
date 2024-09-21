/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        backgroundBlue: '#000235', // Add your custom color here
        Authbutton: '#6858d4',
      },
    },
  },
  plugins: [],
}