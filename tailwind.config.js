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
      center: true, // センタリングを有効にする
      padding: '1rem', // コンテナのパディングを設定
      screens: {
        sm: '480px', // スクリーンサイズに応じたコンテナの最大幅を設定
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
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
        veryDarkBlue: 'hsl(180, 31%, 21%)',

        // Tag Color
        review: 'hsl(120, 50%, 70%)',
        python: 'hsl(0, 94%, 66%)',
        javascript: 'hsl(231, 69%, 60%)',
        typescript: 'hsl(231, 69%, 60%)',
        machinelearning: '#C8B6A6',
        cpp: '#C8B6A6',
        other: '#F1DEC9',
      },
      backgroundImage: {
        gradationBrawn: 'radial-gradient(circle at center, #C8B6A6, #E1D4C8)',
        gradationBrawnToB: 'linear-gradient(to bottom, #C8B6A6, #E1D4C8)',
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
