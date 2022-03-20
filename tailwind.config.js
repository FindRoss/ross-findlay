module.exports = {
  content: [
    ".public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1187px',
        '2xl': '1187px',
      },
    },
  },
  plugins: [],
}
