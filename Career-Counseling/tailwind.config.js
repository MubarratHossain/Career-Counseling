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
        'marquee': 'marquee 15s linear infinite',
        'flicker': 'flicker 1s infinite',  
        'gradient-animation': 'gradient 5s ease infinite',  
      },
      colors: {
        darkblue: '#003366', 
        darkerblue: '#001f33', 
        gradientStart: '#FF7F50',  
        gradientEnd: '#32CD32',   
      },
      keyframes: {
        backgroundAnimation: {
          '0%': { backgroundColor: '#003366' },
          '50%': { backgroundColor: '#001f33' },
          '100%': { backgroundColor: '#003366' },
        },
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
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '50%': { transform: 'translateX(2px)' },
          '75%': { transform: 'translateX(-2px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        flicker: {
          '0%': { color: 'rgb(255, 0, 127)' },  
          '25%': { color: 'rgb(255, 102, 0)' }, 
          '50%': { color: 'rgb(0, 0, 0)' },     
          '75%': { color: 'rgb(128, 128, 0)' }, 
          '100%': { color: 'rgb(255, 0, 0)' }, 
        },
       
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
