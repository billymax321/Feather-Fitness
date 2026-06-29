import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f4f4f4',
        paper: '#ffffff',
        ink: '#0a2f2f',
        muted: '#6f7f78',
        line: '#c7d8d1',
        primary: '#00592e',
        sage: '#5b877b',
        soft: '#eeeeec',
        dark: '#062f2d'
      },
      fontFamily: {
        tenor: ['var(--font-tenor)', 'serif']
      },
      letterSpacing: {
        brand: '0.34em',
        widebrand: '0.46em'
      }
    }
  },
  plugins: []
};
export default config;
