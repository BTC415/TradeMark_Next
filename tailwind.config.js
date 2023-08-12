/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif'],
      'GoBold': ['GothamSSm-Bold'],
      'GoLight': ['GothamSSm-Light'],
      'GoBook': ['GothamSSm-Book'],
      'OpenSans': ['Open Sans'],
      'mrs': ['mrs-eaves-xl-serif-narrow'],
      'superior': ['Superior Title Black Regular'],
      'monthstage': ['monthstage', 'Open Sans'],
      'ADM': ['ADM']
    },
  },
  plugins: [],
}
