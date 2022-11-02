/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  theme:{
    fontFamily:{
      'lyra':['"Microsoft Yahei"','"Hiragino Sans GB"','Helvetica','"Helvetica Neue"','"微软雅黑"','Tahoma','Arial','sans-serif'],
      'serif':['ui-serif', 'Georgia', 'Cambria','"Microsoft Yahei"', '"Times New Roman"', 'Times', 'serif']
    },
    backgroundImage:{
      'radial':["radial-gradient(#e9e9e9 1px , #fff 1px)"]
    },
    backgroundSize:{
      'radial':["calc(1px/0.25) calc(1px*4)"]
    },
    extend:{
      animation:{
        sildelefttoright:'sildelefttoright .6s ease-out',
        silderighttoleft:'silderighttoleft .6s ease-out'
      },
      keyframes:{
        silderighttoleft:{
          '0%':{ transform:'translateX(100%)',opacity:'0'},
          '100%':{transform:'translateX(0%)',opacity:'1'}
        },
        sildelefttoright:{
          '0%':{ transform:'translateX(-100%)',opacity:'0'},
          '100%':{transform:'translateX(0%)',opacity:'1'}
        }
      }
    }
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/typography'),require('tailwind-scrollbar')({ nocompatible: true }),],
}
