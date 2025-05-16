/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          dark: "#050505",
          accent: "#4fd456",
          muted: "#aaa",
          card: "#111",
          primary: "#7c0d0d",
          hoverPrimary: "#5e0b0b",
        },
        keyframes: {
          fadeInUp: {
            'to': { opacity: 1, transform: 'translateY(0)' }
          },
          fall: {
            'to': {
              transform: 'translateY(100px) rotate(calc(var(--angle) * 2))',
              opacity: 0
            }
          }
        },
        animation: {
          fadeInUp: 'fadeInUp 1.2s ease-out forwards',
          fall: 'fall 1s ease-out forwards'
        }
      },
    },
    plugins: [],
  }
  