module.exports = {
  swDest: 'public/sw.js',
  runtimeCaching: [
    {
      urlPattern: /gateway\.marvel\.com.+/,
      handler: 'cacheFirst',
      options: {
        expiration: {
          maxEntries: 100,
        },
      },
    },
  ],
  globPatterns: ['**/*.{js,png,jpg,html,css,woff2,woff,svg}'],
  globDirectory: './public'
}
