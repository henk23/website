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
        'orange': {
          '50': '#fffbea',
          '100': '#fff4c5',
          '200': '#ffe787',
          '300': '#ffd548',
          '400': '#ffc11e',
          '500': '#fca310',
          '600': '#df7600',
          '700': '#b95104',
          '800': '#963e0a',
          '900': '#7b330c',
          '950': '#471901',
        },
      },
    },
  },
  plugins: [],
};

