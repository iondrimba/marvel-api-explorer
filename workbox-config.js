module.exports = {
  swDest: 'public/sw.js',
  runtimeCaching: [
    {
      urlPattern: /^https\:\/\/gateway\.marvel\.com\/v1\/public.+/,
      handler: 'cacheFirst',
      options: {
        expiration: {
          maxEntries: 20,
        },
      },
    },
  ],
  globPatterns: ['**/*.{js,png, jpg,html,css,woff2,woff,svg}'],
  globDirectory: './public'
}
