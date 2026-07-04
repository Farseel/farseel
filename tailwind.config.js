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
          primary: '#060814',
          secondary: '#0a0d22',
          card: '#0d1127',
        },
        accent: {
          blue: '#3b82f6',
          sky: '#38bdf8',
          secondary: '#60a5fa',
          muted: '#1e293b',
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
        'glow-blue': '0 0 25px rgba(59, 130, 246, 0.2)',
        'glow-blue-sm': '0 0 15px rgba(59, 130, 246, 0.1)',
        'glow-sky': '0 0 25px rgba(56, 189, 248, 0.2)',
        'glow-sky-sm': '0 0 15px rgba(56, 189, 248, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
