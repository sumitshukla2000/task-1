/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'main' : ['Young Serif'],
      'primary':['Roboto'],
      'avg':['Poppins']
    },
    screens:{
      'sm':'540px',
      'md':'768px',
      'lg':'1024px',
      'xs':'1280'
    },
    extend: {},
  },
  plugins: [],
}

