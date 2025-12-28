import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'jaune-soleil': '#F7D060',
        'orange-doux': '#E88B5D',
        'marron-terre': '#6B4F4F',
        'vert-feuillage': '#5E8C61',
        'vert-menthe': '#A8C686',
        'vert-eau': '#6BA3A1',
        'creme': '#F5F0E6',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
