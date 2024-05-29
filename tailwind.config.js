const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        pink: '#FB6274',
        lightblue: '#5CC9FF',
        'grey': {
          '50': '#f4f6f7',
          '100': '#e3e8ea',
          '200': '#cad4d7',
          '300': '#a5b5bb',
          '400': '#788e98',
          '500': '#5d737d',
          '600': '#50616a',
          '700': '#455259',
          '800': '#3e474c',
          '900': '#373d42',
          '950': '#282e33',
        },
      },
    },
  },
  plugins: [],
};

