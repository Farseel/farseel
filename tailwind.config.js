/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F6F3EB',
          deep: '#EEE9DE',
        },
        ink: {
          DEFAULT: '#1C1A15',
          soft: '#55504A',
          faint: '#8C867B',
        },
        rust: {
          DEFAULT: '#A44E1A',
          deep: '#7E3A10',
        },
        line: '#E0DACC',
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
