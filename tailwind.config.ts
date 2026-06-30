import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F4F4F4',
        surface: '#FFFFFF',
        mist: '#ECEEEE',
        ink: '#073331',
        muted: '#6F8580',
        brand: '#54897B',
        deep: '#032F2C'
      },
      fontFamily: {
        tenor: ['var(--font-tenor)', 'serif']
      },
      letterSpacing: {
        editorial: '0.28em',
        nav: '0.22em'
      },
      boxShadow: {
        soft: '0 30px 60px rgba(3, 47, 44, 0.12)'
      }
    }
  },
  plugins: []
};
export default config;
