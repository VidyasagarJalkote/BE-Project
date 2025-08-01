module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E6F0FF',
          200: '#B3D1FF',
          300: '#80B3FF',
          400: '#4D94FF',
          500: '#1A75FF',
          600: '#005CE6',
          700: '#0047B3',
          800: '#003280',
          900: '#001D4D',
        },
        dark: {
          100: '#CCCCCC',
          200: '#999999',
          300: '#666666',
          400: '#333333',
          500: '#000000',
        }
      }
    },
  },
  plugins: [],
};