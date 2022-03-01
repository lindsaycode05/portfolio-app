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
        'about-span': 'var(--about-span)',
        'hobbies-from-gradient': 'var(--hobbies-from-gradient)',
        'hobbies-to-gradient': 'var(--hobbies-to-gradient)',
        'triphop-color': 'var(--triphop-color)',
        'button-secondary-from-gradient': 'var(--button-secondary-from-gradient)',
        'button-secondary-to-gradient': 'var(--button-secondary-to-gradient)',
      },
    },
  },
  plugins: [],
};
