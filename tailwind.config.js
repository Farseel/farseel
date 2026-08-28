/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#161411',
        raised: '#1E1B16',
        cream: {
          DEFAULT: '#F2EDE1',
          muted: '#ACA494',
          faint: '#837B6C',
        },
        brass: {
          DEFAULT: '#C9A45C',
          bright: '#E2C689',
          deep: '#A98844',
        },
        terra: '#D98757',
        line: '#3A362D',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
