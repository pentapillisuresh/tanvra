module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'shimmer': 'shimmer 3s infinite',
        'strip-in': 'stripIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'strip-out': 'stripOut 1s cubic-bezier(0.7, 0, 0.84, 0) forwards',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}