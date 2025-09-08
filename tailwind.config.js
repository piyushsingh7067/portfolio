export default {
    theme: {
      extend: {
        animation: {
          'pulse-slow': 'pulse 6s ease-in-out infinite',
        },
        keyframes: {
            slide: {
              '0%': { transform: 'translateX(-100%)' },
              '100%': { transform: 'translateX(100vw)' },
            },
          },
          animation: {
            slide: 'slide 15s linear infinite',
          },
      },
    },
  };
  