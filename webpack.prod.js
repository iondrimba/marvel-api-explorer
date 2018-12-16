const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const isProduction = (process.env.NODE_ENV === 'production');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].[hash].css',
    }),
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: isProduction,
        minifyCSS: isProduction,
        minifyJS: isProduction,
        removeComments: isProduction
      },
    }),
  ]
});
