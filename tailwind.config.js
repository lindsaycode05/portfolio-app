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
        'very-light-brown': 'var(--very-light-brown)',
        'very-light-orange': 'var(--very-light-orange)',
        'hero-number-primary': 'var(--hero-number-primary)',
        'hero-number-secondary': 'var(--hero-number-secondary)',
        'button-primary-from-gradient': 'var(--button-primary-from-gradient)',
        'button-primary-to-gradient': 'var(--button-primary-to-gradient)',
      },
    },
  },
  plugins: [],
};
