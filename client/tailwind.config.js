/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef8ff',
          500: '#1683d8',
          600: '#0f6fb9',
          700: '#105a93',
        },
      },
    },
  },
  plugins: [],
};
