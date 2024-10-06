// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: 'class',
//   content: [
//     './index.html',
//     './src/**/*.{js,jsx,ts,tsx}', 
//   ],
//   theme: {
    
//     extend: {},
//   },
//   plugins: [],
// }


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
        // backgroundBlue: '#000235',
        backgroundBlue:'#121212',
        nav: '#1e1e1e', // Add your custom color here
        Authbutton: '#6858d4',
      },
    },
  },
  plugins: [],
}
