/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

import daisyui from "daisyui"

module.exports = withMT({ 
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
//     daisyui: {
//       themes: [
//         {
// //           mytheme: {
          
// //  "primary": "#BC7FCD",
          
// //  "secondary": "#FB9AD1",
          
// //  "accent": "#FFCDEA",
          
// //  "neutral": "#ffffff",
          
// //  "base-100": "#86469C",
          
// //  "info": "#0000ff",
          
// //  "success": "#00ff00",
          
// //  "warning": "#FFA62F",
          
// //  "error": "#ff0000",
// //           },
// //         },
//       ],
//     },

  });
