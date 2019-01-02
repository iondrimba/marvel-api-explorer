const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.mp3', '.ico']
  },
  entry: {
    app: './src/scripts/app'
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /.j(s|sx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.html$/,
        use: ['raw-loader']
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: true,
              sourceMap: true,
              localIdentName: '[local]',
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              import: true,
              localIdentName: '[local]',
              importLoaders: true,
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.(mp3)$/,
        loader: 'file-loader?name=sounds/[name].[ext]'
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader?hash=sha512&digest=hex&name=images/[name].[hash].[ext]',
          },
          {
            loader: 'image-webpack-loader',
            options: {
              query: {
                mozjpeg: {
                  progressive: true,
                },
                gifsicle: {
                  interlaced: true,
                },
                optipng: {
                  optimizationLevel: 7,
                }
              }
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      title: 'Marvel API Demo',
      template: './src/index.html',
      inject: 'body'
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/manifest.webmanifest', to: 'manifest.webmanifest'
      },
      {
        from: 'src/.htaccess'
      },
      {
        from: 'src/favicon.ico', to: 'favicon.ico'
      },
      {
        from: './robots.txt', to: 'robots.txt'
      },
      {
        from: 'src/browserconfig.xml', to: 'browserconfig.xml'
      },
      {
        from: 'src/favicon-16x16.png', to: 'favicon-16x16.png'
      },
      {
        from: 'src/favicon-32x32.png', to: 'favicon-32x32.png'
      },
      {
        from: 'src/favicon-48x48.png', to: 'favicon-48x48.png'
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

module.exports = config;
