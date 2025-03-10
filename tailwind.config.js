/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      boxShadow: {
        'color': '0 0 20px -7px rgba(255,192,203,0.5)',
        'full': '0 0 490px 7000px rgba(30,30,30,0.8)',
        '3xl': '0 0 15px -1px rgba(104,195,183,1)',
        '4xl': '0 0 20px -10px rgba(30,30,30,0.8)',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'pop': ['Poppins', 'sans-serif'],
        'play': ['Playfair Display', 'serif'],
        'dance': ['Dancing Script', 'cursive'],
      },
      colors: {
        'tertiary': 'rgb(175,192,178)',
        'primary': 'rgb(147, 169, 150)',
        'secondary': 'rgb(147, 169, 150)',
        'golden': '#ffe5af',
        'golden2': '#539091',
        'golden3': '#ffbf80',
        'color': '#000000',
        'white': '#FFFFFF',
        'silver': 'rgb(178, 178, 178)',
        'dark-silver': 'rgb(140, 140, 140)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}