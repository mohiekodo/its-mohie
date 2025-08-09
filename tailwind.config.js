/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1a1b26',
        'secondary-dark': '#24283b',
        'accent-gold': '#f7ba2e',
        'accent-teal': '#2dd4bf',
        'success-green': '#10b981',
        'text-primary': '#ffffff',
        'text-secondary': '#9ca3af',
        'border-subtle': '#374151'
      },
      fontFamily: {
        mono: ['SF Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        typing: 'typing 3.5s steps(40, end)',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate'
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(247, 186, 46, 0.3)',
        'teal-glow': '0 0 20px rgba(45, 212, 191, 0.3)',
        'leadership-card': '0 10px 40px rgba(247, 186, 46, 0.1)'
      }
    }
  },
  plugins: []
};

