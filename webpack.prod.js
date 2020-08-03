const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
  output: {
    publicPath: '/',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].[hash].css',
    }),
    new WebpackCleanupPlugin({
      title: 'Marvel API Demo',
      template: './src/index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true
      },
    }),
  ]
});
