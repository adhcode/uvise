/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
     sm: ['10px', '4px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
  },
     colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#FAFAFA',
      'black': '#000',
      'blue': '#0443E2',
      'grey': '#666666',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',

      'nav1' : '#C0D2FB',
      'nav2' : '#9AB6F7',
      "nav3" : '#8EA0C9'

     },
    extend: {
     
    },
    screens:{
      //Desktop First
      xl:{max:"1440px"},
       lg:{max:"976px"},
        md:{max:"768px"},
         sm:{max:"480px"},
    }
  },
  plugins: [],
}
