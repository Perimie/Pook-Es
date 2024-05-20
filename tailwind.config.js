/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.ts",
    "./resources/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
    daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#40A578",
          
 "secondary": "#9DDE8B",
          
 "accent": "#E6FF94",
          
 "neutral": "#ffffff",
          
 "base-100": "#006769",
          
 "info": "#0000ff",
          
 "success": "#00ff00",
          
 "warning": "#FFA62F",
          
 "error": "#ff0000",
          },
        },
      ],
    },

  }

