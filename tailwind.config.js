module.exports = {
  content: ["./index.html", "./obrigado.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          green: '#25D366',
          greenHover: '#20bd5a',
          dark: '#111827',
          lightDark: '#1f2937'
        }
      },
      boxShadow: {
        'glow-green': '0 0 25px -3px rgba(37, 211, 102, 0.45)',
        'premium': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
        'card-smooth': '0 20px 45px -15px rgba(0, 0, 0, 0.07)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 2.5s infinite ease-in-out',
        'bounce-subtle': 'bounceSubtle 2s infinite ease-in-out',
        'scale-check': 'scaleCheck 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.5)' },
          '50%': { transform: 'scale(1.025)', boxShadow: '0 0 20px 6px rgba(37, 211, 102, 0.35)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        scaleCheck: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '60%': { transform: 'scale(1.15)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      }
    }
  }
}
