module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      require('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          Root: './src',
          Assets: './src/assets',
          Components: './src/components',
        }
      }
    ]
  ]
};
