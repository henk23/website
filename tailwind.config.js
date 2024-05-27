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
        'heiko-blue': {
          '50': '#f4f7fb',
          '100': '#e8eff6',
          '200': '#cbdeec',
          '300': '#9dc2dc',
          '400': '#69a1c7',
          '500': '#4685b1',
          '600': '#346a95',
          '700': '#2b5579',
          '800': '#274965',
          '900': '#253e55',
          '950': '#1a2b3c',
        },
        'heiko-orange': {
          '50': '#fffcea',
          '100': '#fff5c5',
          '200': '#ffec85',
          '300': '#ffdb46',
          '400': '#ffc81b',
          '500': '#ffa90a',
          '600': '#e27d00',
          '700': '#bb5602',
          '800': '#984208',
          '900': '#7c360b',
          '950': '#481a00',
        },
        'heiko-green': {
          '50': '#f6fde8',
          '100': '#ebf9ce',
          '200': '#d7f3a3',
          '300': '#bbe96d',
          '400': '#98d831',
          '500': '#81c121',
          '600': '#629a16',
          '700': '#4c7516',
          '800': '#3e5d17',
          '900': '#364f18',
          '950': '#1a2b08',
        },
        'heiko-pink': {
          '50': '#fcf3f8',
          '100': '#fbe8f2',
          '200': '#f8d2e7',
          '300': '#f3aed2',
          '400': '#eb7bb2',
          '500': '#e05494',
          '600': '#ce3473',
          '700': '#aa2256',
          '800': '#94204b',
          '900': '#7b2041',
          '950': '#4b0c23',
        },
      },
    },
  },
  plugins: [],
};

