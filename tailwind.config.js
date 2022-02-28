module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sofia: ['Sofia', 'sans-serif'],
      },
      colors: {
        'primary-white': 'var(--white)',
        'dark-purple': 'var(--dark-purple)',
        'dark-brown': 'var(--dark-brown)',
        'light-brown': 'var(--light-brown)',
        'primary-orange': 'var(--orange)',
      },
    },
  },
  plugins: [],
};
