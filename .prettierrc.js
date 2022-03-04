/**
 * @type {import('prettier').Options}
 */
module.exports = {
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
}
