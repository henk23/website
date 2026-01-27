const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    'fade-in',
    'is-faded-out',
  ],
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
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      pink: {
        light: '#FB6274',
        dark: '#F74358',
      },
      blue: {
        light: '#5CC9FF',
        dark: '#45BCF7',
      },
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
    fontFamily: {
      'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
    },
    extend: {

    },
  },
  plugins: [],
};

