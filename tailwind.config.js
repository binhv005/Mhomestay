/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#121e16', 900: '#1f3125', 800: '#2f4a36', 700: '#3b5a43', 600: '#486B50',
          500: '#5c8264', 400: '#7fa186', 300: '#A9BCA2', 200: '#cfdbc9', 100: '#e6ede2', 50: '#f2f6ef',
        },
        cream: {
          50: '#fbfaf6', 100: '#F8F6F0', 200: '#efebe0', 300: '#e3dccb', 400: '#cfc4ac',
        },
        accent: { amber: '#9A7454', gold: '#D6B477', sun: '#D6B477' },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Montserrat"', '"Plus Jakarta Sans"', 'sans-serif'],
        cursive: ['"Caveat"', '"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(17, 45, 32, 0.08)',
        'card': '0 15px 35px -5px rgba(17, 45, 32, 0.12)',
        'elevated': '0 25px 50px -12px rgba(17, 45, 32, 0.25)',
      }
    },
  },
  plugins: [],
}
