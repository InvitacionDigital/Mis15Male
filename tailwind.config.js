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
        'tertiary': 'rgb(240,206,197)',
        'primary': 'rgb(222, 181, 169)',
        'secondary': 'rgb(214,167,153)',
        'golden': '#ffe5af',
        'golden2': '#539091',
        'golden3': '#ffbf80',
        'color': '#000000',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}