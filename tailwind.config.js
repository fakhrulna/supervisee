/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.vue',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './public/**/*.{vue}',
  ],
  theme: {
    extend: {
      borderImage: {
        dissolved: 'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)) 1',
      },
    },
  },
  plugins: [],
}

