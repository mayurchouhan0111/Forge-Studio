/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        'display': ['Plus Jakarta Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      colors: {
        mocha: {
          DEFAULT: '#4F46E5',
          dark: '#4338CA',
          light: '#818CF8',
          gold: '#06B6D4',
        },
        forge: {
          amber: '#4F46E5',
          gold: '#6366F1',
          bronze: '#8B5CF6',
          glow: '#06B6D4',
          crimson: '#E11D48',
        },
        cyber: {
          cyan: '#06B6D4',
          blue: '#38BDF8',
          violet: '#A855F7',
          purple: '#8B5CF6',
          emerald: '#10B981',
          rose: '#F43F5E',
        },
        agency: {
          dark: '#F8FAFC',
          surface: '#FFFFFF',
          card: '#FFFFFF',
          border: 'rgba(226, 232, 240, 0.8)',
        },
      },
      boxShadow: {
        'mocha-glow': '0 0 35px -5px rgba(79, 70, 229, 0.25)',
        'amber-glow': '0 0 45px -10px rgba(79, 70, 229, 0.3)',
        'cyan-glow': '0 0 35px -5px rgba(6, 182, 212, 0.25)',
        'violet-glow': '0 0 35px -5px rgba(139, 92, 246, 0.25)',
        'glass-hover': '0 20px 40px -15px rgba(79, 70, 229, 0.15), 0 0 25px rgba(6, 182, 212, 0.15)',
      },
    },
  },
  plugins: [],
}