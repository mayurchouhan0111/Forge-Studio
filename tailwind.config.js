/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        'display': ['Space Grotesk', 'Outfit', 'sans-serif'],
        'heading': ['Space Grotesk', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      colors: {
        onyx: {
          950: '#04070A',
          900: '#0A0F18',
          800: '#121A27',
          700: '#1E293B',
        },
        emerald: {
           glow: '#34D399',
           accent: '#10B981',
           deep: '#059669',
        },
        solar: {
          amber: '#F59E0B',
          gold: '#FBBF24',
        },
      },
      boxShadow: {
        'emerald-glow': '0 0 35px -5px rgba(16, 185, 129, 0.3)',
        'amber-glow': '0 0 35px -5px rgba(245, 158, 11, 0.3)',
        'onyx-hover': '0 20px 40px -15px rgba(16, 185, 129, 0.25), 0 0 30px rgba(245, 158, 11, 0.15)',
      },
    },
  },
  plugins: [],
}