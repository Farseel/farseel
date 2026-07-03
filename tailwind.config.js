/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0B0B0B',
          secondary: '#111111',
          card: '#171717',
        },
        accent: {
          green: '#2FA84F',
          secondary: '#6DD17C',
          muted: '#3F6B52',
        },
        text: {
          light: '#F5F5F5',
          secondary: '#BDBDBD',
        },
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        'glow-emerald': '0 0 25px rgba(47, 168, 79, 0.15)',
        'glow-emerald-sm': '0 0 15px rgba(47, 168, 79, 0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
