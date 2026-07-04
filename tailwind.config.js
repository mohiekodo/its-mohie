/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Canvas ──────────────────────────────────────────────────
        canvas: '#FFFFFF', // primary page background
        surface: '#F0F4F9', // card / section surface (Google blue-tinted gray)

        // ── Typography ──────────────────────────────────────────────
        ink: '#1F1F1F', // primary headings & body
        slate: '#5F6368', // muted / secondary text

        // ── Google Blue system ──────────────────────────────────────
        'google-blue': '#1A73E8', // links, active states, focus rings
        'active-tint': '#E8F0FE', // pill bg for active nav

        // ── Utility ─────────────────────────────────────────────────
        success: '#10b981',
        error: '#ef4444',
      },

      fontFamily: {
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'Consolas', 'monospace'],
      },

      letterSpacing: {
        tight: '-0.02em',
        snug: '-0.01em',
      },

      lineHeight: {
        reading: '1.75',
      },

      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },

      boxShadow: {
        float: '0 2px 20px rgba(0, 0, 0, 0.08)',
        'card-lift': '0 8px 30px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
