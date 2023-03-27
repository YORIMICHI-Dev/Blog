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

    colors: {
      white: "#f4f4ec",
      black: "#333333",
    },

    extend: {
      colors: {
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

        // Gray Color
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
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
