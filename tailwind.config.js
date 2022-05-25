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
        primary: '#f5f6f7',
        secondary: '#444444',
        'dark-primary': '#18181b',
        'dark-secondary': '#eaeae7',
      },
    },
  },
  plugins: [],
};
