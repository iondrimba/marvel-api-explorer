var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var postcssCssnext = require('postcss-cssnext');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var isProduction = (process.env.NODE_ENV === 'production');
var isTesting = (process.env.NODE_ENV === 'testing');
var apikey = process.env.npm_config_apikey;
var config = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.mp3', '.ico']
  },
  entry: {
    app: './src/scripts/app'
  },
  output: {
    path: __dirname + '/public',
    publicPath: '',
    filename: '[name].[hash].js'
  },
  devServer: isProduction ? {} : {
    inline: true,
    stats: 'errors-only',
    compress: isProduction,
    outputPath: './public',
    contentBase: './public'
  },
  module: {
    loaders: [
      {
        test: /.js|.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader!eslint-loader'
      },
      {
        test: /.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(s|c)css$/,
        loader: isProduction? ExtractTextPlugin.extract('css?root=.&modules&importLoaders=1&localIdentName=[local]!resolve-url!postcss!sass') :
          'style!css?modules&importLoaders=1&localIdentName=[local]!resolve-url!postcss!sass'
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file?name=fonts/[name].[ext]' + (isProduction ? '&publicPath=../' : '&publicPath=http://localhost:8080/')
      },
      {
        test: /\.(mp3)$/,
        loader: 'file?name=sounds/[name].[ext]' + (isProduction ? '&publicPath=../' : '&publicPath=/')
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=images/[name].[hash].[ext]' + (isProduction ? '&publicPath=../' : '&publicPath=/'),
          'image-webpack?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
        ]
      }
    ]

  },
  postcss: [
    postcssCssnext()
  ],
  plugins: [
    new SWPrecacheWebpackPlugin({
      cacheId: 'api',
      filename: __dirname +  '/public/api-service-worker.js',
      maximumFileSizeToCacheInBytes: 4194304,
      staticFileGlobs: ['public/**/*.{js,json,mp3,html,css,png,jpg,gif,woff2,woff,svg}'],
      stripPrefix: 'public',
      runtimeCaching: [{
        urlPattern: /^https\:\/\/gateway\.marvel\.com\/v1\/public.+/,
        handler: 'cacheFirst'
      }],
    }),
    new HtmlWebpackPlugin({
      title: 'Marvel API Demo',
      minify: {
        collapseWhitespace: isProduction,
        minifyCSS: isProduction,
        minifyJS: isProduction,
        removeComments: isProduction
      },
      template: './src/index.html',
      inject: 'body'
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/manifest.json', to: 'manifest.json'
      },
      {
        from: 'src/.htaccess'
      },
      {
        from: 'src/favicon.ico', to: 'favicon.ico'
      },
      {
        from: 'src/favicon-16x16.png', to: 'favicon-16x16.png'
      },
      {
        from: 'src/favicon-32x32.png', to: 'favicon-32x32.png'
      },
      {
        from: 'src/images', to: 'images'
      },
    ]),
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'API_KEY': JSON.stringify('13065ce22cdecaf8358b1b56dc54e2c7')
      }
    }),

  ]
};

if (isProduction) {
  config.plugins.push(new ExtractTextPlugin('./css/[name].[hash].css'));
  config.plugins.push(new webpack.optimize.DedupePlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  config.plugins.push(new CompressionPlugin({
    asset: '[path].gz',
    algorithm: 'gzip',
    test: /\.js$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  }));
  config.plugins.push();
}

module.exports = config;
