/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'warm-beige': {
          DEFAULT: '#f5ebd8',
          darker: '#e9d7b8', 
          lighter: '#faf3e5'
        }
      }
    },
  },
  plugins: [],
} 