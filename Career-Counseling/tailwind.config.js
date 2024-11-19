export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'spin-once': 'spinOnce 0.5s linear',
        'spin-sideways': 'spinSideways 1s ease-in-out',
        'slide-fade-in': 'slideIn 0.7s ease-out',
        'shake': 'shake 0.5s infinite', 
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        spinOnce: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spinSideways: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        slideIn: {
          '0%': {
            transform: 'translateY(-20px)', 
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)', 
            opacity: '1', 
          },
        },
        shake: {
          '0%, 100%': {
            transform: 'translateX(0)',  
          },
          '25%': {
            transform: 'translateX(-2px)', 
          },
          '50%': {
            transform: 'translateX(2px)', 
          },
          '75%': {
            transform: 'translateX(-2px)', 
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
