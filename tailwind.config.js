module.exports = {
        content: ["./app/**/*.{js,jsx}"],
        theme: {
          extend: {
            colors: {
              ink: '#130d21',
              panel: '#241A35',
              panelLight: '#2D2142',
              orange: '#FE7F05',
              purple: '#9747FF',
              muted: '#D9D9D9'
            },
            fontFamily: {
              sans: ['Roboto', 'sans-serif'],
              rubik: ['Rubik', 'sans-serif'],
              brand: ['Zen Antique Soft', 'serif']
            },
            boxShadow: {
              glowOrange: '0 0 45px rgba(254,127,5,.18)',
              glowPurple: '0 0 55px rgba(151,71,255,.2)'
            }
          }
        }
      };
