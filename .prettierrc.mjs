module.exports = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  useTabs: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    },
  ],
}