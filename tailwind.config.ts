import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#040d1a',
        'navy-light': '#071428',
        'navy-card': '#0a1628',
        'carbon-dark': '#030914',
        'carbon-navy': '#081426',
        'f1-yellow': '#f2e529',
        'f1-red': '#e10600',
        'f1-purple': '#b138dd',
        'fastest-lap': '#b138dd',
        'f1-white': '#f0f0f0',
        'f1-muted': '#8899aa',
      },
      fontFamily: {
        'mono-telemetry': ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'telemetry-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'gantry-flash': {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 12px #00ff00)' },
          '50%': { opacity: '0.2' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'telemetry-blink': 'telemetry-blink 1s steps(2, start) infinite',
        'gantry-flash': 'gantry-flash 0.3s ease-in-out 3',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.clip-angled': {
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)',
        },
        '.clip-angled-sm': {
          clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
        },
        '.clip-angled-tl': {
          clipPath: 'polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px)',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
};

export default config;
