/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  theme:{
    fontFamily:{
      'lyra':['"Microsoft Yahei"','"Hiragino Sans GB"','Helvetica','"Helvetica Neue"','"微软雅黑"','Tahoma','Arial','sans-serif'],
      'serif':['ui-serif', 'Georgia', 'Cambria','"Microsoft Yahei"', '"Times New Roman"', 'Times', 'serif']
    },
    backgroundImage:{
      'radial':["radial-gradient(#e9e9e9 1px , #fff 1px)"],
      'tran-gray-tran':["linear-gradient(to right, transparent,rgb(255 255 255 / 0.5), transparent)"],
    },
    backgroundSize:{
      'radial':["calc(1px/0.25) calc(1px*4)"]
    },
    extend:{
      colors: {
        vercel: {
          pink: '#FF0080',
          blue: '#0070F3',
          cyan: '#50E3C2',
          orange: '#F5A623',
          violet: '#7928CA',
        },
      },
      animation:{
        sildelefttoright:'sildelefttoright .3s ease-out',
        silderighttoleft:'silderighttoleft .3s ease-out'
      },
      keyframes:({theme})=>({
        rerender: {
          '0%': {
            'border-color': theme('colors.vercel.pink'),
          },
          '40%': {
            'border-color': theme('colors.vercel.pink'),
          },
        },
        highlight: {
          '0%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
          '40%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)',
          },
        },
        fadeToTransparent: {
          '0%': {
            opacity: 1,
          },
          '40%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
        silderighttoleft:{
          '0%':{ transform:'translateX(100%)',opacity:'0'},
          '100%':{transform:'translateX(0%)',opacity:'1'}
        },
        sildelefttoright:{
          '0%':{ transform:'translateX(-100%)',opacity:'0'},
          '100%':{transform:'translateX(0%)',opacity:'1'}
        }
      })
    }
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/typography'),require('tailwind-scrollbar')({ nocompatible: true }),],
}
