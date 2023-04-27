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
    container: {
      center: true, 
      padding: '1rem',
      screens: {
        xs: '375px',
        sm: '480px',
        md: '760px',
        lg: '1020px',
        xl: '1440px',
      },
    },

    screens: {
      xs: '375px',
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
        secondaryGreen: 'hsl(120, 60%, 70%)',
        
        // Soft Color
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        softGreen: 'hsl(120, 60%, 70%)',
        softYellow: 'rgb(238, 232, 170)',

        // Gray Color
        grayishBlue: 'rgb(75, 85, 99)',
        veryDarkBlue: 'hsl(180, 31%, 21%)',

        // Tag Color
        python: "hsl(50, 100%, 35%)",
        typeScript: "hsl(206, 65%, 45%)",
        react: "hsl(195, 100%, 60%)",
        cpp: "hsl(216, 100%, 30%)",
        machineLearning: "hsl(30, 100%, 60%)",
        ubuntu: "hsl(356, 100%, 50%)",
        aws: "hsl(340, 100%, 55%)",
        vscode: "hsl(200, 100%, 40%)",
        review: "hsl(146, 70%, 45%)",
      },
      backgroundImage: {
        gradationBlue: 'radial-gradient(circle at center, hsl(231, 69%, 60%), hsl(231, 69%, 70%))',
        gradationGreen: 'radial-gradient(circle at center, hsl(120, 50%, 60%), hsl(120, 50%, 70%))',
        gradationBrawn: 'radial-gradient(circle at center, #C8B6A6, #E1D4C8)',
        gradationBrawnToB: 'linear-gradient(to bottom, #C8B6A6, #E1D4C8)',
      },
    },
  },
}
