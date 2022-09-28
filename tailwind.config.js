module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      scheherazade: 'Scheherazade New',
      inter: 'Inter',
    },
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#21293E',
        third: '#c1e522',
        fourth: '#1d2337',
        'dark-primary': '#1f2937',
        'dark-secondary': '#eaeae7',
      },
    },
  },
  plugins: [],
};
