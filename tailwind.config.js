/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '1020px',
      xl: '1440px',
    },

    extend: {
      colors: {
        // White, Black
        white: "#ffffff",
        black: "#333333",

        // Main Color
        mainBrawn: '#A4907C',
        secondBrawn: '#C8B6A6',
        thirdBrawn: '#F1DEC9',

        // Secondary Color
        secondaryGreen: 'hsl(120, 50%, 70%)',
        
        // Soft Color
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        softGreen: 'hsl(120, 50%, 70%)',
        softYellow: '',

        // Gray Color
        grayishBlue: 'rgb(107 114 128)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',

        // Tag Color
        review: 'hsl(120, 50%, 70%)',
        python: 'hsl(0, 94%, 66%)',
        javascript: 'hsl(231, 69%, 60%)',
        typescript: 'hsl(231, 69%, 60%)',
        machinelearning: 'hsl()',
        cpp: '',
        other: '#F1DEC9',
      },
    },
  },
  plugins: [require("daisyui")],

  // daisyui config
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
