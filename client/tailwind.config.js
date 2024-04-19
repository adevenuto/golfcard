/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      // colors: {
      //   'deepgreenbg': '#030d07'
      // },
      extend: {
        fontFamily: { 
          "nunito": ['Nunito', 'sans-serif'] 
        } 
      },
    },
    plugins: [],
  }