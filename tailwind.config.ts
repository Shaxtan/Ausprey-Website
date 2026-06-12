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
        primary: '#C0392B',
        'primary-dark': '#96281B',
        gold: '#8B6914',
        'gold-light': '#A07820',
        dark: '#1C1C1C',
        'off-white': '#F6F6F6',
        'surface-warm': '#F8F8F8',
        'gray-text': '#555555',
        'gray-light': '#E5E5E5',
      },
      fontFamily: {
        hero: ['var(--font-barlow)', 'Impact', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        card: '20px',
        btn: '50px',
      },
      boxShadow: {
        card: '0 4px 40px rgba(0,0,0,0.08)',
        'card-hover': '0 20px 60px rgba(192,57,43,0.15)',
        'glow-red': '0 0 60px rgba(192,57,43,0.2)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #fff 0%, #FDF6EC 60%, #FAF0E6 100%)',
        'gradient-red-gold': 'linear-gradient(135deg, #C0392B 0%, #D4A017 100%)',
        'gradient-dark': 'linear-gradient(180deg, #1A1A1A 0%, #2C1810 100%)',
      },
      animation: {
        'marquee-left': 'marqueeLeft 30s linear infinite',
        'marquee-right': 'marqueeRight 45s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
      },
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
