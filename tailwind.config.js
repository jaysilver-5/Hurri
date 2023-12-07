/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#0E0E0F',
      secondary: '#32323280',
      lightgray: '#444',
      white: '#fff',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1000px',
      xl: '1280px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

